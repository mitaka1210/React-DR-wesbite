/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home/home';
import About from './About/About';
import Contact from './Contact/contact';
import style from './menu.module.scss';



class Menu extends React.Component{

  render(){

   
    return (
      <Router>
        <div>
          <header className={style.header}>
            <div className={style.container}>
              <div className={style.header__body}>
                <a href="#" className={style.header__logo}>
                  <img src="./img/avatar.jpg" alt="" />
                </a>
                <div className={style.header__burger}  >
                  <span></span>
                </div>
                <nav className={`${style.header__menu} ` } >
                  <ul className={style.header__list}>
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
                  </ul>
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
  
}

export default Menu;
