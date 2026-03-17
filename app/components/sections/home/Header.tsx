'use client';

import Link from 'next/link';
import { Section, Row, Column, Module } from '../../layout';

const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Module className="fixed w-full bg-white z-[99999] border-b border-gray-200">
      <div className="flex justify-between items-center px-[30px] py-[15px]">
        <span className="font-bold text-[1.5em]">Gio</span>
        <ul className="flex list-none gap-5 items-center m-0 p-0">
          <li className='nav_link'>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-decoration-none text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
              About
            </a>
          </li>
          <li className='nav_link'>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-decoration-none text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
              Projects
            </a>
          </li>
          <li className='nav_link'>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-decoration-none text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
              Skills
            </a>
          </li>
          <li className='nav_link'>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="text-decoration-none text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
              Experience
            </a>
          </li>
          <li className='nav_link contact'>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-decoration-none text-gray-800 font-medium hover:text-blue-500 border border-red-500 px-[20px] py-[10px] rounded-[10px] cursor-pointer">
              Let's Talk!
            </a>
          </li>
        </ul>
      </div>
    </Module>
  );
};

export default Header;
