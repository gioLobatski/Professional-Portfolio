'use client';

import { Section, Row, Column, Module } from '../../layout';
import ProjectSlider from '../../projects/ProjectSlider';

const Projects = () => {
  const ownedProjects = [
    { imageSrc: '/assets/images/isti.png', alt: 'Innovative Solutions Technology Inc.', description: 'Innovative Solutions Technology Inc.', linkUrl: 'https://innovative-sti.com/' },
    { imageSrc: '/assets/images/edgetech-ph.png', alt: 'Edgetech Inc.', description: 'Edgetech Inc.', linkUrl: 'https://edgetech-ph.com/' },
    { imageSrc: '/assets/images/gsnp.png', alt: 'Go Soriano Nepomuceno + Parters', description: 'Go Soriano Nepomuceno + Parters', linkUrl: 'https://gsnparchstudio.com/' },
    { imageSrc: '/assets/images/bbx-collab.png', alt: 'BBX Collab', description: 'BBX Collab', linkUrl: 'https://bbxcollab.com/' },
    { imageSrc: '/assets/images/ishi.png', alt: 'Ishi by Kawara', description: 'Ishi by Kawara', linkUrl: 'https://ishi.com.ph/' },
    { imageSrc: '/assets/images/diju-peptides.png', alt: 'Diju Peptides', description: 'Diju Peptides', linkUrl: 'https://diju.ph/' },
    { imageSrc: '/assets/images/pse-invest-ph.png', alt: "PSE's Invest PH 2026", description: "PSE's Invest PH 2026", linkUrl: 'https://investph.pse.com.ph/' },
    { imageSrc: '/assets/images/primex.png', alt: 'Primex Inc.', description: 'Primex Inc.', linkUrl: 'https://primexinc.org/' },
    { imageSrc: '/assets/images/pdm.png', alt: 'Packaging Depot Manila', description: 'Packaging Depot Manila', linkUrl: 'https://packagingdepotmanila.beta04.site/' },
  ];

  const partOfProjects = [
    { imageSrc: '/assets/images/woocommerce-placeholder.jpg', alt: 'Project', description: 'Project description' },
    { imageSrc: '/assets/images/woocommerce-placeholder.jpg', alt: 'Project', description: 'Project description' },
    { imageSrc: '/assets/images/woocommerce-placeholder.jpg', alt: 'Project', description: 'Project description' },
    { imageSrc: '/assets/images/woocommerce-placeholder.jpg', alt: 'Project', description: 'Project description' },
  ];

  const schoolProjects = [
    { imageSrc: '/assets/images/woocommerce-placeholder.jpg', alt: 'School Project', description: 'School Project description' },
    { imageSrc: '/assets/images/woocommerce-placeholder.jpg', alt: 'School Project', description: 'School Project description' },
    { imageSrc: '/assets/images/woocommerce-placeholder.jpg', alt: 'School Project', description: 'School Project description' },
    { imageSrc: '/assets/images/woocommerce-placeholder.jpg', alt: 'School Project', description: 'School Project description' },
  ];

  return (
    <Section id="projects" backgroundColor="bg-white">
      <Row>
        <Column>
          <Module className="text-center mb-[30px]">
            <h2 className="text-[2em] text-gray-900">Projects</h2>
          </Module>
          
          <ProjectSlider title="Owned Projects" projects={ownedProjects} />
          <ProjectSlider title="Projects I Am Part Of" projects={partOfProjects} />
          <ProjectSlider title="School Projects" projects={schoolProjects} />
        </Column>
      </Row>
    </Section>
  );
};

export default Projects;
