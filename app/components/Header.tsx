const Header = () => {
  return (
    <header className="flex justify-between items-center px-[10%] py-[60px] bg-gray-50 min-h-screen">
      <div className="flex-1 text-left">
        <h1>Hi, I'm Paul Genre Lobaton</h1>
        <div className='typing_wrapper'>
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
        </div>
      </div>
      <div className="header-right">
        <img 
          src="/assets/images/woocommerce-placeholder.jpg" 
          alt="Paul Genre Lobaton" 
          className="max-w-[250px] rounded-full border-[5px] border-gray-300" 
        />
      </div>
    </header>
  );
};

export default Header;
