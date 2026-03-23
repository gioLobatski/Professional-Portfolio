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
    <Module className="fixed w-full z-[99999] border-b bg-[rgba(13,17,23,0.95)] border-[#161B22]">
      <div className="flex justify-between items-center px-[30px] py-[15px]">
        <span className="font-bold text-[1.5em] text-white">Gio</span>
        <ul className="flex list-none gap-5 items-center m-0 p-0">
          <li className='nav_link'>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-decoration-none font-medium cursor-pointer transition-colors text-[#C9D1D9] hover:text-[#22D3EE]">
              About
            </a>
          </li>
          <li className='nav_link'>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-decoration-none font-medium cursor-pointer transition-colors text-[#C9D1D9] hover:text-[#22D3EE]">
              Projects
            </a>
          </li>
          <li className='nav_link'>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-decoration-none font-medium cursor-pointer transition-colors text-[#C9D1D9] hover:text-[#22D3EE]">
              Skills
            </a>
          </li>
          <li className='nav_link'>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="text-decoration-none font-medium cursor-pointer transition-colors text-[#C9D1D9] hover:text-[#22D3EE]">
              Experience
            </a>
          </li>
          <li className='nav_link contact'>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-decoration-none font-medium px-[20px] py-[10px] rounded-[10px] cursor-pointer transition-all text-[#A78BFA] border border-[#A78BFA] bg-transparent hover:bg-[#A78BFA] hover:text-[#0D1117]">
              Let's Talk!
            </a>
          </li>
        </ul>
      </div>
    </Module>
  );
};

export default Header;
