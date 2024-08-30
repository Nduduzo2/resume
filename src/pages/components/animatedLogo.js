import React from 'react'
import {motion} from 'framer-motion';

const svgVariants = {
  hidden: {
    opacity:0,
    pathLength:0
  },
  visible: {
    opacity: 1,
    pathLength:1,
    transition: {duration: 3,
    ease: "easeInOut", delay: 1
  },
  
}
}

export const AnimatedIcon = () =>{
	return (
		
	<motion.svg
	  variants= {svgVariants}
        initial = "hidden"
        animate = "visible"
	 width="110" height="139" viewBox="0 0 108 139" fill="none" xmlns="http://www.w3.org/2000/svg">
		<motion.path
		variants= {svgVariants}
		 d="M1 80V29H18V89H36V50L67 89V110H31C14.4315 110 1 96.5685 1 80Z" fill="#6F4E37"/>
		<motion.path
		variants= {svgVariants}
		 d="M1 80V29H18V89H36V50L67 89V110H31C14.4315 110 1 96.5685 1 80Z" fill="#6F4E37" fillOpacity="0.2"/>
		<motion.path
			variants= {svgVariants}
		 d="M1 80V29H18V89H36V50L67 89V110H31C14.4315 110 1 96.5685 1 80Z" stroke="#6F4E37"/>
		<motion.path
		variants= {svgVariants}
		 d="M69 68L37 29V1H77C93.5685 1 107 14.4315 107 31V90H87V29H69V68Z" fill="#0A1237" stroke="#0A1237"/>
		<motion.path
		variants= {svgVariants} 
		d="M48.1804 124.455V139H45.5241L39.196 129.845H39.0895V139H36.0142V124.455H38.7131L44.9915 133.602H45.1193V124.455H48.1804ZM55.3501 124.455H59.1428L63.1484 134.227H63.3189L67.3246 124.455H71.1172V139H68.1342V129.533H68.0135L64.2493 138.929H62.218L58.4538 129.497H58.3331V139H55.3501V124.455Z" fill="#6F4E37"/>
</motion.svg>

			
		
	);
};

