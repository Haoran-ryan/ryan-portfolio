import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export const socials = [
  {
    name: "LinkedIn",
    url: "",
    icon: <LinkedInIcon fontSize="large" color="primary" />,
  },
  {
    name: "GitHub",
    url: "",
    icon: <GitHubIcon fontSize="large" color="secondary" />,
  },
];

export const NavLinks = [
  {
    name: "Home",
    url: "/",
    className: "mr-4",
  },
  {
    name: "About",
    url: "/about",
    className: "mx-4",
  },
  {
    name: "Projects",
    url: "/projects",
    className: "mx-4",
  },
  {
    name: "Articles",
    url: "/articles",
    className: "ml-4",
  },
];

export const myFullStack = [
  {
    name: "NextJS",
    imgUrl: "/images/nextjs.png",
  },
  {
    name: "ReactJS",
    imgUrl: "/images/reactjs.png",
  },
  {
    name: "Python",
    imgUrl: "/images/python.png",
  },
  {
    name: "Tailwind",
    imgUrl: "/images/tailwind.png",
  },
  {
    name: "MongoDB",
    imgUrl: "/images/mongodb.png",
  },
  {
    name: "Framer Motion",
    imgUrl: "/images/framer.png",
  },
];

export const SideBarLinks = [
  {
    name: "LinkedIn",
    url: "",
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    name: "GitHub",
    url: "",
    icon: <GitHubIcon fontSize="large" />,
  },
  {
    name: "Email",
    url: "mailto:gryan@outlook.com.au",
    icon: <AlternateEmailIcon fontSize="large" />,
  },
  {
    name: "Resume",
    url: "",
    icon: <PictureAsPdfIcon fontSize="large" />,
  },
];

export const bio = {
  title: "Passion Fules Purpose!",
  subtitle: "About me",
  bio: [
    "Hi, I'm Ryan Guo, a full stack developer with a passion for creating smart, functional and user-centered digital experiences. I have been exploring the best practice in full stack development by taking courses at TAFE , General Assembly and am advancing my knowledge in computer science at UNSW. With over a year of exposure to the field, I am confident to present soultions to real world problems.",
    "I believe that development is more about building pretty things - it's about solving problems and creating intuitive, enjoyable user experience.",
    "Whenever I build a product, I bring my commitment to design excellence and user-centered thinking. I look forward to the opportunity to bring my skills and passion to your next project.",
  ],
};

export const statistics = [
  { label: "Projects Completed", value: 10 },
  { label: "Years of development", value: 1 },
];

export const myFullStackSkills = [
  { name: "NextJS", x: 0, y: 0 },
  { name: "HTML", x: 0, y: 0 },
  { name: "APIs", x: 0, y: 0 },
  { name: "ReactJS", x: 0, y: 0 },
  { name: "Python", x: 0, y: 0 },
  { name: "JavaScript", x: 0, y: 0 },
  { name: "Tailwind", x: 0, y: 0 },
  { name: "MongoDB", x: 0, y: 0 },
  { name: "Framer Motion", x: 0, y: 0 },
  { name: "Google Firestore", x: 0, y: 0 },
  { name: "PostgreSQL", x: 0, y: 0 },
  { name: "Ruby on Rails", x: 0, y: 0 },
  { name: "Algorithms", x: 0, y: 0 },
];

export function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export const MyProjects = [
  {
    label: "Project - Show Room",
    org: "Self Employed",
    orgLink: "https://showroom-azure.vercel.app/",
    time: "September 2023",
    address: "Sydney",
    work: "A Front-end project built with Vite and Tailwind. This is a show room demo to show to our clients what they can receive from us.",
  },
  {
    label: "Project - Share Prompt",
    org: "Self Employed",
    orgLink: "https://share-prompts-tan.vercel.app/",
    time: "July 2023",
    address: "Sydney",
    work: "A Full-stack social platform built with NextJS and Tailwind where users can share the trendy AI prompts to enhance their productivity and creativity.",
  },
  {
    label: "Project - Personal Portfolio (Dark)",
    org: "Self Employed",
    orgLink: "https://haoran-ryan.github.io/personal_portfolio/",
    time: "April 2023",
    address: "Sydney",
    work: "A front-end application ideal for gradaduates to showcase their skills and projects to potential employers. It increases the chance of getting hired by 50%. We have other designs available.",
  },
  {
    label: "Project - TutoNet",
    org: "General Assembly",
    orgLink: "https://generalassemb.ly/",
    time: "December 2022 - March 2023",
    address: "Sydney",
    work: "A Full-stack work flow management designed for school, with Vue powering the Frontend and Supabase for the backend. It is light-weight and quick to launch. Quasar Framework enables it to be mobile and desktop friendly.",
  },
  {
    label: "Project - QuizCraft",
    org: "General Assembly",
    orgLink: "https://quizcraft-c8706.web.app/",
    time: "December 2022 - March 2023",
    address: "Sydney",
    work: "A Full-stack recreational kit featuring multi-player mode. It is built with ReactJS, Firestore and Restful API",
  },
];

export const MyExperiences = [
  {
    label: "Software Engineer",
    org: "Self Employed",
    orgLink: "https://www.linkedin.com/company/haoran-ryan/",
    time: "May 2023 - present",
    address: "Sydney",
    work: "A freelance software developer who is passionate about building smart digital experiences. I have been utilizing NextJS, Tailwind and MongoDB particularly to achieve the SEO and performance, fullfilling the needs of clients.",
  },
  {
    label: "Interpreter",
    org: "Freelance",
    orgLink: "https://www.linkedin.com/company/haoran-ryan/",
    time: "May 2011 - present",
    address: "Sydney",
    work: "A professional interpreter serving our community by working for settings in the legal and medical systems with my bilingtual skills and cultural awareness. I also provide simultaneous interpreting service in technical conferences and major events for government delegations, professional regultors, financial institutions etc. .",
  },
  {
    label: "Tutor and manager",
    org: "SIIT",
    orgLink: "https://www.linkedin.com/company/haoran-ryan/",
    time: "June 2012 - Jan 2023",
    address: "Sydney",
    work: "Delivered vocational courses and helped over 2000 studetns obtain NAATI credentials. In the meantime, I managed day-to-day campus operations and led a team of 10 staff members.",
  },
];
