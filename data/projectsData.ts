interface Project {
  title: string
  description: string
  href?: string
  status: string
  URL: string
  technologies: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: `Order Form`,
    description: `Custom order form which sends data to google sheet`,
    status: `PRODUCTION`,
    URL: `https://atelier-adelina.netlify.app`,
    technologies: `react, formik, mui`,
    href: `https://atelier-adelina.netlify.app`,
  },
  {
    title: `Order Form with adress lookup`,
    description: `Custom order form which sends data to google sheet`,
    status: `WIP`,
    URL: `https://dolci-di-david.netlify.app/`,
    technologies: `react, formik, mui`,
    href: `https://dolci-di-david.netlify.app/`,
  },
  {
    title: `CYCLING CODE BLOG`,
    description: `articles in spanish about cycling`,
    status: `PRODUCTION`,
    URL: `https://alexbran8.github.io/me`,
    technologies: `next.JS`,
    // href: `https://github.com/alexbran8/me`,
  },
  {
    title: `THE WALL`,
    description: `object detection`,
    status: `POC`,
    URL: `https://alexbran8.github.io/react-tensorflow-wall-project/`,
    technologies: `PWA react & tensorflow.JS`,
    // href: `/blog/the-wall`,
  },
  {
    title: `Resource Planning Management`,
    description: `plan work and vacations`,
    status: `PRODUCTION`,
    URL: `https://alexbran8.github.io/me`,
    technologies: `node, react`,
    // href: `https://github.com/alexbran8/me`,
  },
  {
    title: `Dashboard`,
    description: `CRUD for managing service request tickets`,
    status: `PRODUCTION`,
    URL: `https://alexbran8.github.io/me`,
    technologies: `django, node, react`,
    // href: `https://github.com/alexbran8/me`,
  },
  {
    title: `UI Projects`,
    description: `Templates for UI`,
    status: `WIP`,
    URL: `https://alexbran8.github.io/ui_projects/`,
    technologies: `react`,
    // href: `https://github.com/alexbran8/ui_projects`,
  },
  {
    title: `E-commerce`,
    description: `Online gallery & e-commerce`,
    status: `POC`,
    URL: ``,
    technologies: `Node, React`,
    href: '',
  },
  {
    title: `BASH-RELEASE`,
    description: `semantic versioning`,
    status: `WIP`,
    URL: '',
    technologies: `bash`,
    href: '',
  },
  {
    title: `ancaluca.ro`,
    description: `Massage & Kineto`,
    status: `WIP`,
    URL: `https://alexbran8.github.io/me/#/blog`,
    technologies: `react`,
    // href: `https://github.com/alexbran8/blog`,
  },
  {
    title: `alergampentruviata.ro`,
    description: `Team and projects presentation. Donations.`,
    status: `CLOSED/CANCELED`,
    URL: `https://alexbran8.github.io/me/#/blog`,
    technologies: `react`,
    // href: `https://github.com/alexbran8/blog`,
  },
  {
    title: `webservices.ro`,
    description: `Old idea...`,
    status: `POC`,
    URL: `https://webservices.ro/`,
    technologies: `next.JS`,
    // href: `https://github.com/alexbran8/webservices`,
  },
  // {
  //   title: `React Blueprint`,
  //   description: `I did this only to overcome be much more organized...`,
  //   status: `WIP`,
  //   URL: `https://github.com/alexbran8/react-blueprint`,
  //   technologies: `react`,
  //   href: `https://github.com/alexbran8/react-blueprint`,
  // },
  // {
  //   title: `Security Testing 101`,
  //   description: `I did this only to develop my security testing skills`,
  //   status: `WIP`,
  //   URL: `https://github.com/alexbran8/security-tests`,
  //   technologies: `react`,
  //   href: `https://github.com/alexbran8/security-tests`,
  // },
  // {
  //   title: 'A Search Engine',
  //   description: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   imgSrc: `${publicRuntimeConfig.basePath}/static/images/google.png`,
  //   href: 'https://www.google.com',
  // },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: `${publicRuntimeConfig.basePath}/static/images/time-machine.jpg`,
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
