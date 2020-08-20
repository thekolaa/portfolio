import React from 'react';
import classes from './Home.module.css';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const homeVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 5
            }
    }
}
const h2Variant = {
    hidden: { 
        x: -200 
    },
    visible: {
        x: 1,
            transition: {
                delay: 0.3,
                type: 'spring',
                stiffness: 50,
            }
    }
}
const h1Variant = {
    hidden: { 
        x: 200,
        opacity: 0,
    },
    visible: {
        x: 1,
        opacity: 1,
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 40
            }
    }
}
const h4Variant = {
    hidden: { 
        opacity: 0
    },
    visible: {
        opacity: 1,
        opacity: 1,
            transition: {
                delay: 0.9,
                type: 'spring',
                stiffness: 40
            }
    }
}
const homeDividerVariant = {
    hidden: { 
        opacity: 0,
        scaleX: 0
    },
    visible: {
        opacity: 1,
        scaleX:1,
            transition: {
                delay: 1,
                type: 'spring',
                stiffness: 10
            }
    }
}
const homeBtn1 = {
    hidden: { 
        opacity: 0
    },
    visible: {
        opacity: 1,
            transition: {
                delay: 1,
                type: 'spring',
                stiffness: 10
            }
    }
}
const homeBtn2 = {
    hidden: { 
        opacity: 0,
    },
    visible: {
        opacity: 1,
            transition: {
                delay: 1.5,
                type: 'spring',
                stiffness: 10
            }
    }
}
function Home() {
    return (
        <>
            <motion.div
                className={ classes.homeWrapper }
                variants={homeVariant}
                initial="hidden"      
                animate="visible">

                <motion.h2
                    variants= { h2Variant }
                    initial="hidden"
                    animate="visible" > Hola! I'm</motion.h2>

                <motion.h1
                    variants= { h1Variant }
                    initial="hidden"
                    animate="visible"
                    className="display-2">Nikolai Madridano</motion.h1>

                <motion.h4
                    variants= { h4Variant }
                    initial="hidden"
                    animate="visible">
                    Fullstack web developer & Design Planner</motion.h4>

               <motion.div
                    variants= { homeDividerVariant }
                    initial="hidden"
                    animate="visible"
                    className={classes.dividerSmWrapper}>

                    <div className="d-flex align-items-center justify-content-center">
                        <div className={ classes.dividerSm }></div>
                        <div> <i className="fas fa-code"></i> </div>
                        <div className={ classes.dividerSm }></div>
                    </div>
               </motion.div>

                <div className={ `${classes.btnWrapper} mt-3`}>
                    <Link to="/about">
                        <motion.button
                            variants={ homeBtn1 }
                            initial="hidden"
                            animate="visible"
                            className="btn btn-dark rounded-pill">about
                            <i className="fas fa-user ml-2"></i>
                        </motion.button>
                    </Link>
                    <Link to="/contact">
                        <motion.button
                            variants={ homeBtn2 } 
                            className="btn btn-outline-dark rounded-pill">contact
                            <i className="fas fa-phone ml-2"></i>
                        </motion.button>
                    </Link>
                </div>

            </motion.div>
        </>
    )
}

export default Home
