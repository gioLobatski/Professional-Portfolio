import { Section, Row, Column, Module } from './layout';

const HeroSection = () => {
  return (
    <Section backgroundColor="bg-gray-50">
      <div className="w-full">
        <div className="flex justify-between items-center px-[5%] py-[60px] min-h-[80vh]">
            <div className="flex-1 text-left z-10">
              <Module>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Paul Genre Lobaton</h1>
              </Module>
              <Module className='typing_wrapper'>
                <p className="typing inline-block relative text-[1.2em] border-r-2 border-black animate-caret steps-1 min-w-[20ch] text-center whitespace-nowrap overflow-hidden">
                  <span className="absolute left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap w-0 opacity-0 animate-typing1 steps-20">
                    Full Stack Developer
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap w-0 opacity-0 animate-typing2 steps-20">
                    Web Designer
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap w-0 opacity-0 animate-typing3 steps-20">
                    Programmer
                  </span>
                </p>
              </Module>
            </div>
            <Module className="header-right flex-1 flex justify-end">
              <div className="relative w-[450px] h-[450px] rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/images/Portfolio-Image.png" 
                  alt="Paul Genre Lobaton" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </Module>
          </div>
      </div>
    </Section>
  );
};

export default HeroSection;
