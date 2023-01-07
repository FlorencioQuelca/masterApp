import { HashRouter, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import One from './pages/One'
function App() {

  return (
    <HashRouter>
      <p>navbar</p>
    <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<One/>} />
    </Routes>
    <p>footer</p>
    </HashRouter>
  )
}

export default App
