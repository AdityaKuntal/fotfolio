import {Route,Routes} from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import Resume from '../Pages/Resume'
import Skills from '../Pages/Skills'
const AllRoutes = () =>{
return(
    <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/about' element={<About/>}>Home</Route>
        <Route path='/contact' element={<Contact/>}>Home</Route>
        <Route path='/skills' element={<Skills/>}>Home</Route>
        <Route path='/project' element={<Projects/>}>Home</Route>
        <Route path='/resume' element={<Resume/>}>Home</Route>
    </Routes>
)
}
export default AllRoutes