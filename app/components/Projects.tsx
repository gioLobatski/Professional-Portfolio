'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <section id="projects" className="py-[60px] px-[10%] text-center">
      <h2 className="mb-[30px] text-[2em] text-gray-900">Projects</h2>

      <div className="project-slider mb-[60px]">
        <h3 className="mb-[20px] text-left">Owned Projects</h3>
        <Slider {...sliderSettings}>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>Project description</p>
          </div>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>Project description</p>
          </div>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>Project description</p>
          </div>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>Project description</p>
          </div>
        </Slider>
      </div>

      <div className="project-slider mb-[60px]">
        <h3 className="mb-[20px] text-left">Projects I Am Part Of</h3>
        <Slider {...sliderSettings}>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>Project description</p>
          </div>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>Project description</p>
          </div>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>Project description</p>
          </div>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>Project description</p>
          </div>
        </Slider>
      </div>

      <div className="project-slider mb-[60px]">
        <h3 className="mb-[20px] text-left">School Projects</h3>
        <Slider {...sliderSettings}>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="School Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>School Project description</p>
          </div>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="School Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>School Project description</p>
          </div>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="School Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>School Project description</p>
          </div>
          <div className="blurb flex !flex-col items-center p-5">
            <img src="/assets/images/woocommerce-placeholder.jpg" alt="School Project" className="max-w-[250px] rounded-[10px] mb-4 shadow-lg" />
            <p>School Project description</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
