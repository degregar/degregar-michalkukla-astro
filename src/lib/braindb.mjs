import { slug as githubSlug } from 'github-slugger';
import path from 'node:path';
import process from 'node:process';
import { BrainDB } from '@braindb/core';

// slug implementation according to Astro
// see astro/packages/astro/src/content/utils.ts
const generateSlug = (filePath) => {
  const withoutFileExt = filePath.replace(new RegExp(path.extname(filePath) + '$'), '');

  const rawSlugSegments = withoutFileExt.split(path.sep);
  const slug = rawSlugSegments
    // Slugify each route segment to handle capitalization and spaces.
    // Note: using `slug` instead of `new Slugger()` means no slug deduping.
    .map((segment) => githubSlug(segment))
    .join('/')
    .replace(/\/index$/, '');

  return slug;
};

export const bdb = new BrainDB({
  root: path.resolve(process.cwd(), 'src/content'),
  url: (filePath, _frontmatter) => `${generateSlug(filePath)}/`,
  git: process.cwd()
});

bdb.start();

let unresolvedLinksCount = 0;
const allUnresolvedLinks = {};

bdb.on('*', (action, opts) => {
  if (opts) {
    opts.document.unresolvedLinks().forEach((link) => {
      unresolvedLinksCount++;

      const doNotDelete_thisIsNeededToResolveLnkProperty = link.from();

      const linkTo = link.lnk.to_slug;
      if (linkTo) {
        if (!allUnresolvedLinks[linkTo]) {
          allUnresolvedLinks[linkTo] = 0;
        }

        allUnresolvedLinks[linkTo]++;
      }
    });
  }
});

bdb.on('ready', () => {
  const sortedUnresolvedLinks = Object.entries(allUnresolvedLinks).sort((a, b) => b[1] - a[1]);
  console.log('Top 10 unresolved links:');
  console.table(sortedUnresolvedLinks.slice(0, 10).map(([slug, count]) => ({ slug, count })));
});
