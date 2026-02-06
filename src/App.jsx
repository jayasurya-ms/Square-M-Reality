import Home from './pages/Home';
import './font.css'
import Construction from './pages/Construction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import InteriorDesigning from './pages/InteriorDesigning';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/construction' element={<Construction />}/>
      <Route path='/projects' element={<Projects />} />
      <Route path='/interior-designing' element={<InteriorDesigning />} />
    </Routes>
    </BrowserRouter>
    // <>
    // <Projects />
    // </>
  )
}


export default App
