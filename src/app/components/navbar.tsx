import React from 'react';
import { NavLink } from 'react-router-dom';
import  useNavbarStore from "../../store/navbarStore";
import { dataNavbar } from '../data/data';

const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar } = useNavbarStore();

  return (
    <nav className='hidden bg-app-light-background sm:flex sm:flex-col sm:min-w-[290px]'>
      <aside className='flex items-center justify-center py-11 border-b-2 border-app-border'>
        <a href='#'>
          <img
            src={dataNavbar(navbarItemActive).logo.icon}
            alt={dataNavbar(navbarItemActive).logo.title}
            className='w-32'
          />
        </a>
      </aside>

      <ul className='flex flex-col gap-y-7 py-12 overflow-scroll'>
        {dataNavbar(navbarItemActive).nav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={`flex flex-row items-center mx-6 p-2 text-2xl rounded-md ${
              navbarItemActive === item.id
                ? 'bg-app-shade-6'
                : 'hover:bg-app-shade-6'
            }  hover:text-app-primary transition ease-in duration-200`}
            onClick={() => {
              selectedItemNavbar(item.id);
            }}
          >
            {item.icon}

            <span
              className={`ml-3 text-base font-medium text-app-${
                navbarItemActive === item.id ? 'primary' : 'shade-5'
              }`}
            >
              {item.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
