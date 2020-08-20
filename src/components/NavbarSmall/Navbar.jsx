import React from 'react';
import Wrap from '../../hoc/Wrap';

import classes from './Navbar.module.css'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const list = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
const item = {
    hidden: {
        opacity: 0,
        y: '100vh',
        rotateZ: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateZ: 0
    }
}
const NavbarSmall = () => {
    return ( 
        <Wrap>
           <motion.div 
                variants={list}
                initial="hidden"
                animate="visible"
                transition={{
                    type: 'spring',
                    stiffness: 10,
                    delay: 3
                }}
                className = { classes.navSmWrapper } >

                <motion.ul 
                className="nav justify-content-around fixed-bottom  p-3">
                    <motion.li 
                        variants={item}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 3.1, 
                            type: 'spring',
                            stiffness: 80,
                            damping: 80
                        }}
                    className="nav-item">
                        <Link to="/" className="nav-link active">
                            <i className="fas fa-home"></i>
                        </Link>
                    </motion.li>

                    <motion.li
                        variants={item}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 3.3, 
                            type: 'spring',
                            stiffness: 80,
                            damping: 80                        
                        }}
                        className="nav-item">
                        <Link to="/contact" className="nav-link">
                            <i className="fas fa-phone"></i>
                        </Link>
                    </motion.li>

                    <motion.li
                        variants={item}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 3.6, 
                            type: 'spring',
                            stiffness: 80,
                            damping: 80                        
                        }}
                        className="nav-item">
                        <Link to="/projects" className="nav-link">
                            <i className="fas fa-code"></i>
                        </Link>
                    </motion.li>

                    <motion.li
                        variants={item}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 3.9, 
                            type: 'spring',
                            stiffness: 80,
                            damping: 80                        
                        }}
                        className="nav-item">
                        <Link to="/github" className="nav-link">
                            <i className="fab fa-github"></i>
                        </Link>
                    </motion.li>

                    <motion.li 
                        variants={item}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 4.2, 
                            type: 'spring',
                            stiffness: 80,
                            damping: 80                        
                        }}
                        className="nav-item">
                        <Link to="/about" className="nav-link">
                            <i className="fas fa-info-circle"></i>
                        </Link>
                    </motion.li>

                </motion.ul>
           </motion.div>
        </Wrap>
     );
}
 
export default NavbarSmall;