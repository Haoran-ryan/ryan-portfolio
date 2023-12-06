import { SideBarLinks } from "@/constants";
import Link from "next/link";

const SideBar = () => {
  return (
    <nav className="fixed left-0 top-[35%] hidden sm:inline-block ">
      <ul>
        {SideBarLinks.map((link) => (
          <li
            key={link.name}
            className="flex-between ml-[-80px] h-[60px] w-[120px] capitalize duration-300 hover:ml-[10px] hover:underline"
          >
            <Link href={link.url} className="flex-between w-full ">
              {link.name} {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
