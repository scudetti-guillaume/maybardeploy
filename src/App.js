
import './style/index.scss'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Carte from './pages/Carte';
import Contact from './pages/Contact';
import Conditions from './pages/Conditions';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/maybardeploy/" element={<Home />} />
          <Route path='/maybardeploy/carte' element={<Carte />} />
          <Route path='/maybardeploy/contact' element={<Contact />} />
          <Route path='/maybardeploy/condition' element={<Conditions />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
