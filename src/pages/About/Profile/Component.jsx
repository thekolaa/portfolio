import React from 'react';
import { motion } from 'framer-motion';

import classes from './../About.module.css'
const profileVariant = {
    hidden: {
        x: '0',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 10
            }
    }
}
const profileContent = {
    hidden: {
        x: '-100vh',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
const profileTitle = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
const About__Profile = () => {

    return (
        <>
            <motion.div
                className="container__90vh"
                variants={ profileVariant }
                initial="hidden"
                animate="visible">

                <motion.div
                    className="mb-3"
                    variants={ profileTitle }
                    initial="hidden"          
                    animate="visible"
                    transition={{
                        type: 'spring',
                        stiffness: 40
                    }}>
                    <h1 className={ classes.about__name }>Hi I'm Nikolai Madridano!</h1>
                </motion.div>

                <div className={ classes.about__txt }>
                    <motion.div
                        className="mb-2"
                        variants={profileContent}
                        initial="hidden"          
                        animate="visible"
                        transition={{
                            type: 'spring',
                            stiffness: 30,
                            delay: 0.3
                        }}>
                          My passion is to work with extemely willing people and collaborate to create web-applications &amp; business idea that would make and immediate Impact.
                    </motion.div> 

                    <motion.div
                        className="mb-3"
                        variants={profileContent}
                        initial="hidden"          
                        animate="visible"
                        transition={{
                            type: 'spring',
                            stiffness: 30,
                            delay: 0.6
                        }}>
                        I enjoy manipulating data and plan things up for any immediate problems or projects I want to pursue. For example, I've spotted a profitable growing small business; I immidately build a plan and gather information on how to make their business grow using web-applications. 
                    </motion.div>

                    <motion.div
                        className="mb-3"
                        variants={profileContent}
                        initial="hidden"          
                        animate="visible"
                        transition={{
                            type: 'spring',
                            stiffness: 30,
                            delay: 0.9
                        }}>
                         Most of my personal projects always come from a problem I want to solve. I love breaking problems into smaller pieces and work my way up using and learning necessary tools to complete it.
                    </motion.div>

                    <motion.div
                        className="mb-3"
                        variants={profileContent}
                        initial="hidden"          
                        animate="visible"
                        transition={{
                            type: 'spring',
                            stiffness: 30,
                            delay: 1.2
                        }}>
                        I have also learned about <b>Frameworks</b>, <b>HTTP requests</b>,<b> Web &amp; UI Designing</b>. The best thing I have is my work ethics and how I enjoy every problem that needs to be solved.
                    </motion.div>

                    <motion.div 
                        className="mb-3"
                        variants={profileContent}
                        initial="hidden"          
                        animate="visible"
                        transition={{
                            type: 'spring',
                            stiffness: 30,
                            delay: 1.6
                        }}>
                        Providing solution is something I am passionate about which reflects my decision to work with you
                    </motion.div>


                </div>

            </motion.div>
        </>
    )
}
export default About__Profile;