export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: 'Michał Kukla',
  subtitle: 'digital garden',
  description: 'Michał Kukla - digital garden, blog, projects and more.',
  image: {
    src: '/dante-preview.jpg',
    alt: 'Dante - Astro.js and Tailwind CSS theme'
  },
  headerNavLinks: [
    {
      text: 'Strona główna',
      href: '/'
    },
    {
      text: 'Projekty',
      href: '/projects'
    },
    {
      text: 'Teksty',
      href: '/blog'
    },
    {
      text: 'Tagi',
      href: '/tags'
    }
  ],
  footerNavLinks: [
    // {
    //   text: 'About',
    //   href: '/about'
    // },
    // {
    //   text: 'Contact',
    //   href: '/contact'
    // },
    // {
    //   text: 'Terms',
    //   href: '/terms'
    // }
  ],
  socialLinks: [
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kukla-michal/'
    },
    {
      text: 'Facebook',
      href: 'https://www.facebook.com/degregar'
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/michalkukla.pl/'
    },
    {
      text: 'YouTube',
      href: 'https://www.youtube.com/@michalkuklapl'
    },
    {
      text: 'X/Twitter',
      href: 'https://twitter.com/michalkuklapl'
    }
  ],
  hero: {
    // title: 'Cześć 👋 witam Cię w moim digital garden!',
    text: 'Jestem programistą, przedsiębiorcą, twórcą internetowym i ojcem trójki dzieci. Rozpocząłem ponad 60 projektów biznesowych.\n\nObecnie skupiam się na rozwijaniu <a href="/projects/slowtracker">SlowTracker</a> - aplikacji dedykowanej mindful living i osobistemu rozwojowi poprzez śledzenie codziennych osiągnięć.\n\nMieszkam w Zawoi pod Babią Górą, gdzie pracuję zdalnie, tworząc głównie prototypy innowacyjnych narzędzi wspierających produktywność i podejmowanie decyzji.',
    // image: {
    //   src: '/hero.jpeg',
    //   alt: 'A person sitting at a desk in front of a computer'
    // },
    actions: [
      // {
      //   text: 'Get in Touch',
      //   href: '/contact'
      // }
    ]
  },
  subscribe: {
    title: 'Zapisz się do mojego newslettera',
    text: 'Wszystkie najnowsze posty i projekty dostarczane bezpośrednio do Twojej skrzynki e-mail.',
    formUrl: 'https://app.convertkit.com/forms/5305310/subscriptions'
  },
  postsPerPage: 8,
  projectsPerPage: 8
};

export default siteConfig;
