import React from 'react'
import './navbar-login.scss'
import { Link } from 'react-router-dom'

import navLogo from '../../assets/logo.png'

class NavbarLogin extends React.Component{
    render(){
        return(
            <div className="navbar-login">
                <div className="wrapper">
                    <Link to ="/"><img src={navLogo} alt="" /></Link>
                </div>
            </div>
        )
    }
}

export default NavbarLogin