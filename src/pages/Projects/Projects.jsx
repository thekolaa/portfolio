import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Projects.module.css';

import { motion } from 'framer-motion';
import projectImg from './../../common/img/svg/undraw_code_review_l1q9.svg';
import underConstructionImg from './../../common/img/svg/undraw_not_found_60pq.svg';

function Projects() {
    return (
        <>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{  opacity: 1 }}
                transition={{ type: 'spring', stiffness: 10 }}
                className="container">
           
                <div className={ classes.content }>
                <div className="d-flex 
                    justify-content-center 
                    align-self-center align-items-center mt-5">
                    <img 
                        src={underConstructionImg} 
                        className="img-fluid" 
                        alt="projectImg" 
                        style={{height: "500px"}}/>
                </div>

                    {/* <div className="row">
                        <div className="col-lg-6">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, qui temporibus at recusandae eos iure laboriosam omnis earum saepe velit, nisi quas corporis, eligendi reprehenderit molestias id quibusdam quos natus. Porro incidunt nobis nemo non dolorem. Laudantium pariatur dolorem vitae velit, quisquam dignissimos perspiciatis quasi inventore aliquam omnis nam perferendis est praesentium! Odio quae modi architecto aliquam saepe voluptas pariatur officiis! Architecto ratione natus placeat facilis mollitia repellendus sint eos cum aliquam, vero eaque consequuntur accusamus quos, ab unde itaque hic sunt! Aperiam voluptate sint consequatur fuga? Veritatis nihil recusandae minima amet, iste blanditiis eaque tempora quaerat a dicta, omnis deserunt est consequuntur! Sed fugit ipsum, a omnis temporibus at et aspernatur cumque illo unde sapiente voluptate, cum enim tenetur totam itaque iure dolorum harum. Aliquid laborum aperiam quo repellendus, cum, modi voluptatibus nihil dolores dignissimos odio ut sit itaque quae sint, asperiores quasi a! Dolorum maxime corporis atque qui dolores repellat officiis est hic minus doloremque ex, voluptas illo deserunt a rem quos et amet iste modi! Accusantium rem fugiat nihil illo, deserunt voluptatum porro laborum excepturi facilis aperiam non, ad tenetur sint mollitia sequi, natus minima a minus? Saepe natus delectus voluptatibus cupiditate, incidunt dolorum laborum ea doloremque?
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <img src={projectImg} className="img-fluid" alt="projectImg" />
                            </div>
                        </div> 

                    </div>*/} 
                </div>
        </motion.div>
    </>
    )
}

export default Projects
