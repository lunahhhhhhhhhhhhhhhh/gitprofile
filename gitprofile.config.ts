// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lunahhhhhhhhhhhhhhhh', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Luna Underwood',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'lunahhhhhhhhhhhhhhhh',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '', // example: 'arifszn'
    dev: '', // example: 'arifszn'
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '', // example: https://www.arifszn.com
    phone: '',
    email: '', // example: 'arifulalamszn@gmail.com'
  },
  resume: {
    fileUrl: '', // example: https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf. Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'React.js',
    'TypeScript',
    'Vue.js',
    'Node.js',
    'Next.js',
    'D3.js',
    'Cypress.io',
    'Golang',
    'Python',
    'Kubernetes',
    'AWS',
    'GitHub Actions',
    'Agile',
    'Firebase',
    'Flutter',
    'Angular',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Koan Technologu',
      position: 'Mobile Lead',
      from: 'December 2022',
      to: 'Present',
      companyLink: 'https://koan.co.nz',
    },
    {
      company: 'Portainer',
      position: 'Full Stack Software Engineer (Intermediate)',
      from: 'February 2022',
      to: 'December 2022',
      companyLink: 'https://www.portainer.io',
    },
    {
      company: 'Portainer',
      position: 'Quality Assurance Engineer',
      from: 'September 2020',
      to: 'February 2022',
      companyLink: 'https://www.portainer.io',
    },
    {
      company: 'Portainer',
      position: 'Application Developer',
      from: 'March 2019',
      to: 'September 2020',
      companyLink: 'https://www.portainer.io',
    },
    {
      company: 'Forsite',
      position: 'Software Development Intern',
      from: 'July 2018',
      to: 'June 2019',
      companyLink: 'https://getforsite.com',
    },
  ],
  certifications: [
    /* {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    } */
  ],
  educations: [
    {
      institution: 'Auckland University of Technology',
      degree: 'Bachelor of Computer and Information Sciences',
      from: '2016',
      to: '2019',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // examples: medium | dev
    username: '', // example: arifszn. to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
