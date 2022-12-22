import Styles from "./Styles.module.css";
import { Link } from "react-scroll";
import img from "../download/logo192.png"
import { Avatar } from "@chakra-ui/react";

const Navbar = () => {
 
  const scroll = (event) => {
    const name = event.target.name;
    const anchor = document.querySelector(name);
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className={Styles.navbar}>
      <Avatar borderRadius="20px" src={img}></Avatar>
      <div>
        <div className={Styles.buttonParent}>
          <Link className={Styles.links} name="#home" onClick={scroll}>
            HOME
          </Link>
          <Link className={Styles.links} name="#about" onClick={scroll}>
            ABOUT
          </Link>
          <Link className={Styles.links} name="#skills" onClick={scroll}>
            SKILLS
          </Link>
          <Link className={Styles.links} name="#project" onClick={scroll}>
            PROJECTS
          </Link>
          <Link className={Styles.links} name="#contact" onClick={scroll}>
            CONTACT
          </Link>
          <div className={Styles.button}>
            
              <a href="https://drive.google.com/file/d/1YM6cpLsVOu7wl7CsT5ApBOZeG7Dp80xd/view?usp=share_link" target="_blank" rel="noreferrer">Resume</a>
              
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
