import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import wikiLinkPlugin from '@braindb/remark-wiki-link';
import { bdb } from './src/lib/braindb.mjs';
import rehypeExternalLinks from 'rehype-external-links';
import icon from 'astro-icon';
import remarkCallout from 'remark-callout';

await bdb.ready();

export default defineConfig({
  site: 'https://michalkukla.pl',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    }),
    icon()
  ],
  vite: {
    optimizeDeps: {
      exclude: ['fsevents', '@node-rs/xxhash-wasm32-wasi', '@napi-rs/simple-git-darwin-x64', '@napi-rs/simple-git-darwin-arm64']
    }
  },
  markdown: {
    remarkPlugins: [
      remarkCallout,
      [
        wikiLinkPlugin,
        {
          aliasDivider: '|',
          linkTemplate: ({ slug, alias }) => {
            let [slugWithoutAnchor, anchor] = slug.split('#');
            const prefix = 'astrotest/content/blog/';
            if (slugWithoutAnchor.startsWith(prefix)) {
              slugWithoutAnchor = slugWithoutAnchor.slice(prefix.length);
            }
            const doc = bdb.documentsSync({
              slug: slugWithoutAnchor
            })[0];
            if (doc) {
              const docUrl = doc.url().replace(/\/$/, '');
              return {
                hName: 'a',
                hProperties: {
                  href: anchor ? `${docUrl}#${anchor}` : docUrl
                },
                hChildren: [
                  {
                    type: 'text',
                    value: alias == null ? doc.frontmatter().title : alias
                  }
                ]
              };
            } else {
              if (slug.startsWith('#')) {
                const tagUrl = `/tags/${slug.slice(1)}`;
                return {
                  hName: 'a',
                  hProperties: {
                    href: tagUrl
                  },
                  hChildren: [
                    {
                      type: 'text',
                      value: alias || slug
                    }
                  ]
                };
              }
              return {
                hName: 'span',
                hProperties: {
                  class: 'broken-link',
                  onClick: `showModal('${slug}')`
                },
                hChildren: [
                  {
                    type: 'text',
                    value: alias || slug
                  }
                ]
              };
            }
          }
        }
      ]
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: {
            type: 'text',
            value: ' ↗'
          },
          target: '_blank',
          rel: ['noopener', 'noreferrer']
        }
      ]
    ]
  },
  redirects: {
    '/feed': '/rss.xml',
    konsulting: '/konsultacje/'
  }
});
