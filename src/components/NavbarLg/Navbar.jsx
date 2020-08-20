import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import classes from './Navbar.module.css'
import NavbarLoader from '../Extras/NavbarLoader';
const item = {
    hidden: { 
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
const NavbarLarge = () => {
    const location = useLocation();

    return ( 
        <>
            <div className={ classes.navLgWrapper }>
                <nav className="navbar navbar-expand-lg navbar-dark boxshadow-none">

                    <Link className="navbar-brand text-dark" style={{opacity: '0.8'}} to="/">
                        <motion.span
                            variants={item}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                     type: 'spring',
                                     stiffness: 10,
                                     delay: 0.1
                                }}>
                        { location.pathname === "/" 
                            ? <span className="text__bold text-uppercase">nikoola.com</span>
                            : <span className="text__muted"> <i className="fas fa-chevron-left"></i> Home</span>  }
                        </motion.span>
                        
                    </Link>
                        
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                        aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                       <i className="fas fa-bars text-dark"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                        
                        <ul className="navbar-nav ml-auto">
                            <motion.li 
                                variants={item}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    type: 'spring',
                                    stiffness: 10,
                                    delay: 0.1
                                }}
                                className="nav-item">
                                <Link 
                                    className="nav-link text-dark"
                                    style={{ opacity: '0.7'}}
                                    to="/about">
                                    About<i className="fas fa-user ml-2"  style={{opacity: '0.8'}}></i> 
                                </Link>
                            </motion.li>

                            <motion.li 
                                variants={item}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    type: 'spring',
                                    stiffness: 10,
                                    delay: 0.3
                                }}
                                className="nav-item">
                                <Link 
                                    className="nav-link text-dark"  
                                    style={{opacity: '0.7'}} 
                                    to="/contact">
                                    Contact<i className="fas fa-phone ml-2"  style={{opacity: '0.8'}}></i> 
                                </Link>
                            </motion.li>

                        
                            

                            <motion.li 
                                variants={item}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    type: 'spring',
                                    stiffness: 10,
                                    delay: 0.6
                                }}
                                className="nav-item">
                                <Link 
                                    className="nav-link text-dark"  
                                    style={{opacity: '0.7'}} 
                                    to="/projects">
                                    Project &amp; Uploads<i className="fas fa-code ml-2"  style={{opacity: '0.8'}}></i> 
                                </Link>
                            </motion.li>

                            <motion.li
                                variants={item}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    type: 'spring',
                                    stiffness: 30,
                                    delay: 0.9
                                }}
                                className="nav-item">
                                <Link 
                                    className="nav-link text-dark"  
                                    style={{opacity: '0.7'}} 
                                    to="/github">
                                    GitHub<i className="fab fa-github ml-2"  style={{opacity: '0.8'}}></i> 
                                </Link>
                            </motion.li>

                        </ul>

                    </div>
                </nav>
            </div>

           <NavbarLoader />

        </>
     );
}
 
export default NavbarLarge;