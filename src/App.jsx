
// import './App.css'
// import {Routes, Route} from 'react-router-dom'
// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'
// import Projects from './components/Projects'
// import Service from './components/Service'

// function App() {

//   return (
//     <div>
//       <Navbar/>
//       <Routes> 
//       <Route path='/' element={<Hero />} />
//       <Route path='/About' element={<About />} />
//       <Route path='/Service' element={<Service />} />
//       <Route path='/Project' element={<Projects />} />
//       <Route path='/Contact' element={<Contact />} />
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

// export default App



import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />  
        <Route path='/service' element={<Service />} />  
        <Route path='/projects' element={<Projects />} />  
        <Route path='/contact' element={<Contact />} />  
      </Routes>
      <Footer />
    </div>
  )
}

export default App