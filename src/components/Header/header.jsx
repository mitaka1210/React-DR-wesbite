import React from 'react'
import { Menu, Logo} from '../index';
import Home from './Menu/Home/home'
import About from './Menu/About/About'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
function header() {
    return (
    
        <header>
                <Logo />
                <Menu />
        </header>
 
    )
}

export default header
