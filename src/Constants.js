import { FaLinkedin, FaGithub, FaReact, FaJava } from "react-icons/fa";
import {
  SiSpring,
  SiExpress,
  SiSqlite,
  SiPython,
  SiMui,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const myDetails = {
  name: "Sunil Devabattula",
  role: "Full Stack developer",
  email: "sunildevabathula013@gmail.com",
  image:
    "https://res.cloudinary.com/sunil013/image/upload/v1722066603/profile_pic_scvupm.png",
  phone: "9553901412",
  dailCode: "+91",
};

const socialMediaData = [
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/sunil013/",
  },
  {
    name: "Github",
    Icon: FaGithub,
    link: "https://github.com/sunil013",
  },
];

const tabsData = [
  {
    name: "About",
    id: "ABOUT",
  },
  {
    name: "Resume",
    id: "RESUME",
  },
  {
    name: "Portfolio",
    id: "PORTFOLIO",
  },
  {
    name: "Contact",
    id: "CONTACT",
  },
];

const workData = [
  {
    name: "Frontend Development",
    description:
      "Specializing in frontend technologies to create intuitive user interfaces and responsive web applications.",
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066597/iconDev_pl8p0k.svg",
  },
  {
    name: "Backend Development",
    description:
      "Experienced in backend development using frameworks like Spring, focusing on robust server-side functionalities and seamless integration.",
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066597/iconDev_pl8p0k.svg",
  },
  {
    name: "Clean Code",
    description:
      "Dedicated to writing clean, maintainable code following best practices and coding standards.",
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066596/iconDesign_tqprso.svg",
  },
  {
    name: "Performance Improvement",
    description:
      "Focused on optimizing application performance to enhance efficiency and user experience.",
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066597/iconDev_pl8p0k.svg",
  },
];

const educationData = [
  {
    specialization: "Full Stack Developer",
    college: "NxtWave(CCBP)",
    location: "Online",
    duration: "Feb 2022 - Dec 2022",
  },
  {
    specialization: "Bachelor in Information Technology",
    college: "Gudlavalleru Engineering(GEC)",
    location: "Gudlavalleru(AP)",
    duration: "July 2019 - Apr 2022",
  },
  {
    specialization: "Diploma in Computer Engineering",
    college: "AANM & VVRSR Polytechnic",
    location: "Gudlavalleru(AP)",
    duration: "July 2016 - Apr 2019",
  },
];

const experienceData = [
  {
    company: "IndigoLearn",
    role: "Full Stack Developer",
    duration: "Jan 2023 - Present",
    description:
      "Designed and implemented multiple web pages emphasizing intuitive interfaces and responsive design. Identified and fixed bugs, added new features, and optimized performance. Conducted code reviews to ensure quality and adherence to standards. Applied UI/UX best practices for visually appealing and user-friendly designs.<br/>Supported backend using Spring framework, collaborating on integrating frontend with backend services for seamless functionality.",
  },
];

const projectCategories = [
  {
    id: "ALL",
    name: "All",
  },
  {
    id: "REACT",
    name: "React",
  },
  {
    id: "NODE",
    name: "Node",
  },
];

const projectsData = [
  {
    id: "1",
    title: "Covid19 Dashboard",
    category: projectCategories[1].id,
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066607/project1_vrjzna.png",
    description:
      "Implemented a responsive Covid Dashboard where users can see confirmed, active, recovered and deceased cases in India state wise. Users also can search by state and see state specific cases info with different types of graphs",
    techStack: "HTML, React JS, Recharts, Figma",
    previewLink: "https://sunilcovid19.ccbp.tech/",
    githubLink: "https://github.com/sunil013/covid19-dashboard.git",
  },
  {
    id: "2",
    title: "Nxt Trendz (ECommerce)",
    category: projectCategories[1].id,
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066601/nxttrendz_emcpt2.png",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
    techStack: "React JS, Html, Routing, REST API Calls,  JWT Token",
    previewLink: "https://sunildcommerce.ccbp.tech/",
    githubLink: "https://github.com/sunil013/nxtTrendz.git",
  },
  {
    id: "3",
    title: "Gpt3",
    category: projectCategories[1].id,
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066608/project3_z8qstu.png",
    description:
      "Implemented Nxt Watch application which is a clone for YouTube, where users can login and can watch videos of different categories along with search option user can save the video to watch later etc..",
    techStack: "React JS, Html, Routing, REST API Calls, JWT Token",
    previewLink: "https://sunil013.github.io/Gpt3/",
    githubLink: "https://github.com/sunil013/Gpt3.git",
  },
  {
    id: "4",
    title: "Jobby App",
    category: projectCategories[1].id,
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066598/jobby_ysjdcl.png",
    description:
      "Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc",
    techStack: "React JS, Html, Routing, REST API Calls, JWT Token",
    previewLink: "https://sunildjobbyapp.ccbp.tech/",
    githubLink: "https://github.com/sunil013/jobby-App.git",
  },
  {
    id: "5",
    title: "Todos Application",
    category: projectCategories[1].id,
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066608/todoList_v5nrl0.png",
    description:
      "Developed persistent todo application with CRUD operations to track list of tasks, Users can add, delete tasks and also mark as completed",
    techStack: "HTML, CSS, JS, Bootstrap",
    previewLink: "https://sunildtodo.ccbp.tech",
    githubLink: "https://github.com/sunil013/Todo-app.git",
  },
  {
    id: "6",
    title: "Food Munch",
    category: projectCategories[1].id,
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066597/foodMunch_dd5rpr.png",
    description:
      "Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers.",
    techStack: "HTML, CSS, Bootstrap",
    previewLink: "https://foodmunchsample.ccbp.tech/",
    githubLink: "https://github.com/sunil013/food-munch.git",
  },
  {
    id: "7",
    title: "Twitter API",
    category: projectCategories[2].id,
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066612/twitter_cmzmhq.png",
    description:
      "Implemented a Twitter API where users can see different APIs like login, register. if the User is an Authenticated User he can see the latest tweets, followers, following people, Likes and Replies to the Tweets. Every time user send a request it checks whether Authenticated or not by user JWT token. Based on the User request perform Create, Read, Update operations on the database.",
    techStack: "Node JS, JavaScript, Express JS, SQL, Bcrypt",
    githubLink: "https://github.com/sunil013/twitter-node.git",
  },
  {
    id: "8",
    title: "TodoList API",
    category: projectCategories[2].id,
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066608/todo_ddnka9.png",
    description:
      "Implemented a TodoList API where users can request Data along with filters like Priority, Status, Category, Search by Todo name and also request with date. it Returns a list of all todos with a specific due date by taking the date and filters in query parameters. Add new Todo using POST Http method. Based on the User request perform Create, Read, Update operations on the database.",
    techStack: "Node JS, JavaScript, Express JS, SQL, Bcrypt",
    githubLink: "https://github.com/sunil013/Todo-app-node-.git",
  },
  {
    id: "9",
    title: "Covid19 Portal",
    category: projectCategories[2].id,
    imageUrl:
      "https://res.cloudinary.com/sunil013/image/upload/v1722066604/project2_jr2ane.jpg",
    description:
      "Implemented a Covid Portal API where users need to login or register to send requests to API. users can see confirmed, active, recovered and deceased cases in India state wise. Users also can search by state and see state specific cases info with district wise data. the database contains three tables state, district and users to store the users data. send the data based on the user request.",
    techStack: "Node JS, JavaScript, Express JS, SQL, Authentication",
    githubLink: "https://github.com/sunil013/covid19-portal-node.git",
  },
];

const skillsData = [
  {
    name: "React Js",
    skill: "100%",
  },
  {
    name: "Spring",
    skill: "70%",
  },
  {
    name: "Javascript",
    skill: "90%",
  },
  {
    name: "Java",
    skill: "80%",
  },
];

const skillsDataNew = [
  {
    name: "React Js",
    Icon: FaReact,
  },
  {
    name: "Spring",
    Icon: SiSpring,
  },
  {
    name: "Java",
    Icon: FaJava,
  },
  {
    name: "JavaScript",
    Icon: FaReact,
  },
  {
    name: "Node Js",
    Icon: DiNodejs,
  },
  {
    name: "Express",
    Icon: SiExpress,
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
  },
  {
    name: "SQL",
    Icon: SiSqlite,
  },
  {
    name: "Python",
    Icon: SiPython,
  },
  {
    name: "Material UI",
    Icon: SiMui,
  },
  {
    name: "Html",
    Icon: SiHtml5,
  },
  {
    name: "Css",
    Icon: SiCss3,
  },
  {
    name: "Tailwindcss",
    Icon: SiTailwindcss,
  },
  {
    name: "Bootstrap",
    Icon: SiBootstrap,
  },
];

export {
  myDetails,
  socialMediaData,
  tabsData,
  workData,
  educationData,
  experienceData,
  projectCategories,
  projectsData,
  skillsData,
  skillsDataNew,
};
