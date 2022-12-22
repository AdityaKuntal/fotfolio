import Styles from "../Components/Styles.module.css"
import expimg from "../download/express.4925c0127df8857c18b38329795ce88f.svg"
import html from "../download/html.svg"
import git from "../download/git.svg"
import chakra from "../download/chakraui.png"
import css from "../download/css.svg"
import javascript from "../download/javascript.svg"
import mongodb from "../download/mongodb.svg"
import mongoose from "../download/mongoose.png"
import nodejs from "../download/nodejs.svg"
import react from "../download/react.svg"
import redux from "../download/redux.svg"
import npm from "../download/npm.svg"
import { TypeAnimation } from "react-type-animation"
const Skills = () => {

    return (
        <div id="skills" className={Styles.skillparent}>
            <h1><TypeAnimation
            sequence={["Technical Skills",1000,"",400,]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            
          /></h1>
            <div className={Styles.skills}>
            <div>
                <img src={html} alt="" />
                <p>HTML</p>
            </div>
            <div>
                <img src={css} alt="" />
                <p>CSS</p>
            </div>
            <div>
                <img src={javascript} alt="" />
                <p>JavaScript</p>
            </div>
            <div>
                <img src={react} alt="" />
                <p>React</p>
            </div>
            <div>
                <img src={nodejs} alt="" />
                <p>Node JS</p>
            </div>
            <div>
                <img src={expimg} alt="" />
                <p>Express</p>
            </div>
            <div>
                <img src={mongodb} alt="" />
                <p>MongoDB</p>
            </div>
            <div>
                <img src={npm} alt="" />
                <p>NPM</p>
            </div>
            <div>
                <img src={git} alt="" />
                <p>Git</p>
            </div>
            <div>
                <img src={redux} alt="" />
                <p>Redux</p>
            </div>
            <div>
                <img src={mongoose} width="100px" alt="" />
                <p>Mongoose</p>
            </div>
            <div>
                <img src={chakra} width="100px" alt="" />
                <p>Chakra UI</p>
            </div>
            </div>
        </div>
    )
}
export default Skills