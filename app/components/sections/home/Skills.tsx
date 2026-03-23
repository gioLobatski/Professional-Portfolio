import { Section, Row, Column, Module } from '../../layout';

const Skills = () => {
  return (
    <Section id="skills" backgroundColor="bg-[#161B22]">
      <Row>
        <Column>
          <Module className="text-center mb-[30px]">
            <h2 className="text-[2em] text-white">Skills</h2>
          </Module>
          <div className="skills-wrapper flex justify-center gap-10 flex-wrap">
            <Module className="skill-item flex flex-col items-center w-[150px]">
              <img src="/assets/images/js_logo.png" alt="JavaScript" className="max-w-[80px] mb-2.5" />
              <progress value="80" max="100" className="w-full h-4"></progress>
            </Module>
            <Module className="skill-item flex flex-col items-center w-[150px]">
              <img src="/assets/images/html_logo.png" alt="HTML" className="max-w-[80px] mb-2.5" />
              <progress value="75" max="100" className="w-full h-4"></progress>
            </Module>
            <Module className="skill-item flex flex-col items-center w-[150px]">
              <img src="/assets/images/css_logo.png" alt="CSS" className="max-w-[80px] mb-2.5" />
              <progress value="90" max="100" className="w-full h-4"></progress>
            </Module>
          </div>
        </Column>
      </Row>
    </Section>
  );
};

export default Skills;
