import project1 from "../assets/projects/musicApp.png";
import project2 from "../assets/projects/heroes.png";
import project3 from "../assets/projects/333.png";
import project4 from "../assets/projects/project-4.jpg";



export const HERO_CONTENT = `I am an experienced Front-End developer with extensive knowledge in user interface development and creating dynamic web applications. I specialize in using HTML, CSS (SCSS), JavaScript technologies, as well as frameworks and libraries such as React and Redux. I have experience with version control systems (Git), build tools (Webpack), and tight integration with RESTful APIs and databases. I understand the principles of UI/UX, experience with Figma and Marcy.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front end developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Redux (toolkit and Query), Next.js, firebase. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
    title: "Music website",
    image: project1,
    description:
      "MusicStream is a full-featured music streaming web application inspired by Spotify. It offers users a seamless experience to explore, listen, and enjoy a vast collection of songs and artists from around the world",
    technologies: ["HTML", "CSS", "React", "Redux Query", "Tailwind"],
    link: "https://jsm-lyrics-music-app.netlify.app"
  },
  {
    title: "Hero Admin Dashboard",
    image: project2,
    description:
      "a project in which you can add or remove a hero by adding data and abilities to him. You can also filter heroes by super ability. All heroes and filters are added, removed and loaded from the firebase database",
    technologies: ["HTML", "CSS", "React", "Redux toolkit", "Firebase Database"],
    link: "https://donatio3.github.io/hero-redux-app-firebase/"
  },
  {
    title: "Marvel Character & Comics Explorer",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Redux toolkit", "React Router", "Lazy/Suspense"],
    link: "https://donatio3.github.io/Marvel-App-Api"
  },
];

export const CONTACT = {
  address: "Moldova, Balti",
  phoneNo: "+373 789 12 992",
  email: "sinatkron@gmail.com",
};
