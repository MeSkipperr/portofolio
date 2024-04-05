import { useState ,useEffect} from 'react'
import PropTypes from 'prop-types';
import darkImage from '../assets/dark.svg';
import lightImage from '../assets/light.svg';




export default function Navbar({mode,onCheckboxChange,language,changeLanguageEN,changeLanguageID }) {

      

    const [isOpen, setIsOpen] = useState(false);

    const [scrolling, setScrolling] = useState(false);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    





    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > screenHeight) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      const handleResize = () => {
        setScreenHeight(window.innerHeight);
      };
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, [screenHeight]);



    const backgroundClasses = () =>{
        if (isOpen && scrolling) {
            return "bg-white dark:bg-darkBg";
        } else if (isOpen && !scrolling) {
            return "bg-white dark:bg-darkBg";
        } else if (!isOpen && scrolling) {
            return "bg-trans dark:bg-transDark";
        } else if (!isOpen && !scrolling) {
            return "bg-[#ecececcc] dark:bg-[#101012cc]";
        } else {
            return "Kondisi tidak dikenali";
        }
    }


    const pathUrl = ()=>{
        if(location.pathname === '/'){
            return '#'
        }else if(location.pathname !== '/'){
            return '/'
        }
    }

    useEffect(() => {
        if (mode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    });
    

    function closeNav() {setIsOpen(false)}
    return (
        <>
            <div  className={`w-full h-14 py-9  ${backgroundClasses()}
   flex justify-between items-center z-50 backdrop-blur-sm fixed `}>
                <h1 className=' px-4 md:text-2xl sm:px-8  text-second'style={{ fontFamily: "'Pacifico', cursive" }}>I KADEK YOLA ANDIKA</h1>

                <button className="flex items-center px-6  text-dark dark:text-white lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        className={`w-10 h-10 ${isOpen ? 'hidden' : 'block'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                    <svg
                        className={`w-10 h-10 ${isOpen ? 'block' : 'hidden'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                
                <div className="content gap-8 px-8 hidden lg:flex items-center">
                    <a className='text-lg cursor-pointer hover:text-second dark:hover:text-second dark:text-primary ' href={`/`}>{language ? 'BERANDA' : 'HOME'}</a>
                    <a className='text-lg cursor-pointer hover:text-second dark:hover:text-second dark:text-primary ' href={`${pathUrl()}about`}>{language ? 'TENTANG ' : 'ABOUT'}</a>
                    <a className='text-lg cursor-pointer hover:text-second dark:hover:text-second dark:text-primary ' href={`${pathUrl()}service`}>{language ? 'LAYANAN' : 'SERVICE'}</a>
                    <a className='text-lg cursor-pointer hover:text-second dark:hover:text-second dark:text-primary ' href={`${pathUrl()}project`}>{language ? 'PROYEK' : 'PROJECT'}</a>

                    <label className="language-label cursor-pointer text-lg  font-semibold dark:text-primary">
                        <input type="radio" name="bahasa" value="indonesia"  checked={language} className="hidden" onChange={changeLanguageID}/>
                        <p className="indonesia ">ID</p>
                    </label>
                    <hr className="label-divider h-6 font-bold mx-3 border-t border-solid border-dark dark:border-primary dark:bg-white " />
                    <label className="language-label cursor-pointer text-lg font-semibold dark:text-primary">
                        <input type="radio" name="bahasa" value="inggris" checked={!language} className="hidden" onChange={changeLanguageEN}/>
                        <p className="inggris">EN</p>
                    </label>
                    <a href={'/contact'}>
                        <button className=" cursor-pointer w-28 h-9  border-2 border-solid border-third rounded font-bold text-base bg-transparent text-third hover:bg-third hover:text-white">{language ? 'KONTAK' : 'CONTACT'}</button>
                    </a>
                    <input
                        type="checkbox"
                        id="mode-checkbox"
                        hidden
                        checked={mode}
                        onChange={onCheckboxChange}
                    />
                    <img
                        src={mode ? lightImage : darkImage}
                        alt={mode ? 'Light' : 'Dark'}
                        id="mode"
                        title="Dark Mode"
                        className="w-8 ml-4 cursor-pointer"
                        onClick={onCheckboxChange}
                    />
                </div>
            </div>
            <div className={`h-screen fixed inset-0 lg:hidden z-50 flex justify-end transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={closeNav} style={{ zIndex: 9999 }} >
                <div className={`w-3/4  bg-white dark:bg-darkBg  backdrop-blur-sm  h-screen mt-16  `} onClick={(e) => e.stopPropagation()}>
                <div className={` content 
                        w-full backdrop-filter backdrop-blur-5 flex items-center flex-col gap-4 text-center `}>
                            <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href={'/'}>{language ? 'BERANDA' : 'HOME'}</a>
                            <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href={`${pathUrl()}about`}>{language ? 'TENTANG ' : 'ABOUT'}</a>
                            <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href={`${pathUrl()}service`}>{language ? 'LAYANAN' : 'SERVICE'}</a>
                            <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href={`${pathUrl()}project`}>{language ? 'PROYEK' : 'PROJECT'}</a>

                            <div className="flex justify-center">
                                <label className="language-label cursor-pointer text-lg  font-semibold dark:text-primary">
                                    <input type="radio" name="bahasa-m" value="indonesia" checked={language} className="hidden"  onChange={changeLanguageID}/>
                                    <p className="indonesia ">ID</p>
                                </label>
                                    <hr className="label-divider h-6 font-bold mx-3 border-t border-solid border-dark dark:border-primary dark:bg-white " />
                                <label className="language-label cursor-pointer text-lg font-semibold dark:text-primary">
                                    <input type="radio" name="bahasa-m" value="inggris" checked={!language} className="hidden"  onChange={changeLanguageEN} />
                                    <p className="inggris">EN</p>
                                </label>
                            </div>
                            <a href={'/contact'}>
                            <button className=" cursor-pointer w-28 h-9 border-2 border-solid border-third rounded font-bold text-base bg-transparent text-third hover:bg-third hover:text-white">{language ? 'KONTAK' : 'CONTACT'}</button>
                            </a>
                            <input
                                type="checkbox"
                                id="mode-checkbox"
                                hidden
                                checked={mode}
                                onChange={onCheckboxChange}
                            />
                            <img
                                src={mode ? lightImage : darkImage}
                                alt={mode ? 'Light' : 'Dark'}
                                id="mode"
                                title="Dark Mode"
                                className="w-10 ml-4 cursor-pointer"
                                onClick={onCheckboxChange}
                            />
                        </div>
                </div>
            </div>
        </>
    )
}

Navbar.propTypes = {
    mode: PropTypes.bool.isRequired,
    language: PropTypes.bool.isRequired,
    languageURL: PropTypes.string.isRequired,
    onCheckboxChange: PropTypes.func.isRequired,
    changeLanguageEN: PropTypes.func.isRequired,
    changeLanguageID: PropTypes.func.isRequired,
};