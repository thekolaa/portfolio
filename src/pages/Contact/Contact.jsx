import React from 'react'
import classes from './Contact.module.css';

import { motion } from 'framer-motion';

import contactImg from './../../common/img/svg/undraw_contact_us_15o2.svg';
import Contact_form from './Form/Component';

const containerVariant = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1
    }
}
const contactImgVariant = {
    hidden: {
        x: '-100vh',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
function Contact() {
    return (
        <>
        <div className="container container__100vh">
            <motion.div 
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                transition={{
                    type: 'spring',
                    stiffness: 50
                }}>
  
               <div className={ classes.content }>
                    <div className="row">

                        {/* Contact content - image*/}
                        <div className="col">
                            <div className={ classes.contact__imgWrapper }>
                                <motion.img 
                                    variants={ contactImgVariant }
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 10
                                    }}      
                                src={contactImg} className="img-fluid" alt="aboutImg" />
                            </div>
                        </div>

                        <div className="col-md-1"></div>

                        {/* Contact content*/}
                        <div className="col-md-5 p-5">
                            <h4 className={ classes.contact__title}>Send message</h4>
                            <Contact_form />       
                        </div>
                        
                      
                    </div>
               </div>

            </motion.div>
        </div>
        </>
    )
}

export default Contact
