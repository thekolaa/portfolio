import React, { useState, useEffect } from 'react'
import classes from './About.module.css';

import { motion } from 'framer-motion';
import aboutImg from './../../common/img/svg/undraw_happy_music_g6wc.svg';
import profileDetailsImg from './../../common/img/svg/undraw_profile_details_f8b7.svg';
import About_TechnicalSkills from './TechnicalSkills/Component';
import About__Profile from './Profile/Component';


const containerVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 40
            }
    },
    unmount: {
        x: '100vh',
            transition: {
                ease: 'easeInOut',
                stiffness: 200
            }
    }
}

const profileImgVariant = {
    hidden: {
        scale: 0,
        opacity: 0 
    },
    visible: {
        scale: 1,
        opacity:1
    }
}

const technicalSkillsImgVariant = {
    hidden: {
        scale: 0,
        opacity: 0 
    },
    visible: {
        scale: 1,
        opacity:1
    }
}

function About() {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", function (e) {
         setScroll(this.scrollY)
         return () => {
           window.removeEventListener("scroll")
         }
      });
      }, [scroll]);
    return (
        <>
        <div  className={ classes.content }>

        
            <motion.div 
                variants={ containerVariant }
                initial="hidden"
                animate="visible"
                exit="unmount"
                className="container">

                    <div className="row p-3">

                        {/* Profile content */}
                        <div className="col-lg-6">
                            <About__Profile />
                        </div>

                        {/* Profile content - image*/}
                        <div className="col-lg-6">

                            <div className= { classes.profileImg }>
                                <motion.img
                                    variants={ profileImgVariant }
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 10
                                    }} 
                                    src={aboutImg} className="img-fluid" alt="aboutImg" />
                            </div>
                        </div>

                    </div>

            

                    <div className="row__2">
                        <div className="row">
                            {/* TechnicalSkills content - image */}
                            <div className="col-lg-6">
                                { scroll >= 100 &&
                                    <div className= { classes.skillsImg } >
                                        <motion.img
                                            variants={ technicalSkillsImgVariant }
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                type: 'spring',
                                                stiffness: 10
                                            }}
                                            src={ profileDetailsImg } className="img-fluid" alt="aboutImg" />
                                    </div>
                                }
                            </div>

                            {/* TechnicalSkills content */}
                            <div className="col-lg-6">
                                <About_TechnicalSkills scrollCount={scroll}/>
                            </div>
                        </div>
                    </div>
            
            </motion.div>
        
        </div>
        </>
    )
}

export default About
