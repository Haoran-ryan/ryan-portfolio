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
  { label: "Projects Completed", value: "10+" },
  { label: "Years of development", value: "1+" },
];
