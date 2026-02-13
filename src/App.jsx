import Home from './pages/Home';
import './font.css'
import Construction from './pages/Construction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import InteriorDesigning from './pages/InteriorDesigning';
import ProjectDetail from './components/project/ProjectDetail';
import Contact from './pages/Contact';
import RealEstate from './pages/RealEstate';
import Blogs from './pages/Blog';
import BlogDetails from './components/blog/BlogDetails';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/real-estate' element={<RealEstate />}/>
      <Route path='/construction' element={<Construction />}/>
      <Route path='/interior-designing' element={<InteriorDesigning />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:slug' element={<ProjectDetail />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blog/:slug' element={<BlogDetails />} />
      <Route path='/about-us' element={<AboutUs />} />
    </Routes>
    </BrowserRouter>
  )
}


export default App
