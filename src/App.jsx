
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import './App.css'
import './input.css'
import './output.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Stack from './components/stack'
import Service from './components/service'
import Project from './components/project'
import Contact from './components/contact'
import Curve from './components/curve'
import Footer from './components/footer'
import FooterBG from './assets/lightFooter.svg';
import FooterBGDark from './assets/darkFooter.svg';

//project
import ShowProject from './components/showProject'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [language, setLanguage] = useState(false) //false = EN
  const changeLanguageID = () => {
    sessionStorage.setItem('language', 'ID');
    setLanguage(true)
  };
  const changeLanguageEN = () => {
    sessionStorage.setItem('language', 'EN');
    setLanguage(false)
  };

  useEffect(() => {
    const sessionLanguage = sessionStorage.getItem('language');
    if (sessionLanguage == 'ID') {
      setLanguage(true)
    } else if (sessionLanguage === null) {
      sessionStorage.setItem('language', 'EN');
    } else {
      setLanguage(false)
    }
  }, [setLanguage])


  const [mode, setMode] = useState(false);  
  const [modeCheck, setModeCheck] = useState(false);  

  const onCheckboxChange = () => {
      setMode(!mode);
      sessionStorage.setItem('theme', mode ? 'light':'dark');
  };

  useEffect (()=>{
      const sessionTheme = sessionStorage.getItem('theme');
      if(sessionTheme == 'dark'){
        setMode(true)
      }else if(sessionTheme === null){
          if(!modeCheck){
              const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              sessionStorage.setItem('theme', !isDarkMode ? 'light':'dark');
              setModeCheck((true))
          }
      }else{
        setMode(false)
      }
  },[setMode,setModeCheck,modeCheck])


  return (

    <>

      <AnimatePresence mode="wait">
        <Navbar mode={mode} onCheckboxChange={onCheckboxChange} language={language} changeLanguageEN={changeLanguageEN} changeLanguageID={changeLanguageID} />
        <Router>
          <Routes>
            <Route path='/' element={<Home language={language} mode={mode}/>} />
            <Route path='/about' element={<Home language={language} mode={mode} />} />
            <Route path='/service' element={<Home language={language} mode={mode}/>} />
            <Route path='/project' element={<Home language={language} mode={mode}/>} />
            <Route path='/contact' element={<ContactFuc language={language} />} />

            {/* Project */}
            <Route path='/project/:projectName' element={
              <Curve>
                <div className=" w-full flex items-center flex-col dark:bg-darkBg" >
                  <ShowProject language={language} />
                </div>
              </Curve>
            } />
            
          </Routes>
        </Router>
      </AnimatePresence>





    </>
  )
}

function Home({ language,mode }) {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Curve>
      <div className=" flex  items-center flex-col  dark:bg-darkBg ">
        <Hero language={language} />
        <div className="lg:w-3/4" >
          <About language={language} />
        </div>
        <Stack language={language} />
        <div className="w-full lg:w-3/4">
        <Service language={language} />
          <Project language={language} />
        </div>
        <img src={mode ? FooterBGDark : FooterBG}  className='w-full'  />
        <Footer language={language}/>
        {isVisible && (
          <button
            className="bg-blue-500 text-white px-4 py-2 sm:px-8 sm:py-6 fixed bottom-14 sm:bottom-8 right-4 rounded-full z-50"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faCaretUp} className=' text-4xl' />
          </button>
        )}
      </div>
    </Curve>

  )
}
Home.propTypes = {
  language: PropTypes.bool.isRequired,  
  mode: PropTypes.bool.isRequired,
};

function ContactFuc({ language }) {
  return (
    <>
      <Curve>
        <Contact language={language} />
      </Curve>

    </>
  )
}
ContactFuc.propTypes = {
  language: PropTypes.bool.isRequired,
};

export default App
