import React from 'react'
import {motion} from 'framer-motion';

const svgVariants = {
  hidden: {
    
    pathLength:0
  },
  visible: {
    
    pathLength:1,
    transition: {duration: 2,
    ease: "easeInOut"
  },
  
}
}


export const WdIcon = () =>{


	return (
		
			<div className = "webIcon">
				<motion.svg width="200" height="100" viewBox="10 -10 200 100" style={{backgroundColor:'tranparent'}} fill="none" xmlns="http://www.w3.org/2000/svg"
				variants= {svgVariants}
        initial = "hidden"
        whileInView = "visible"
				>
				
				<motion.path variants= {svgVariants} d="M92 41L57 56L92 74" stroke="#0A1237" strokeWidth="5"/>
				<motion.path variants= {svgVariants}  d="M136 74L171 59L136 41" stroke="#0A1237" strokeWidth="5"/>
				<motion.path variants= {svgVariants} d="M104 75L130 33" stroke="#0A1237" strokeWidth="5"/>
				</motion.svg>


				
			</div>
				

	);
};	



