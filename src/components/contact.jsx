import PropTypes from 'prop-types';
import aboutPic from '../assets/aboutPic.webp';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

// Contact component
export default function Contact({language}) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qi55cde', 'template_soxfi3k', form.current, 'fR6kIM359Jl1nExiz')
      .then((result) => {
        console.log(result.text);
        // Tampilkan pesan pop-up jika email berhasil dikirim
        Swal.fire({
            title: language ? 'Berhasil dikirim':'Sent successfully',
            icon: "success"
        });
    })
    .catch((error) => {
        console.log(error.text);
    });
    };
    return (
        <div className="pt-24 w-full dark:bg-darkBg flex justify-center items-center flex-col p-4 xl:px-80" style={{ zIndex: 9999 }}>

            {/* About section */}
            <div className="w-full my-16 gap-8 flex flex-col">
                <img src={aboutPic} alt="about" className='w-24 sm:w-40' />
                <h2 className="dark:text-white text-black text-4xl sm:text-7xl">{language ? 'Mari kita mulai proyek bersama' : "Let's start a project together"}</h2>
            </div>

            {/* Contact form */}
            <div className="flex justify-start w-full flex-col">
                <form ref={form} onSubmit={sendEmail} action='/contact'>
                    {/* Name input */}
                    <hr className='border-t-1 sm:border-t-2 border-black dark:border-white my-4' />
                    <p className='dark:text-white sm:text-2xl'>{language ? 'Nama' : "Name"}<span className='px-1 text-red-600'>*</span></p>
                    <input
                        type="text"
                        name="user_name"
                        id=""
                        required
                        placeholder="I Kadek Yola Andika"
                        className="inputContactForm dark:text-white p-2 w-full h-10 bg-transparent sm:h-20 sm:placeholder:text-2xl sm:text-2xl"
                    />

                    {/* Email input */}
                    <hr className='border-t-1 sm:border-t-2 border-black dark:border-white my-4' />
                    <p className='dark:text-white sm:text-2xl'>Email<span className='px-1 text-red-600'>*</span></p>
                    <input
                        type="email"
                        name="user_email"
                        id=""
                        required
                        placeholder="ikadek@yola.com"
                        className="inputContactForm dark:text-white p-2 w-full h-10 bg-transparent sm:h-20 sm:placeholder:text-2xl sm:text-2xl"
                    />

                    {/* Services input */}
                    <hr className='border-t-1 sm:border-t-2 border-black dark:border-white my-4' />
                    <p className='dark:text-white sm:text-2xl'>{language ? 'Apa layanan yang sedang anda cari?' : "What services are you looking for?"} <span className='px-1 text-red-600'>*</span></p>
                    <input
                        type="text"
                        name="user_service"
                        id=""
                        required
                        placeholder="Web Development, Network Topology..."
                        className="inputContactForm dark:text-white p-2 w-full h-10 bg-transparent sm:h-20 sm:placeholder:text-2xl sm:text-2xl"
                    />

                    {/* Message input */}
                    <hr className='border-t-1 sm:border-t-2 border-black dark:border-white my-4' />
                    <p className='dark:text-white sm:text-2xl'>{language ? 'Pesan' : "Message"}<span className='px-1 text-red-600'>*</span></p>
                    <input
                        type="text"
                        name="user_message"
                        id=""
                        required
                        placeholder={language ? 'Halo Yola, bisakah bantu saya dengan...' : "Hello Yola, can you help me with..."}
                        className="inputContactForm dark:text-white p-2 w-full h-10 bg-transparent sm:h-20 sm:placeholder:text-2xl sm:text-2xl"
                    />

                    {/* Submit button */}
                    <hr className='border-t-1 sm:border-t-2 border-black dark:border-white my-4' />
                    <button type="submit" className='submitContact btnHero px-7 rounded-md py-2 sm:px-10 sm:py-4 text-lg sm:text-2xl bg-third text-white'>{language ? 'Kirimkan!' : "Send It!"}</button>
                </form>
            </div>

            {/* Social links */}
            <div className="my-8 w-full">
                <p className='text-[#A2A9B4] sm:text-3xl'>{language ? 'Sosial' : "Social"}</p>
                <div className="flex gap-4">
                    <a className='dark:text-white hover:text-third dark:hover:text-third hover:underline sm:text-2xl' href="">Instagram</a>
                    <a className='dark:text-white hover:text-third dark:hover:text-third hover:underline sm:text-2xl' href="">Email</a>
                    <a className='dark:text-white hover:text-third dark:hover:text-third hover:underline sm:text-2xl' href="">GitHub</a>
                </div>
            </div>
        </div>
    );
}
Contact.propTypes = {
    language: PropTypes.bool.isRequired,
}