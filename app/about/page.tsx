'use client';

import { Section, Row, Column, Module } from '../components/layout';
import { Header, HeroSection, Contact } from '../components/sections/home';

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <Section id="about-detail" backgroundColor="bg-gray-50">
        <Row>
          <Column>
            <Module className="text-center mb-[30px]">
              <h2 className="text-[2em] text-gray-900 mb-[20px]">About Me</h2>
              <div className="max-w-[800px] mx-auto">
                <p className="mb-[20px]">
                  I am a passionate web developer with expertise in creating modern, responsive, and user-friendly websites. 
                  With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean code and intuitive design.
                </p>
                <p className="mb-[20px]">
                  My journey in web development started with a curiosity about how websites work, and it has evolved into a career 
                  where I get to solve complex problems and create impactful digital experiences.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
              </div>
            </Module>
          </Column>
        </Row>
      </Section>

      <Contact />
    </>
  );
}
