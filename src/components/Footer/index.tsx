import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { GITHUB_URL, LINKEDIN_URL, MAIL_URL } from "@/utils/constants";
import "@/styles/typography.css";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center p-14 w-full sm:mt-12 mb-4">
      <div className="flex flex-row gap-6 items-center text-content-secondary">
        <a href={GITHUB_URL} rel="noreferrer" target="_blank">
          <IoLogoGithub
            size={24}
            className="text-2xl hover:text-content-primary"
          />
        </a>
        <a href={LINKEDIN_URL} rel="noreferrer" target="_blank">
          <IoLogoLinkedin
            size={24}
            className="text-2xl hover:text-content-primary"
          />
        </a>
        <a href={MAIL_URL}>
          <IoMail size={24} className="text-3x1 hover:text-content-primary" />
        </a>
      </div>
      <div className="flex flex-col gap-2 text-footer items-center">
        <p>Designed and coded by Lucca Romaniello.</p>
        <p>Last updated April 2025.</p>
      </div>
    </footer>
  );
};

export default Footer;
