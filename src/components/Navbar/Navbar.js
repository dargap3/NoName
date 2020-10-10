import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../Footer/Footer';

import './navbar.styles.scss';

const Navbar = ({ onCloseNav }) => {
  const useOutsideClic = ref => {
    useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
          onCloseNav();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  
  const wrapperRef = useRef(null);
  useOutsideClic(wrapperRef);

  return (
    <nav
      ref={wrapperRef}
      className={'nav'}
    >
      <button
        className={'nav__close'}
        onClick={onCloseNav}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29 2L5 27" stroke="black" strokeWidth="4"/>
          <line x1="1.38919" y1="2.5612" x2="30.3892" y2="30.5612" stroke="black" strokeWidth="4"/>
        </svg>
      </button>
      <ul className={'nav__list'}>
        <li
          className={'nav__item'} 
          onClick={onCloseNav}
        >
          <NavLink 
            to={{pathname: '/ser-un-aliado'}} 
            activeClassName={'selected'} 
            className={'nav__link'}
          >
          quiero ser un aliado
            <hr className={'nav__link--1'}/>
          </NavLink>
        </li>
        <li
          className={'nav__item'} 
          onClick={onCloseNav}
        >
          <NavLink 
            to={{pathname: '/equipo'}} 
            activeClassName={'selected'} 
            className={'nav__link'}
          >
          quiero conocer<br/>al equipo
            <hr className={'nav__link--2'}/>
          </NavLink>
        </li>
        <li
          className={'nav__item'} 
          onClick={onCloseNav}
        >
          <NavLink 
            to={{pathname: '/conocer-los-aliados'}} 
            activeClassName={'selected'} 
            className={'nav__link'}
          >
          quiero conocer a los aliados
            <hr className={'nav__link--3'}/>
          </NavLink>
        </li>
        <li
          className={'nav__item'} 
          onClick={onCloseNav}
        >
          <NavLink 
            to={{pathname: '/soy-curioso'}} 
            activeClassName={'selected'} 
            className={'nav__link'}
          >
          quiero curiosear
            <hr className={'nav__link--4'}/>
          </NavLink>
        </li>
        <li
          className={'nav__item'} 
          onClick={onCloseNav}
        >
          <NavLink 
            to={{pathname: '/small-talks-coolness-report'}} 
            activeClassName={'selected'} 
            className={'nav__link'}
          >
          small talks coolness report
            <hr className={'nav__link--4'}/>
          </NavLink>
        </li>
        <li
          className={'nav__item'} 
          onClick={onCloseNav}
        >
          <NavLink 
            to={{pathname: '/home'}} 
            activeClassName={'selected'} 
            className={'nav__link'}
          >
            <svg width="29" height="25" viewBox="0 0 29 25" fill="inherit" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.88235 13.5V24H12.2941V20H17.1961V24H21.1176V13.5H27L14.7451 1L9.84314 6V3.5H7.88235V8L2 13.5H7.88235Z" fill="inherit" stroke="inherit"/>
            </svg>
            <hr className={'nav__link--5'}/>
          </NavLink>
        </li>
      </ul>
      <Footer inverted />
    </nav>
  );
}

export default Navbar;
