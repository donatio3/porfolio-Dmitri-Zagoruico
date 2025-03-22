import nextPizza from "../assets/projects/nextPizza.png";
import project2 from "../assets/projects/heroes.png";
import project3 from "../assets/projects/333.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/PROJECT 5.jpg";

export const ABOUT_TEXT = `Я Front-End разработчик, специализирующийся на React / Next.js, Redux (Toolkit) / Zustand и TypeScript. Умею работать с SSR, API, Prisma, Firebase. Постоянно развиваюсь, решаю задачи на Leetcode, знаю основные алгоритмы поиска и сортировки. Люблю создавать удобные и производительные веб-приложения, работать в команде и решать сложные задачи.`
export const ABOUT_TEXT_ENG = `I am a Front-End developer specializing in React / Next.js, Redux (Toolkit) / Zustand, and TypeScript. I have experience with SSR, API, Prisma, and Firebase. I continuously improve my skills, solve problems on Leetcode, and have knowledge of fundamental search and sorting algorithms. I enjoy creating user-friendly and high-performance web applications, working in a team, and tackling complex challenges.`

export const HERO_CONTENT_ENG = `I am an experienced Front-End developer with extensive knowledge in user interface development and creating dynamic web applications. I specialize in using HTML, CSS (SCSS), JavaScript technologies, as well as frameworks and libraries such as React and Redux. I have experience with version control systems (Git), build tools (Webpack), and tight integration with RESTful APIs and databases. I understand the principles of UI/UX, experience with Figma and Marcy.`;
export const HERO_CONTENT = `Я опытный Front-End разработчик с обширными знаниями в разработке пользовательских интерфейсов и создании динамических веб-приложений. Специализируюсь на использовании HTML, CSS (SCSS), JavaScript, а также таких фреймворков и библиотек, как React и Redux / Zustand. Имею опыт работы с TypeScript и Next.js (включая SSR, ISR и API Routes), а также с базами данных через Prisma. Обладаю навыками работы с системами контроля версий (Git), инструментами сборки (Webpack) и интеграцией с RESTful API и базами данных. Понимаю принципы UI/UX, имею опыт работы с Figma и Marcy.`

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Next.js Pizza Ordering App",
    image: nextPizza,
    description: `Developed a Dodo Pizza clone – a web application for ordering food and drinks, featuring authentication and payment integration.  
        Functionality:
        - Authentication via GitHub, Google, and email  
        - Ordering pizza, food, and drinks  
        - Payment via the test gateway YooKassa  
        - Flexible routing (Parallel & Group Routes)  
        - Server Actions and API for data processing`,
    technologies: ['Next.js', "TypeScript", "Prisma + PostgreSQL", "NextAuth (GitHub, Google, email), JWT-токены", "Zustand ", "TailwindCSS + ShadCN"],
    link: "https://next-pizza-one-blond.vercel.app/"
  },
  {
    title: "Marvel Character & Comics Explorer",
    image: project3,
    description:
      "A web application for browsing and discovering all Marvel characters and their comics.",
    technologies: ["React", "Redux toolkit", "React Router", "Lazy/Suspense", "HTML", "CSS"],
    link: "https://donatio3.github.io/Marvel-App-Api"
  },
  {
    title: "Hero Admin Dashboard",
    image: project2,
    description:"A project where you can add or remove a hero by entering their data and abilities. You can also filter heroes by superpowers. All heroes and filters are added, removed, and loaded from the database.",
    technologies: ["Bootstrap", "Next.js", "Typescript", "Redux (RTK QUERY, toolkit)", "Prisma + PostgreSQL", ],
    link: "https://heroes-app-management-fofx10o2u-dmitris-projects-75943609.vercel.app/"
  },
  {
    title: "Watch Pulse JS Landing project",
    image: project5,
    description: 'A landing page with beautiful animations, sliders, tabs, and a product order form.',
    technologies: ['JavaScript', 'SCSS', 'HTML'],
    link: "https://donatio3.github.io/watch-pulse-js/"
  },
  {
    title: "Bootstrap Uber project",
    image: project4,
    technologies: ["Bootstrap", 'Css', 'Html'],
    link: "https://donatio3.github.io/Bootstrap-Uber-project/"
  },
  
  
];

export const CONTACT = {
  address: "Moldova, Balti",
  phoneNo: "+373 789 12 992",
  email: "sinatkron@gmail.com",
};
