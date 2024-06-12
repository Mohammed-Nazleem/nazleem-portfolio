import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Mohammed-Nazleem/",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mohammed-nazleem/",
  },
];

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyle}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
