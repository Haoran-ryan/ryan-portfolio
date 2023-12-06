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
