import { HashRouter, Route,Routes } from 'react-router-dom'
import One from './pages/One.jsx'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <HashRouter>
      <p>navbar</p>
    <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/one' element={<One />} />
    </Routes>
    <p>footer</p>
    </HashRouter>
  )
}

export default App
