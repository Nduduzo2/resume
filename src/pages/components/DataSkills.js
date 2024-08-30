import React from 'react'
import './DataSkills.css';
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
export const DataSkills = () =>{
	
	
	return (
		<div>
			<motion.ul className = "dataskills"
			variants={skillsAnimation}
			initial="initial"
			whileInView="animate"
			viewport={{
				once:true,
			}}
			>
				<motion.li variants={item} className = "excel">Excel</motion.li> <br />
				<motion.li variants={item} className = "python">Python</motion.li> <br />
				<motion.li variants={item} className = "numpy">Numpy</motion.li> <br />
				<motion.li variants={item} className = "pandas">Pandas</motion.li> <br />
				<motion.li variants={item} className = "ml">Machine Learning Algorithms</motion.li> <br />
				<motion.li variants={item} className = "mysql">MySQL</motion.li> <br />
				<motion.li variants={item} className = "mat">Matplotlib</motion.li> <br />
				<motion.li variants={item} className = "jupyter">Jupyter Notebooks</motion.li> 

			</motion.ul>
		</div>
	)
};