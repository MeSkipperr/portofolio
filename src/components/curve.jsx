import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { text, curve, translate } from './anim.js';
import '../style/transition.css'

const Curve = ({ children, backgroundColor }) => {
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    });

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    const routes = useMemo(() => {
        const sessionLanguage = sessionStorage.getItem('language');
        return {
            "/": sessionLanguage === 'ID' ? "Beranda" : "Home",
            "/about": sessionLanguage === 'ID' ? "Tentang" : "About",
            "/project": sessionLanguage === 'ID' ? "Proyek" : "Project",
            "/service": sessionLanguage === 'ID' ? "Layanan" : "Service",
            "/contact": sessionLanguage === 'ID' ? "Kontak" : "Contact",
            ...(sessionLanguage === 'EN' || sessionLanguage === null ? {
                "/project/project1": 'project1',
                "/project/project2": 'project2'
            } : {})
        };
    }, []);

    return (
        <div className='page curve' style={{ backgroundColor }}>
            <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className='background' />
            <motion.p className='route z-50' {...anim(text)}>
                {routes[window.location.pathname]}
            </motion.p>
            {dimensions.width != null && <SVG {...dimensions} />}
            {children}
        </div>
    );
};

const SVG = ({ height, width }) => {
    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    return (
        <motion.svg className="svg-class z-[100]" {...anim(translate)}>
            <motion.path className="z-[102]" {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    );
};

const anim = (variants) => ({
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit"
});

export default Curve;
