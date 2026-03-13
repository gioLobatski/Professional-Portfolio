const Skills = () => {
  return (
    <section id="skills" className="py-[60px] px-[10%] text-center">
      <h2 className="mb-[30px] text-[2em] text-gray-900">Skills</h2>
      <div className="skills-wrapper flex justify-center gap-10 flex-wrap">
        <div className="skill-item flex flex-col items-center w-[150px]">
          <img src="/assets/images/js_logo.png" alt="JavaScript" className="max-w-[80px] mb-2.5" />
          <progress value="80" max="100" className="w-full h-4"></progress>
        </div>
        <div className="skill-item flex flex-col items-center w-[150px]">
          <img src="/assets/images/html_logo.png" alt="HTML" className="max-w-[80px] mb-2.5" />
          <progress value="75" max="100" className="w-full h-4"></progress>
        </div>
        <div className="skill-item flex flex-col items-center w-[150px]">
          <img src="/assets/images/css_logo.png" alt="CSS" className="max-w-[80px] mb-2.5" />
          <progress value="90" max="100" className="w-full h-4"></progress>
        </div>
      </div>
    </section>
  );
};

export default Skills;
