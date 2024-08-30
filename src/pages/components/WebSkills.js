import React from 'react'
import './WebSkills.css';
import {motion} from 'framer-motion'

const skillsAnimation = {
	initial: {
		opacity:0,
		y: 100
	},
	animate:{
		opacity:1,
		y:0,
		transition: {staggerChildren: 0.3}

	},
};

const item = {
	initial: {
		opacity:0,
		y: 100
	},
	animate:{
		opacity:1,
		y:0,

	},
};
export const WebSkills = () =>{
	
	
	return (
		<div>
			<motion.ul className = "webskills"
			variants={skillsAnimation}
			initial="initial"
			whileInView="animate"
			viewport={{
				once:true,
			}}
			>
				<motion.li variants={item} className = "html">Html</motion.li> <br />
				<motion.li variants={item}className = "javascript">Javascript</motion.li> <br />
				<motion.li variants={item}className = "css">Css</motion.li> <br />
				<motion.li variants={item}className = "react">React</motion.li> <br />
				<motion.li variants={item}className = "framer">Framer Motion</motion.li> <br />
				<motion.li variants={item}className = "bootstrap">Bootstrap</motion.li> <br />
				<motion.li variants={item}className = "git">Git</motion.li> <br />
				<motion.li variants={item}className = "figma">Figma</motion.li> 

			</motion.ul>
		</div>
	)
};