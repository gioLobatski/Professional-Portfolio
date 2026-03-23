import { Section, Row, Column, Module } from '../../layout';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F14] border-t border-[#161B22]">
      <Section backgroundColor="bg-transparent">
        <Row>
          <Column>
            <Module className="text-center py-[30px]">
              <p className="text-[#8B949E]">
                © {new Date().getFullYear()} Paul Genre Lobaton. All rights reserved.
              </p>
              <div className="social-icons mt-4 flex justify-center gap-5">
                <a href="#" className="text-[#22D3EE] hover:text-[#A78BFA] transition-colors">LinkedIn</a>
                <a href="#" className="text-[#22D3EE] hover:text-[#A78BFA] transition-colors">GitHub</a>
                <a href="#" className="text-[#22D3EE] hover:text-[#A78BFA] transition-colors">Twitter</a>
              </div>
            </Module>
          </Column>
        </Row>
      </Section>
    </footer>
  );
};

export default Footer;
