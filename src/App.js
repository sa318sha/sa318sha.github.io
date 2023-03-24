import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Projects from "./pages/projects/Projects"
import About from "./pages/about/About"
import PagesLayoutNavBar from './PagesLayoutNavBar';
import { useEffect, useState } from 'react';
import Test from "./pages/test"

const App = () => {

  const [firstRender, setFirstRender] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setFirstRender(false)
    },16600)
  }, [])
  return (
    <>

    
    <Routes>

      <Route element={<PagesLayoutNavBar/>}>
        <Route path ="/" element={<Home render={firstRender}/>}  />
        <Route path ="/contact" element={<Contact/>} />
        <Route path ="/projects/*" element={<Projects/>}/>
          
        

        {/* <Route path ="/School" element={<School/>}/> */}
        <Route path ="/about" element={<About/>} />
        <Route path="/test" element={<Test/>} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>

    </Routes>
    </>
  );
}

export default App;
