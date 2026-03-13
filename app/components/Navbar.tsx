import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-[99999] border-b border-gray-200">
      <div className="flex justify-between items-center px-[30px] py-[15px]">
        <span className="font-bold text-[1.5em]">Gio</span>
        <ul className="flex list-none gap-5 items-center m-0 p-0">
          <li className='nav_link'>
            <Link href="#about" className="text-decoration-none text-gray-800 font-medium hover:text-blue-500">
              About
            </Link>
          </li>
          <li className='nav_link'>
            <Link href="#projects" className="text-decoration-none text-gray-800 font-medium hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li className='nav_link'>
            <Link href="#skills" className="text-decoration-none text-gray-800 font-medium hover:text-blue-500">
              Skills
            </Link>
          </li>
          <li className='nav_link'>
            <Link href="#experience" className="text-decoration-none text-gray-800 font-medium hover:text-blue-500">
              Experience
            </Link>
          </li>
          <li className='nav_link contact'>
            <Link href="#contact" className="text-decoration-none text-gray-800 font-medium hover:text-blue-500 border border-red-500 px-[20px] py-[10px] rounded-[10px]">
              Let's Talk!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
