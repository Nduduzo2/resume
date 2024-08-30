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


export const DataIcon = () =>{


	return (
		
			<div className = "dataIcon">
				<motion.svg width="300" height="120" viewBox="-70 65 700 100" style={{backgroundColor:'transparent'}} fill="none" xmlns="http://www.w3.org/2000/svg"
				variants= {svgVariants}
		        initial = "hidden"
		        whileInView = "visible"
				>
				
				<motion.path variants= {svgVariants} d="M100 198H368" stroke="#0A1237" strokeWidth="3"/>
				<motion.path variants= {svgVariants} d="M102 196V46" stroke="#0A1237" strokeWidth="3"/>
				<motion.path variants= {svgVariants} d="M142 196V126H186V196" stroke="#0A1237" strokeWidth="3"/>
				<motion.path variants= {svgVariants} d="M226 198V150M270 150V198" stroke="#0A1237" strokeWidth="3"/>
				<motion.path variants= {svgVariants} d="M310 196V86H354V196" stroke="#0A1237" strokeWidth="3"/>
				<motion.path variants= {svgVariants} d="M158 104L224 72L252 104" stroke="#0A1237" strokeWidth="3"/>
				<motion.path variants= {svgVariants} d="M351.447 46.3947C351.665 45.5954 351.194 44.7708 350.395 44.5528L337.37 41.0008C336.571 40.7828 335.747 41.254 335.529 42.0532C335.311 42.8525 335.782 43.6771 336.581 43.8951L348.158 47.0525L345.001 58.6296C344.783 59.4289 345.254 60.2535 346.053 60.4715C346.852 60.6894 347.677 60.2182 347.895 59.419L351.447 46.3947ZM252.744 103.302L350.744 47.3024L349.256 44.6976L251.256 100.698L252.744 103.302Z" fill="#0A1237"/>
				<motion.path variants= {svgVariants} d="M270.5 151H227" stroke="#0A1237" strokeWidth="3"/>
				<motion.circle variants= {svgVariants} cx="425.5" cy="103.5" r="55" stroke="#0A1237" strokeWidth="5"/>
				<motion.circle variants= {svgVariants} cx="425.5" cy="103.5" r="46.5" stroke="#0A1237" strokeWidth="2"/>
				<motion.path variants= {svgVariants} d="M436 159.5L444 181.5" stroke="#0A1237" strokeWidth="3"/>
				<motion.path variants= {svgVariants} d="M446.5 156.5L453 177" stroke="#0A1237" strokeWidth="3"/>
				<motion.path variants= {svgVariants} d="M443.68 181.693L452.678 177.801C455.481 176.589 458.707 178.151 459.494 181.102L468.821 216.077C469.488 218.58 468.133 221.179 465.698 222.064L458.362 224.732C455.704 225.699 452.774 224.27 451.899 221.581L440.91 187.83C440.111 185.376 441.311 182.717 443.68 181.693Z" stroke="#0A1237" stroke-width="3"/>
				</motion.svg>


				
			</div>
				

	);
};	


