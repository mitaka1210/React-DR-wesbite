import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home/home';
import About from './About/About';
import Contact from './Contact/contact';
import style from './menu.module.scss';

function menu() {
    return (
        <Router>
      <div>
        <nav className = {style.nav}>
          <ul className = {style.ul}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </nav>

     
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
    )
}

export default menu
