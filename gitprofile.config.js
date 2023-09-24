// gitprofile.config.js

const config = {
  github: {
    username: 'tzuminglu', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ["tzuming_resume "], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Tzu-Ming Lu',
    website: 'https://tzuminglu.github.io/',
    phone: '848-228-0070',
    email: 'tlu14@stevens.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/tzuminglu/tzuming_resume/blob/main/Tzu_Ming_Lu_Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'Java',
    'JavaScript',
    'Python',
    'C#',
    'TypeScript',
    'HTML/CSS',
    'React.js',
    'Node.js',
    'Next.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    "Redis",
    'Git',
    'Docker',
    'Kubernetes',,
    'Tailwind CSS',
    "Bootstrap"
  ],
  experiences: [
    {
      company: 'Compal Electronics',
      position: 'Industrial Engineer',
      from: 'October 2020',
      to: 'September 2021',
      companyLink: 'https://www.compal.com/',
    },
  ],
  certifications: [
    {
      name: 'Yuan Ze University Department of Graduate Program',
      body: 'Completion in Operating Systems & Design and Analysis of Algorithms',
      year: 'February 2022 to June 2022',
    },
  ], 
  education: [
    {
      institution: 'Stevens Institution of Technology',
      degree: 'Master of Science in Computer Science',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'National Chiao Tung University',
      degree: 'Master of Science in Industrial Engineering and Management',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'Yuan Ze University',
      degree: 'Bachlor of Science in Industrial Engineering and Management',
      from: '2016',
      to: '2012',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
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
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
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
  footer: `Made by Tzu Ming Lu / Template Based on arifszn &copy;`,
};

export default config;
