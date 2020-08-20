import React from 'react';
import { motion } from 'framer-motion';

import classes from './../About.module.css'

const About_TechnicalSkills = ({ scrollCount }) => {
    return (
        <>
         { scrollCount >= 100 && 
            <motion.div
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1  }}
                transition={{  type: 'spring', stiffness: 40  }}
                className="p-5">

            <h2 className={ classes.about__technicalSkillsTitle }>Tools &amp; Technical SKills</h2>
            <p  className={ classes.about__technicalSkillsTxt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum soluta omnis ad repellat blanditiis facilis voluptatum repellendus exercitationem enim accusantium veniam nobis facere adipisci fugiat tenetur explicabo nulla delectus officia assumenda, quas quaerat? Nihil, cum. Quisquam ab voluptate voluptatem soluta similique ipsa illum ad odio harum. !</p>
             
             <div className={ classes.about__technicalSkillsBadges }>
                 <span class="badge badge-pill react-color p-2">
                     <i class="fab fa-react mr-2" aria-hidden="true"></i>React
                 </span>
                 <span class="badge badge-pill node-color m-2 p-2">
                     <i class="fab fa-node mr-2" aria-hidden="true"></i>Node
                 </span>
                 <span class="badge badge-pill graphql-color m-2 p-2">
                     <i class="fab fa-react mr-2" aria-hidden="true"></i>GraphQL
                 </span>
                 <span class="badge badge-pill css-color m-2 p-2">
                     <i class="fab fa-css3-alt mr-2" aria-hidden="true"></i>CSS 
                 </span>
                 <span class="badge badge-pill javascript-color  text-dark m-2 p-2">
                     <i class="fab fa-js-square mr-2 text-dark" aria-hidden="true"></i>Javascript
                 </span>
                 <span class="badge badge-pill html5-color m-2 p-2">
                     <i class="fab fa-html5 mr-2" aria-hidden="true"></i>HTML5
                 </span>
                 <span class="badge badge-pill photoshop-color m-2 p-2">
                     <i class="fab fa-adobe mr-2" aria-hidden="true"></i>Photoshop
                 </span>
                 <span class="badge badge-pill aftereffects-color m-2 p-2">
                     <i class="fab fa-adobe mr-2" aria-hidden="true"></i>After Effects
                 </span>
                 <span class="badge badge-pill illustrator-color m-2 p-2">
                     <i class="fab fa-adobe mr-2" aria-hidden="true"></i>Illustrator
                 </span>
             </div>
         </motion.div>
         }
        </>
    )
}

export default About_TechnicalSkills;