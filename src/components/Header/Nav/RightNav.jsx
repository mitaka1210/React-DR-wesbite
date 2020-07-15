import React from 'react';
import styled from 'styled-components';
import style from '../Menu/menu.module.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../Menu/Home/home';
import About from '../Menu/About/About';
import Contact from '../Menu/Contact/contact';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 2;
  flex-flow: row nowrap;
  
  @media (max-width: 99999px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.6s ease-in-out;
    li {
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.6s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Router>
    <div>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.header__body}>
            <a href="#" className={style.header__logo}>
              <img src="./img/avatar.jpg" alt="" />
            </a>
           
            <nav className={style.header__menu}  >
              <Ul open={open} className={style.header__list}>
                <li>
                  <Link className={style.header__link} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={style.header__link} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className={style.header__link} to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  {/*<Link className={style.header__link} to="/about">About</Link>
                </li>
                <li>
                <Link className={style.header__link} to="/about">About</Link>*/}
                </li>
              </Ul>
            </nav>
          </div>
        </div>
      </header>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );

  
}

export default RightNav
