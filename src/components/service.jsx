import webDev from '../assets/service/web.svg';
import Topology from '../assets/service/topology.svg';
import Ppt from '../assets/service/presentation.svg';
import  { useEffect, useRef } from 'react';

const services = [
    {
        path: webDev,
        judul: 'Web Developer',
        judulID: 'Pembuatan Website',
        sub: { 
            id: 'Pembuatan dan pemeliharaan situs website dengan bahasa pemrograman.', 
            en: 'Creation and maintenance of websites using programming languages.' 
        }
    },
    {
        path: Topology,
        judul: 'Network Topology',
        judulID: 'Topologi Jaringan',
        sub: { 
            id: 'Mengatur desain jaringan dan dapat saling terhubung.', 
            en: 'Configuring network design and enabling connectivity.' 
        }
    },
    {
        path: Ppt,
        judul: 'Presentation Design',
        judulID: 'Desain Presentasi',
        sub: { 
            id: 'Pengaturan visual dan struktural untuk menyampaikan informasi presentasi.', 
            en: 'Visual and structural arrangement to effectively convey presentation information.' 
        }
    }
]

export default function Service({language}){
    const serviceRef = useRef(null);
    useEffect(()=>{
        if(location.pathname == '/service'){
            setTimeout(() => {
            scrollToAbout();
        }, 600);
        }
        const scrollToAbout = () => {
            if (serviceRef.current) {
                serviceRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
    },[]);
    return(
        <div id='service' ref={serviceRef} className="relative w-full pt-44 flex items-center flex-col sm:flex-row gap-4 px-4">
            <p className='text-third text-lg font-extrabold absolute left-8 top-20 sm:left-[15%] sm:top-32 lg:left-0'>{language ? 'Layanan ' : "Service"}</p>
            {services.slice(0, 3).map((service, index) => (
                <div
                    key={index}
                    className="rounded  m-auto  w-3/4 p-3 lg:h-[18rem] pt-4 flex justify-center flex-col relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                >
                    <img src={service.path} className=" dark:invert-[1] w-20 rounded m-auto sm:w-24 " alt={`Service ${index + 1}`} />
                    <div className="w-auto p-2 flex flex-col items-center">
                        <h1 className="text-2xl text-center font-semibold dark:text-white">{language ? service.judulID : service.judul}</h1>
                        <p className="text-xl text-[#A2A9B4] text-center mt-4">{language ? service.sub.id : service.sub.en}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}