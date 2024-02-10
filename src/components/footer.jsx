import PropTypes from 'prop-types';

export default function Footer({language}){
    const aboutURL =  () => {
        switch (location.pathname) {
            case '/':
                return '/#about';
            case '/contact':
            case '/about':
            case '/project':
                return '/about';
            default:
                return null;
            }
        };
    const projectURL =  () => {
        switch (location.pathname) {
            case '/':
                return '/#project';
            case '/contact':
            case '/about':
            case '/project':
                return '/project';
            default:
                return null;
            }
        };
    return(
        <div className="w-full h-72 bg-[#ececec] dark:bg-[#101012] flex justify-center items-center px-4">
            <div className="w-full lg:w-3/4 flex flex-col">
                <div className="flex justify-between sm:justify-beetwen lg:justify-start items-center px-4 mb-4 lg:mb-10">
                    <div className="lg:w-1/2 lg:flex lg:items-center lg:flex-col">
                        <p className="dark:text-white text-xl font-semibold sm:text-4xl ">I Kadek</p>
                        <p className="dark:text-white text-xl font-semibold sm:text-4xl ">Yola</p>
                        <p className="dark:text-white text-xl font-semibold sm:text-4xl ">Andika</p>
                    </div>
                    <div className="flex flex-col lg:px-12">
                        <p className="dark:text-white text-lg sm:text-3xl">Tautan</p>
                        <a className=" pl-1 text-[#A2A9B4] text-sm sm:text-xl" href="/">{language ? 'Beranda' : 'Home'}</a>
                        <a className=" pl-1 text-[#A2A9B4] text-sm sm:text-xl" href={aboutURL()}>{language ? 'Tentang' : 'About'}</a>
                        <a className=" pl-1 text-[#A2A9B4] text-sm sm:text-xl" href={projectURL()}>{language ? 'Proyek' : 'Project'}</a>
                    </div>
                    <div className="flex flex-col lg:px-12">
                        <p className="dark:text-white text-lg sm:text-3xl">Sosial</p>
                        <a className="pl-1 text-[#A2A9B4] text-sm sm:text-xl" target='blank' href="mailto:ikadekyolaandika02@gmail.com">Email</a>
                        <a className="pl-1 text-[#A2A9B4] text-sm sm:text-xl" target='blank' href="https://github.com/MeSkipperr">Github</a>
                        <a className="pl-1 text-[#A2A9B4] text-sm sm:text-xl" target='blank' href="https://www.instagram.com/kdk.yolaandika">Instagram</a>
                    </div>
                </div >
                <hr className='border-t-1 sm:border-t-2 border-black dark:border-white my-4' />
                <p className='dark:text-white text-sm sm:text-xl text-center'>{language ? 'Dibuat dengan ❤️ oleh I Kadek Yola Andika menggunakan ' : "Created with ❤️ by I Kadek Yola Andika using "}<span className="text-second">React JS & Tailwind Css</span></p>
            </div>
        </div>
    )
}
Footer.propTypes = {
    language: PropTypes.bool.isRequired,
}