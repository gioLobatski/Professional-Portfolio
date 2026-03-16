import { Section, Row, Column, Module } from './layout';

const Experience = () => {
  return (
    <Section id="experience" backgroundColor="bg-white">
      <Row>
        <Column>
          <Module className="text-center mb-[30px]">
            <h2 className="text-[2em] text-gray-900">Experience</h2>
          </Module>
          <Module className="experience-item text-left mb-8">
            <h3 className="mb-2.5 text-blue-500">Job Title / Role</h3>
            <p>Description of what you did, responsibilities, and achievements.</p>
          </Module>
          <Module className="experience-item text-left mb-8">
            <h3 className="mb-2.5 text-blue-500">Another Role</h3>
            <p>Another description goes here.</p>
          </Module>
        </Column>
      </Row>
    </Section>
  );
};

export default Experience;
