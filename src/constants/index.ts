import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Web Developer",
    company: "Accenture Inc.",
    description: `Delivering e-commerce(not limited to e-commerce) software solution using latest tech­nology(ReactJS/TS, React Native, NodeJS, NextJS) Collaborate with other developers
and UI/UX designer, converting figma design into responsive and interactive pages, ensure new and existing application meet quality standard, integrating API using
React Query, Axios & GraphQL Creating reusable classes/mixins styles using LESS
(CSS preprocessors), and reusable component in react and used Styled Component
to be more convenient in development. Created/Maintained plugins and API for quotation , reports, pricing, payments, shipping, taxes, and more. to connect to the data sources. Implements unit testing using Jest for React and (Mocha, chai) for NodeJS. Building
& Deploying project using CircleCI, Docker, GitHub, AWS Web Services. Utilized
Git and GitHub for version control, ensuring efficient project maintenance and collaboration. Also have broad experience of working on end to end software development through Agile methodology (Scrum).`,
    technologies: [
      "HTML",
      "CSS",
      "React Native",
      "ReactJS",
      "NodeJS",
      "NextJS",
      "AWS",
      "MongoDB",
    ],
  },
  {
    year: "2022 - 2023",
    role: "Web Developer",
    company: "Collabera Inc.",
    description: `Delivering web software solution using latest technology(ReactJS, NodeJS) Creating reusable classes/mixins styles using LESS (CSS preprocessors), and reusable component in react and used Styled Component to be more convenient in development. Created API for quotation, reports, pricing and payment to connect to the data sources. Building & Deploying project using CircleCI, Docker, GitHub, AWS Web Services. `,
    technologies: ["HTML", "CSS", "ReactJS", "NextJS", "MongoDB"],
  },
  {
    year: "2021 - 2022",
    role: "Software Engineer Stack Developer",
    company: "Pointwest",
    description: `Responsible 
in developing a Front-end ReactJS and Back-end Solution which integrate witl facilitate Email Management features on demand. Designing solutions 
using one or more AWS features, tools and technologies such as Step Function, 53, DynamoDB, Event Bridge,SQS, SNS, Cloud Formation, Lambda, CloudWatch, Comprehend, RDS, 1AM, API Gateway, AWS CLI, REST API. 
Also:
-	Unit Testing 
-	Front-end Integration 
-	Agile Methodologies  `,
    technologies: [
      "HTML",
      "CSS",
      "React Native",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "AWS Step Function",
      "AWS Lambda",
      "AWS RDS",
      "MongoDB",
    ],
  },
  {
    year: "2019 - 2021",
    role: "Web Developer",
    company: "H.R.D Singapore Pte., Ltd.",
    description: `Responsible 
in developing in-house web portal in assign department to automate 50% of production process and to eliminate delays and increase productivity. 
Including the ff. 
-	HRD Web Scheduler: Managing meeting schedule where user can set meetings on the web and check if all attendees are available and can generate reports to see how frequent each departments render meeting.
-	HRD Henkou System: Monitors how long the changes in documents take by manually setting up what time/date they started and finished. This system includes all of the departments in the company. It automatically trace where is the plan processing on per department so each user can easily identify the status of document/plan if finished or not. It can also generate analytics and reports and have a master maintenance where admin users can change the settings.`,
    technologies: [
      "HTML",
      "CSS",
      "VueJS",
      "ExpressJS",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS DynamoDB",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "NodeJS",
      "AWS",
      "WordPress",
      "Zapier",
    ],
  },
  {
    title: "E-Commerce App",
    image: project2,
    description:
      "An application for features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "React Native", "NodeJS", "AWS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Vite", "Tailwind", "Typescript"],
  },
  {
    title: "Unified Agent Portal (SaaS)",
    image: project4,
    link: "https://aws.amazon.com/marketplace/pp/prodview-f4i3z5xajwm2y",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React", "Express", "NodeJS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+63 908 522 0338 ",
  email: "robertcadahing@ymail.com",
};
