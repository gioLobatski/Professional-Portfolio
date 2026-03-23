'use client';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

interface Project {
  imageSrc: string;
  alt: string;
  description: string;
  linkUrl?: string;
}

interface ProjectSliderProps {
  title: string;
  projects: Project[];
}

export default function ProjectSlider({ title, projects }: ProjectSliderProps) {
  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="project-slider mb-[60px]">
      <h3 className="mb-[20px] text-left text-white">{title}</h3>
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            alt={project.alt}
            description={project.description}
            linkUrl={project.linkUrl}
          />
        ))}
      </Slider>
    </div>
  );
}
