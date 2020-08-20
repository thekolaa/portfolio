import React from 'react';
import { motion } from 'framer-motion';

const NavbarLoader = () => {
    return ( 
        <>
             <motion.div
                style={{marginTop: "-15px", opacity: 0.8}}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ type: 'spring', stiffness: 5 }}>
                <hr />
            </motion.div>
        </>
     );
}
 
export default NavbarLoader;