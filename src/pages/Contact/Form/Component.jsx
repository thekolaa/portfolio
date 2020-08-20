import React from 'react';
import { motion } from 'framer-motion';

import classes from './../Contact.module.css'

const containerVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 10
            }
    }
}
const contactForm = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
const Contact_form = () => {
    return ( 
        <>
           <motion.div
                variants={ containerVariant }
                initial="hidden"
                animate="visible">

                <div>
                    <motion.div
                        variants={ contactForm }
                        initial="hidden"
                        animate="visible" 
                        transition={{
                            type: 'spring',
                            stiffness: 20,
                            delay: 0.4
                        }}
                        class="md-form">
                        <input type="text" id="form1" class="form-control" />
                        <label for="form1">Email address</label>
                        <small id="form1" class="form-text text-muted">
                            Please enter a valid email and wait for my response as possible. Detected spam messages will be given an IP block and cannot access this portfolio anymore.
                        </small>
                    </motion.div>                  

                    <motion.div 
                        variants={ contactForm }
                        initial="hidden"
                        animate="visible" 
                        transition={{
                            type: 'spring',
                            stiffness: 20,
                            delay: 0.8
                        }}
                        class="md-form mb-4 pink-textarea active-pink-textarea">
                        <textarea 
                            id="form18" 
                            class="md-textarea form-control" 
                            rows="7" style={{resize: "none"}}
                            maxLength="255">
                        </textarea>
                            <label htmlFor="form18">Enter a message</label>
                    </motion.div>
                </div>

                <motion.div
                    className= { classes.contact__btn }
                    variants={ contactForm }
                    initial="hidden"
                    animate="visible" 
                    transition={{
                        type: 'spring',
                        stiffness: 20,
                        delay: 1
                    }}>
                    <button type="button" class="btn btn-primary">
                        Submit
                        <i className="far fa-paper-plane ml-2"></i>
                    </button>
                    <button type="button" class="btn btn-outline-primary">
                        email
                        <i className="fas fa-link ml-2"></i>
                    </button>
                </motion.div>

           </motion.div>
        </>
     );
}
 
export default Contact_form;