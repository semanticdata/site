import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://semanticdata.github.io/site/', // not full domain due to workaround for GitHub Pages
  title: 'Nordlys Site',
  description: 'A minimal Astro blog site.',
  author: 'Miguel Pimentel',
  navbarItems: [
    { label: 'Blog', href: '/posts' },
    { label: 'Projects', href: '/projects' },
    { label: 'Tags', href: '/tags' },
    { label: 'About', href: '/about' },
    {
      label: 'Other pages',
      children: [
        { label: 'Landing page', href: '/' },
        { label: '404 page', href: '/404' },
        { label: 'Author: FjellOverflow', href: '/authors/FjellOverflow' },
        { label: 'Tag: documentation', href: '/tags/documentation' }
      ]
    }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/semanticdata/site',
      label: 'Github'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-mono',
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
