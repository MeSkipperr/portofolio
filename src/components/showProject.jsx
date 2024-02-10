// ShowProject.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { projectData } from './projectData.js';


export default function ShowProject({language}) {
    const [selectProject, setSelectProject] = useState({});
    const [otherProject, setOtherProject] = useState([]);

    const { projectName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const allProjects = [...projectData[0].projectCode, ...projectData[0].projectOther];

        const isProjectExist = allProjects.find(project => project.path === projectName);
        const filteredOtherProjects = allProjects.filter(project => project.path !== projectName);
    
        if (isProjectExist) {
            setSelectProject(isProjectExist);
            setOtherProject (filteredOtherProjects);
        } else {
            navigate(`/project/${projectData[0].projectCode[0].path}`);
        }
        

    }, [navigate, projectName]);

    return (
        <div className=" dark:bg-darkBg w-full min-h-dvh  pt-24 lg:w-3/4">
            <div className=" px-4 pb-24 lg:flex lg:w-3/4 lg:gap-12">
                <div className=" flex justify-center items-center">
                    <img src={selectProject.image} alt="project"  className='w-80 lg:w-[40rem]'/>
                </div>
                <div className="lg:pt-16">
                    <h1 className='font-bold text-xl dark:text-white mt-4 sm:text-3xl'>{selectProject.title}</h1>
                    <p className='text-lg dark:text-white sm:text-2xl'>{language ? selectProject.sub?.ID : selectProject.sub?.EN}</p>
                </div>
            </div>
            <div>
                <p className=' text-lg text-third ml-4'>{language ? 'Proyek lainnya' : "Other project"} </p>
                <div className="flex overflow-auto gap-4 lg:gap-20 py-8 mx-4 ">
                    {otherProject.map((project) => (
                        <>
                        <a href={`/project/${project.path}`}>
                        <div className=" w-44 lg:w-56 flex flex-col justify-center items-center gap-4 shrink-0">
                            <img src={project.image} alt="project"  className='w-full  '/>
                            <h1 className='font-bold text-xl dark:text-white'>{project.title}</h1>
                        </div>
                        </a> 
                    </>))} 
                </div>
            </div>
        </div>
    );
}
{/* <h1>Path: {selectProject.path} </h1>
{otherProject.map((project) => (
    <h1 key={project.title}>Title: {project.title}</h1>
))} */}


{/* <div className="w-full pb-20 pt-24 px-4 ">
<div className="  w-full h-1/2 flex justify-center items-center">
    <img src={selectProject.image} alt="project"  className='w-52'/>
</div>
<h1 className='font-bold text-xl dark:text-white'>{selectProject.title}</h1>
<p className=' text-lg dark:text-white'>{language ? selectProject.subID : selectProject.subEN} </p>
</div>
<div className="h-[25%] bg-[#101012] flex overflow-auto">
{otherProject.map((project) => (
<>
    <div className="h-full w-96 sm:w-[40rem] flex justify-center items-center gap-4">
        <div className="w-1/2 flex justify-center items-center">
        <img src={project.image} alt="project"  className='w-3/4 '/>
        </div>
        <div className="w-1/2 ">
                <h1 className='font-bold text-xl dark:text-white'>{project.title}</h1>
                <p className=' text-lg dark:text-white truncate '>{language ? project.subID : project.subEN} </p>
        </div>
    </div>
</>
))} 
</div> */}


{/* <div className="w-32 ">
<img src={project.image} alt="project"  className='w-full'/>
<h1 className='font-bold text-xl dark:text-white'>{project.title}</h1>
</div> */}