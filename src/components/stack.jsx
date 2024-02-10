import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';
import { useMemo } from 'react'; // Import useMemo for performance optimization

import css from '../assets/stact/css.svg';
import html from '../assets/stact/html.svg';
import js from '../assets/stact/js.svg';
import php from '../assets/stact/php.svg';
import nodejs from '../assets/stact/NodeJS.svg';
import sql from '../assets/stact/sql.svg';
import mongodb from '../assets/stact/mongodb.svg';
import react from '../assets/stact/react.svg';
import tailwind from '../assets/stact/tailwind.svg';

import ai from '../assets/otherSkill/ai.svg';
import excel from '../assets/otherSkill/excel.svg';
import git from '../assets/otherSkill/git.svg';
import powerpoint from '../assets/otherSkill/powerpoint.svg';
import ps from '../assets/otherSkill/ps.svg';
import word from '../assets/otherSkill/word.svg';
import mikrotik from '../assets/otherSkill/mikrotik.png';
import cisco from '../assets/otherSkill/cisco.png';

// Create an array of stack images for easy mapping
const stackImages = [
  { src: html, alt: 'html', title: 'HTML' },
  { src: css, alt: 'css', title: 'CSS' },
  { src: js, alt: 'js', title: 'JavaScript' },
  { src: php, alt: 'php', title: 'PHP' },
  { src: nodejs, alt: 'nodejs', title: 'Node.js' },
  { src: sql, alt: 'sql', title: 'SQL' },
  { src: react, alt: 'react', title: 'React' },
  { src: tailwind, alt: 'tailwind', title: 'Tailwind CSS' },
  { src: mongodb, alt: 'mongodb', title: 'MongoDB' },
];

const otherImages = [
  { src: git, alt: 'Git Logo', title: 'Git' },
  { src: ps, alt: 'Photoshop Logo', title: 'Adobe Photoshop' },
  { src: ai, alt: 'AI Logo', title: 'Adobe Ilustrator' },
  { src: powerpoint, alt: 'PowerPoint Logo', title: 'Microsoft PowerPoint' },
  { src: word, alt: 'Word Logo', title: 'Microsoft Word' },
  { src: excel, alt: 'Excel Logo', title: 'Microsoft Excel' },
  { src: mikrotik, alt: 'Mikrotik Logo', title: 'Mikrotik' },
  { src: cisco, alt: 'Cisco Pocket Tracer Logo', title: 'Cisco Pocket Tracer' },
];

export default function Stack({ language }) {
  const stackImagesMemo = useMemo(() => stackImages, []); // Memoize the stack images array
  const otherImagesMemo = useMemo(() => otherImages, []); // Memoize the other images array

  return (
    <>
      <div className="flex flex-col px-8 lg:w-3/4 w-full  justify-center">
        <h1 className='text-2xl sm:text-4xl dark:text-white'>Skill</h1>
        <h2 className='text-lg sm:text-3xl dark:text-white'>
          {language ? 'Ini adalah teknologi yang pernah saya gunakan' : "These are the technologies I've worked with"}
        </h2>
        <div className=" flex flex-col w-full  overflow-auto gap-6 mt-8">
          <Marquee autoFill>
            {stackImagesMemo.map((image, index) => (
              <img key={index} className='mx-6 sm:h-[100px] h-[50px] w-auto cursor-pointer' loading="lazy" src={image.src} alt={image.alt} title={image.title} />
            ))}
          </Marquee>
          <h2 className=' text-3xl dark:text-white'>{language ? 'Lainnya' : "Other"}</h2>
          <Marquee direction='right' autoFill>
            {otherImagesMemo.map((image, index) => (
              <img key={index} className='mx-4 sm:h-[100px] h-[50px] w-auto cursor-pointer' loading="lazy" src={image.src} alt={image.alt} title={image.title} />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}

Stack.propTypes = {
  language: PropTypes.bool.isRequired,
};
