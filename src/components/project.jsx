    import PropTypes from 'prop-types';
import { useState,useEffect,useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projectData } from './projectData.js';

export default function Project({ language }) {
    useEffect(() => {
        AOS.init({}); // Inisialisasi AOS
    }, []);
    

    const [show, setShow] = useState(false);
    const [projectsToShow, setProjectsToShow] = useState(3);

    function showWebsite(){setShow(false)}
    function showNetwork(){setShow(true)}

    const updateProjectsToShow = () => {
        const windowWidth = window.innerWidth;
    
        if (windowWidth >= 1024) {
          setProjectsToShow(6); // lg: tampilkan 6 proyek
        } else if (windowWidth >= 640) {
          setProjectsToShow(4); // sm: tampilkan 4 proyek
        } else {
          setProjectsToShow(3); // Tampilan default tanpa sm: atau lg: tampilkan 3 proyek
        }
    };
    
      useEffect(() => {
        updateProjectsToShow();
        window.addEventListener('resize', updateProjectsToShow);
    
        return () => {
          window.removeEventListener('resize', updateProjectsToShow);
        };
      }, []);


    const projectRef = useRef(null);

    useEffect(()=>{
        if(location.pathname == '/project'){
            setTimeout(() => {
            scrollToProject();
        }, 500);
        }
        const scrollToProject = () => {
            if (projectRef.current) {
                projectRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
    },[]);


    return (
        <div  id='project' ref={projectRef} className=" w-full relative flex-col flex justify-center items-center py-44">
            <p  className='text-third text-lg font-extrabold absolute left-8 top-20 sm:left-[15%] sm:top-32 lg:left-0'>{language ? 'Proyek' : "Project"}</p>
            <div className="w-full px-8 sm:px-32 lg:px-8 mb-12">
                <p className='dark:text-white text-lg sm:text-2xl'>{language ? 'Ini adalah proyek terakhir yang telah saya kerjakan.' : "This is the latest project I have worked on."}</p>
            </div>
            <div className="w-full flex justify-center gap-4 mb-8">
                <p onClick={showWebsite} className={` ${show ? "text-dark dark:text-white": "text-third underline"} text-lg dark:hover:text-third hover:text-third cursor-pointer`} >Website</p>
                <p onClick={showNetwork} className={` ${show ?"text-third underline" :"text-dark dark:text-white" } text-lg dark:hover:text-third hover:text-third cursor-pointer`}>{language ? 'Lainnya' : "Other"}</p>
            </div>
            <div  className="w-full mx-4 flex flex-col sm:flex-row sm:px-12 justify-center items-center  ">
                <div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    show? 
                    projectData[0].projectOther.slice(0, projectsToShow).map((project, index) => (
                        <div
                            key={index}
                            className="rounded  m-auto bg-white w-3/4 p-4 pt-4 relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                            data-aos="fade-up"
                            data-aos-delay={'100'*index}
                        >
                            <div className="aspect-square flex justify-center">
                                <img src={project.image} className="w-60 rounded m-auto sm:w-80  " alt={`Project ${index + 1}`} />
                            </div>
                            <div className="w-auto ">
                                <h1 className="text-2xl font-bold">{project.title}</h1>
                                <p className="text-xl truncate">{language ? project.sub.ID : project.sub.EN}</p>
                            </div>
                            <a href={`/project/${project.path}`}>
                                <button className='w-full py-2 rounded-md cursor-pointer bg-second  text-white'>Detail</button>
                            </a>
                        </div>
                    ))
                    :
                    projectData[0].projectCode.slice(0, projectsToShow).map((project, index) => (
                    <div
                        key={index}
                        className="rounded  m-auto bg-white w-3/4 p-4 pt-4 relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                        data-aos="fade-up"
                        data-aos-delay={'100'*index}
                    >
                        <div className="aspect-square flex justify-center">
                            <img src={project.image} className="w-60 rounded m-auto sm:w-80  " alt={`Project ${index + 1}`} />
                        </div>
                        <div className="w-auto ">
                            <h1 className="text-2xl font-bold">{project.title}</h1>
                            <p className="text-xl truncate">{language ? project.sub.ID : project.sub.EN}</p>
                        </div>
                        <a href={`/project/${project.path}`}>
                            <button className='w-full py-2 rounded-md cursor-pointer bg-second  text-white'>Detail</button>
                        </a>
                    </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
Project.propTypes = {
    language: PropTypes.bool.isRequired,
}