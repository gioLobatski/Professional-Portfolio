import { Section, Row, Column, Module } from '../../layout';

const Experience = () => {
  return (
    <Section id="experience" backgroundColor="bg-[#0D1117]">
      <Row>
        <Column>
          <Module className="text-center mb-[30px]">
            <h2 className="text-[2em] text-white">Experience</h2>
          </Module>
          <Module className="experience-item text-left mb-8">
            <h3 className="mb-2.5 text-[#22D3EE]">Job Title / Role</h3>
            <p className="text-[#C9D1D9]">Description of what you did, responsibilities, and achievements.</p>
          </Module>
          <Module className="experience-item text-left mb-8">
            <h3 className="mb-2.5 text-[#22D3EE]">Another Role</h3>
            <p className="text-[#C9D1D9]">Another description goes here.</p>
          </Module>
        </Column>
      </Row>
    </Section>
  );
};

export default Experience;
