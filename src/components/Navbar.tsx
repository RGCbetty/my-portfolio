import logo from "../../public/rc-icon.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/robert-cadahing-23b8511b4/"
          target="_blank"
        >
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="https://github.com/RGCbetty" target="_blank">
          <FaGithub></FaGithub>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
