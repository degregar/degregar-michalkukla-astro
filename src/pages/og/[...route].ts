import { OGImageRoute } from 'astro-og-canvas';

const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const words = text.split(' ').length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return `(${readingTime} min)`;
};

const directory = '/src/content/';

const rawPages = import.meta.glob('/src/content/**/*.md', { eager: true }) as unknown as any;

// Remove the /src/content prefix from the paths
const pages = Object.entries(rawPages).reduce((acc, [path, page]) => ({ ...acc, [path.replace(directory, '')]: page }), {});

const getDescriptionWithReadingTime = (description: string, time: string) => {
  if (description.length > 0) {
    return `${description} ${time}`;
  }

  return time;
};

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (path, page) => {
    const { title, description, ogTitle, ogDescription } = page.frontmatter;

    const chosenTitle = ogTitle || title;
    const chosenDescription = ogDescription || description || '';
    const time = calculateReadingTime(page.compiledContent());

    const descriptionWithReadingTime = getDescriptionWithReadingTime(chosenDescription, time);

    return {
      title: chosenTitle,
      description: descriptionWithReadingTime,
      bgImage: {
        path: './public/og-orange-bg-dark-smooth-big-grain-avatar.png',
        fit: 'cover',
        position: 'center'
      },
      padding: 65,
      font: {
        title: {
          families: ['Newsreader'],
          weight: 'Medium',
          size: 80,
          color: [255, 255, 255],
          lineHeight: 1.1
        },
        description: {
          families: ['Inter'],
          weight: 'Normal',
          size: 32,
          color: [248, 219, 204],
          lineHeight: 1.4
        }
      },
      fonts: ['./src/fonts/Newsreader.ttf', './src/fonts/Inter.ttf']
    };
  }
});
