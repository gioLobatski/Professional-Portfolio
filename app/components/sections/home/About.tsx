import { Section, Row, Column, Module } from '../../layout';
import Link from 'next/link';

const About = () => {
  return (
    <Section id="about" backgroundColor="bg-[#161B22]">
      <Row>
        <Column>
          <Module className="text-center max-w-[900px] mx-auto">
            <h2 className="mb-8 text-3xl font-semibold text-white">About Me</h2>

            <p className="mb-6 text-[#C9D1D9] leading-relaxed">
              I'm a detail-oriented web developer who enjoys turning complex ideas into clean,
              functional, and user-friendly digital experiences. I specialize in modern frontend
              development using technologies like React, Next.js, and Tailwind CSS, with a strong
              focus on performance, responsiveness, and polished UI interactions.
            </p>

            <p className="mb-6 text-[#C9D1D9] leading-relaxed">
              My work often involves building dynamic websites, custom WordPress solutions, and
              headless CMS integrations — combining flexibility on the backend with seamless
              frontend experiences. I enjoy solving layout challenges, refining user interfaces,
              and making sure every component works smoothly across devices.
            </p>

            <p className="mb-4 text-[#C9D1D9] leading-relaxed font-medium">
              I'm particularly comfortable working with:
            </p>

            <ul className="mb-6 text-[#C9D1D9] space-y-2 list-disc list-inside inline-block text-center">
              <li>Responsive and component-based UI systems</li>
              <li>Headless WordPress and GraphQL integrations</li>
              <li>WooCommerce customizations</li>
              <li>Interactive elements like sliders, animations, and media components</li>
              <li>Performance optimization and clean code structure</li>
            </ul>

            <p className="text-[#C9D1D9] leading-relaxed">
              I approach development with a problem-solver mindset and strong attention to detail,
              always aiming to create websites that are not only visually appealing but also
              intuitive and efficient to use.
            </p>

            <div className="mt-8">
              <Link 
                href="/about"
                className="inline-block px-8 py-3 font-semibold rounded-lg transition-all no-underline text-[#A78BFA] border border-[#A78BFA] bg-transparent hover:bg-[#A78BFA] hover:text-[#0D1117]"
              >
                Learn More
              </Link>
            </div>
          </Module>
        </Column>
      </Row>
    </Section>
  );
};

export default About;