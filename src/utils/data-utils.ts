import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

export function sortItemsByDateDesc(itemA: CollectionEntry<'blog' | 'projects'>, itemB: CollectionEntry<'blog' | 'projects'>) {
  // @ts-ignore
  const bDate = itemB.data.publishedAt || itemB.data.created;
  // @ts-ignore
  const aDate = itemA.data.publishedAt || itemA.data.created;

  return new Date(bDate).getTime() - new Date(aDate).getTime();
}

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
  const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
  return tags
    .map((tag) => {
      return {
        name: tag,
        slug: slugify(tag)
      };
    })
    .filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
    });
}

export function getPostsByTag(posts: CollectionEntry<'blog'>[], tagSlug: string) {
  const filteredPosts: CollectionEntry<'blog'>[] = posts.filter((post) =>
    (post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug)
  );
  return filteredPosts;
}
