import Home from './pages/Home';
import './font.css'
import Construction from './pages/Construction';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/construction' element={<Construction />}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App
