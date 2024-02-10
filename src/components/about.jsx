import aboutPic from '../assets/aboutPic.webp';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import PropTypes from 'prop-types';
import  { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function About({ language }) {

    const [typeEffect] = useTypewriter({
        words: ['Web Developer', 'FrontEnd Dev', 'BackEnd Dev','Network Engineer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    })

    const aboutRef = useRef(null);
    useEffect(()=>{
        if(location.pathname == '/about'){
            setTimeout(() => {
            scrollToAbout();
        }, 600);
        }
        const scrollToAbout = () => {
            if (aboutRef.current) {
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
    },[]);

    return (
        <div id='about' ref={aboutRef} className="h-[110vh] w-full flex justify-center items-center flex-col lg:flex-row relative">
            <p className='text-third text-lg font-extrabold absolute left-8 top-20 sm:left-[15%] sm:top-32 lg:left-0'>{language ? 'Tentang ' : "About"}</p>
            <div className=" w-full sm:w-1/2 lg:w-3/4  " >
                <div className="relative w-auto py-8 lg:auto m-auto">
                    <img src={aboutPic} className=' w-52 sm:w-64 lg:w-96 m-auto' />
                    <div className=" bg-third text-base lg:text-xl text-white absolute px-4 py-2 rounded-lg lg:left-12 lg:top-14 top-8 left-2">01 September 2007 </div>
                    <div className=" bg-third text-base lg:text-xl text-white absolute px-4 py-2 rounded-lg lg:bottom-12 lg:right-8 bottom-4 right-2">Bali, Indonesia </div>
                    <div className="flex-col flex gap-4 m-4 absolute bottom-0 lg:hidden items-center" >
                        <a href="https://github.com/MeSkipperr" target="_blank" rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faFacebook} className='dark:text-white text-black hover:text-third dark:hover:text-third' size="3x" />
                        </a>
                        <a href="https://www.instagram.com/kdk.yolaandika" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className='dark:text-white text-black hover:text-third dark:hover:text-third' size="3x" />
                        </a>
                        <a href="mailto:ikadekyolaandika02@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} className='dark:text-white text-black hover:text-third dark:hover:text-third' size="3x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='sm:px-6 lg:w-full'>
                <div className=" flex justify-center mx-4 flex-col "  >
                    <p className='text-dark dark:text-white text-xl sm:text-xl lg:text-3xl  '>{language ? 'Hai 👋, saya' : "Hi 👋, I'm"}</p>
                    <h2 className="name tracking-wide text-3xl text-dark dark:text-white lg:text-6xl ">I Kadek Yola Andika</h2>
                    <h3 className="  text-xl sm:text-2xl dark:text-white lg:text-4xl">{language ? 'seorang ' : "a "}<span className=' text-third italic'>{typeEffect} <Cursor cursorColor='#8756ff' className='font-bold' /></span></h3>
                </div>
                <div className="mx-4 mt-4">
                    {/* NETWORK ENGINEER */}
                    <p className="text-base  sm:text-2xl text-justify text-dark dark:text-white" >
                        {language ?
                            "Cinta saya pada pemrograman dan teknologi mendorong saya terus mengeksplorasi dan mengaplikasikan keterampilan. Saya senang menciptakan solusi inovatif melalui kode, mengubah ide menjadi kenyataan. Mari bersama-sama bangun sesuatu menakjubkan dalam pengembangan perangkat lunak dan manajemen jaringan yang terus berkembang!"
                            :
                            "My passion for programming and technology drives me to continually explore and apply my skills. I enjoy creating innovative solutions through code, turning ideas into reality. Let's collaboratively build something amazing in the ever-evolving world of software development and network management"
                        }
                    </p>
                    {/* <p className="text-base  sm:text-2xl text-justify text-dark dark:text-white" >
                        {language ?
                            "Cinta saya terhadap pemrograman dan teknologi mendorong saya untuk terus menjelajahi dan menggunakan keterampilan saya. Saya menikmati membuat solusi inovatif melalui kode, mengubah ide menjadi kenyataan satu baris kode pada satu waktu. Mari kita bangun sesuatu yang menakjubkan bersama dalam dunia pengembangan web yang terus berkembang!"
                            :
                            "My love for programming and technology drives me to constantly explore and utilize my skills. I enjoy crafting innovative solutions through code, turning ideas into reality one line at a time. Let's build something amazing together in the ever-evolving world of web development!"
                        }
                    </p> */}
                </div>
            </div>
            <div className="hidden  absolute bottom-32  lg:flex gap-10 m-4">
                <a href="https://github.com/MeSkipperr" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faFacebook} className='dark:text-white text-black hover:text-third dark:hover:text-third' size="5x" />
                </a>
                <a href="https://www.instagram.com/kdk.yolaandika" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='dark:text-white text-black hover:text-third dark:hover:text-third' size="5x" />
                </a>
                <a href="mailto:ikadekyolaandika02@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className='dark:text-white text-black hover:text-third dark:hover:text-third' size="5x" />
                </a>
            </div>
        </div>
    )
}
About.propTypes = {
    language: PropTypes.bool.isRequired,
}