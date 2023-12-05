import Link from "next/link";

const LinkButton = ({
  href,
  label,
  className = "",
  isDownload = false,
  icon,
}) => {
  return (
    <Link
      href={href}
      className={`${className} flex-center rounded-lg border-2 border-solid p-2.5 px-6 text-lg`}
      target={"_blank"}
      download={isDownload}
    >
      {label}
      {icon}
    </Link>
  );
};

export default LinkButton;
