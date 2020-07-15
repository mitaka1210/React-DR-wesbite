import React from 'react'
import { Menu, Logo, Nav} from '../index';
import Home from './Menu/Home/home'
import About from './Menu/About/About'

import style from './header.module.scss'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
function header() {
    return (
    
        <div className={style.header__layout}>
                <Logo />
                <Nav />
                
        </div>
 
    )
}

export default header
