import { useState } from 'react';
import { hamburger, close } from '../assets/icons';
import logo from '../assets/images/header-logo.svg';
import { navLinks } from '../constants';

const Nav = () => {
  const [isMobileNavClose, setIsMobileNavClose] = useState(true);

  return (
    <header className=" p-6 relative">
      <nav className="flex justify-between items-center ">
        <div className="p-2">
          <a href="#">
            <img src={logo} alt="nike logo" height={100} width={150} />
          </a>
        </div>

        <div className="p-2 hidden md:block">
          <ul className="flex gap-36">
            {navLinks.map(link => (
              <li key={link.label} className="text-lg text-slate-gray">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${isMobileNavClose ? 'block' : 'hidden'} md:hidden p-2  `}
          onClick={() => setIsMobileNavClose(close => !close)}
        >
          <img src={hamburger} alt="hamburger icon" height={25} width={25} />
        </div>
      </nav>

      <div
        className={` ${
          isMobileNavClose ? 'hidden' : 'block'
        } md:hidden flex justify-center items-center min-w-full  bg-primary absolute top-0 left-0 z-50 p-4 `}
        onClick={() => setIsMobileNavClose(close => !close)}
      >
        <div className=" p-2 mr-3 mt-3 absolute top-0 right-0 border-2 border-gray-500 rounded-2xl ">
          <img src={close} alt="close icon" height={22} width={22} />
        </div>

        <ul className="flex flex-col gap-4">
          {navLinks.map(link => (
            <li
              key={link.label}
              className="text-lg text-slate-gray px-4 text-center border-2 outline-0 border-coral-red rounded-full"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
