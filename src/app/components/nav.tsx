import React from 'react';
import { BiHome, BiUser } from 'react-icons/bi';
import { BiBrain } from "react-icons/bi";
import { BsBriefcase, BsClipboard2Data } from 'react-icons/bs';
import { FaAddressBook } from "react-icons/fa";
import { Link } from "react-scroll";


const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white items-center' >
          <Link   
            to='Banner'  
            activeClassName='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHome />
          </Link>
          <Link   
            to="About" 
            activeClassName='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
            <BiUser />
          </Link>
          <Link   
            to="Skills" 
            activeClassName='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
            <BiBrain />
          </Link>
          <Link   
            to="Portfolio" 
            activeClassName='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
            <BsBriefcase/>
          </Link>
          <Link   
            to="Experience" 
            activeClassName='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
            <BsClipboard2Data/>
          </Link>
          <Link   
            to="Contact" 
            activeClassName='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
            <FaAddressBook />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
