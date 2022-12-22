import Styles from "../Components/Styles.module.css"
import code from "../download/tech.gif"
import { VStack,ScaleFade} from "@chakra-ui/react"
import {education} from "./Config"
import { TypeAnimation } from "react-type-animation"
import Card from "./Card"
import GitHubCalendar from 'react-github-calendar';
const About = ()=>{

    
    return(
        
         <>
         <div id="about" className={Styles.aboutparent}>

        <h1><TypeAnimation
          sequence={["About Me", 1000, "", 400,]}
          wrapper="div"
          cursor={true}
          repeat={Infinity} /></h1>
        <div className={Styles.about}>
          <div><img src={code} alt="" /></div>
          <div>
            <ul>Hello, My self Aditya kumar and I enjoy creating thing through my code.</ul>
            <ul><b>Full Stack Web Developer</b> with hands on experience in building React Apps. Works efficiently both in frontend as well as backend with good problem solving skills.</ul>
            <ul>Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology.</ul>
            <ul>I build Four major projects. Learned alot about Team work, Time Management and collaboration.</ul>
          </div>

        </div>
        <VStack color="blue" m="40px" spacing={4} align="left" mx={[0, 0, 6]}>
          {education.map((e, index) => (
            <ScaleFade initialScale={0.9} in={true}>
              <Card
                key={index}
                title={e.title}
                role={e.role}
                skills={e.skills}
                period={e.period}
                logo={e.logo}
                alt={e.alt}
                description={e.description} />
            </ScaleFade>
          ))}
        </VStack>
        
        <h1 color="white">My github contribution lsat sixth months</h1>
        <VStack m="auto">
        <GitHubCalendar username="AdityaKuntal" />
        </VStack>
      <VStack m="auto">
        <div className={Styles.flex1}>
          <img height="190px" src="https://github-readme-stats.vercel.app/api/top-langs?username=AdityaKuntal&show_icons=true&theme=tokyonight&locale=en&layout=compact" alt="AdityaKuntal" />

          <img height="190px" src="https://github-readme-stats.vercel.app/api?username=AdityaKuntal&show_icons=true&theme=merko&hide_border=true&cache_seconds=1803&locale=en" alt="AdityaKuntal" />
          
          <img height="190px" src="https://github-readme-streak-stats.herokuapp.com/?user=AdityaKuntal&theme=highcontrast" alt="AdityaKuntal" />
          </div>
        </VStack>
         </div>
         </>
    )
}
export default About