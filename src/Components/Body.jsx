import React, { useEffect, useRef, useState } from 'react';
import { PiInstagramLogoFill, PiLinkedinLogoFill, PiFacebookLogoFill } from 'react-icons/pi';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Sanchit from '../assets/sp1.png';
import FramerMagnetic from '../Components/FramerMagnetic';
import Career from './Career';
import Projects from './Projects';
import Contact from './Contact';
import { FaGithub } from 'react-icons/fa6';
import TechStack from './TechStack';
import { CgMenuRight } from "react-icons/cg";

const Body = () => {
  const [activeSection, setActiveSection] = useState('About'); // default active section
  const aboutMeRef = useRef(null);
  const journeyRef = useRef(null);
  const techstackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to check which section is currently in view
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (
      scrollPosition >= aboutMeRef.current.offsetTop &&
      scrollPosition < techstackRef.current.offsetTop
    ) {
      setActiveSection('About');
    }
    else if (
      scrollPosition >= techstackRef.current.offsetTop &&
      scrollPosition < journeyRef.current.offsetTop
    ) {
      setActiveSection('TechStack');
    } 
    else if (
      scrollPosition >= journeyRef.current.offsetTop &&
      scrollPosition < projectsRef.current.offsetTop
    ) {
      setActiveSection('Journey');
    }     
    else if (
      scrollPosition >= projectsRef.current.offsetTop &&
      scrollPosition < contactRef.current.offsetTop
    ) {
      setActiveSection('Projects');
    } else if (scrollPosition >= contactRef.current.offsetTop) {
      setActiveSection('Contact');
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ behavior: 'smooth', left: 0, top: 0 });
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const linkItems = [
    { linkName: 'About', ref: aboutMeRef },
    { linkName: 'TechStack', ref: techstackRef },
    { linkName: 'Journey', ref: journeyRef },
    { linkName: 'Projects', ref: projectsRef },
    { linkName: 'Contact', ref: contactRef },
  ];

  const links = [
    { url: 'https://github.com/poudelsanchit', icon: <FaGithub /> },
    { url: 'linkedin.com/in/poudelsanchit/', icon: <PiLinkedinLogoFill /> },
    { url: 'https://www.instagram.com/poudelsanchit/', icon: <PiInstagramLogoFill /> },
    { url: 'https://www.facebook.com/poudelsanchit', icon: <PiFacebookLogoFill /> },
  ];

  return (
    <div className="bg-bg-dark h-auto text-txtprimary font-poppins flex sm:justify-end ">
            <CgMenuRight  className='text-3xl mr-4 fixed  right-2 top-4 sm:hidden z-50 '/>

      <div className="w-1/12 h-full sm:flex justify-center items-center fixed right-0 top-0 hidden z-50">
        <div className=" h-[95%] sm:h-5/6 w-6/12 sm:flex flex-col items-end z-50 ">

        <div className="font-Poppins text-sm font-medium z-50 sm:flex flex-col tracking-wider sm:gap-1  ">

        {linkItems.map((item, index) => (
          <div
            key={index}
            className={`z-50 flex justify-end cursor-pointer ${
              activeSection === item.linkName ? 'text-txtprimary' : 'text-txttertiary transition-all'
            }`}
            onClick={() => scrollToSection(item.ref)}
          >
            {item.linkName}
          </div>
        ))}
      </div>

        </div>
      </div>
      <div className="w-2/12 h-full flex justify-center items-center fixed left-0 top-0 z-50">

        <div className="h-[95%] sm:h-5/6 w-10/12 flex flex-col justify-between  ">
          <div className="font-Poppins font-bold " onClick={scrollToTop}>
            <img src={Sanchit} alt="" className="sm:h-12 h-10 ml-5 cursor-pointer " />
          </div>
          <div className="flex flex-col gap-10 text-xl hidden sm:block">
            {links.map((item, index) => (
              <FramerMagnetic key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="h-10 w-10 hover:bg-txtsecondary hover:text-black transition-all rounded-full flex justify-center items-center">
                    {item.icon}
                  </div>
                </a>
              </FramerMagnetic>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:w-[80%] w-full flex flex-col sm:gap-5 gap-20 z-10 pl-7 sm:pl-0 ">
        <Intro scrollToAboutMe={() => scrollToSection(aboutMeRef)} />
        <AboutMe ref={aboutMeRef} />
        <TechStack ref={techstackRef} />
        <Career ref={journeyRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </div>
      <div className="sm:w-1/12 w-[2%]"></div>
    </div>
  );
};

export default Body;
