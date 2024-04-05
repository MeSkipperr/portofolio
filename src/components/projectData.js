// import project1 from '../assets/project/1.png';
import clock from '../assets/project/clock.png';
import linkTree from '../assets/project/linktree.png';
import sharingFile from '../assets/project/sharingFile.png';
import classTkj2 from '../assets/project/classTkj2.png';
import connectServer from '../assets/project/connectServer.png';
import manageIP from '../assets/project/manageIP.png';


export const projectData =[
    {
        projectCode : [
                {
                    path: 'classTKJ2',
                    title: 'Website TKJ 2',
                    sub:{
                        ID: 'Ini adalah website lengkap untuk kelas TKJ2 dengan informasi tentang Wali Kelas, perangkat kelas, dan siswa. Website ini dilengkapi dengan fitur untuk melihat tugas, foto, dan video.Dibuat dengan menggunakan Next Js, Tailwind, Typescript, Node Js, dan Express.',
                        EN: 'This is a complete website for TKJ2 class with information about Class Guardians, class devices, and students. The website includes features to view assignments, photos, and videos. Built with Next Js, Tailwind, Typescript, Node Js, dan Express.'
                    },
                    image: classTkj2,
                },
                {
                    path: 'cloudfile',
                    title: 'Cloud File',
                    sub:{
                        ID: 'Cloud File adalah sebuah website untuk menyimpan file secara daring (online). Semua file dapat dicari dengan mengetikkan nama atau URL file. Dibangun dengan menggunakan React Js, Node Js, dan Express.',
                        EN: 'Cloud File is a website for storing files online. All files can be searched by typing their name or URL. Built with React Js, Node Js, and Express.'
                    },
                    image: sharingFile,
                },
                {
                    path: 'digitalClock',
                    title: 'Digital Clock',
                    sub:{
                        ID: 'Website ini merupakan jam digital yang juga menampilkan hari. Dilengkapi dengan fitur layar penuh dan mode terang atau mode gelap. Dibuat dengan HTML, CSS, dan JavaScript.',
                        EN: 'This website is a digital clock that also displays the day. It comes with fullscreen and light or dark mode features. Built using HTML, CSS, and JavaScript'
                    },
                    image: clock,
                },
                {
                    path:'linktree',
                    title: 'Link Tree',
                    sub:{
                        ID: 'Website Link Tree untuk mengakses profil. Dibuat menggunakan HTML dan CSS.',
                        EN: 'Link Tree website for accessing profiles. Built using HTML and CSS.'
                    },
                    image: linkTree,
                },
        ],
        projectOther : [
            {
                path: 'server',
                title: 'Server',
                sub:{
                    ID: "Proyek ini bertujuan agar setiap komputer dapat mengakses setiap server yang tersedia.",
                    EN: "Project to enable every computer to access any available server."
                },
                image: connectServer,
            },
            {
                path: 'ipAddress',
                title: 'IP Address',
                sub:{
                    ID: 'Proyek ini bertujuan agar setiap komputer dapat saling terhubung dan berbagi IP untuk efisiensi yang lebih baik.',
                    EN: 'Project to enable computers to connect to each other and share IP addresses for improved efficiency.'
                },
                image: manageIP,
            }

        ],
    }
]