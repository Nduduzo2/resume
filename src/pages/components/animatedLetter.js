import React from 'react'
import {motion} from 'framer-motion'

export const AnimatedTextC = ({text}) => {
	const Letter = Array.from(text);
	//console.log(words);

		const container = {
		hidden: {opacity:0,
			y: 20
			},
		visible: {
			opacity:1,
			y: 0
			},
			
		}; 


	return (
		<motion.div  initial= "hidden" animate= "visible" transition= {{staggerChildren: 0.15}}>
			{Letter.map ((letters, index) => (
				<motion.span variants = {container} 
 
				 style = {{display: "inline-block"}} 
				 key={index} >
					{letters ===" "? "\xa0" :letters}
				</motion.span> 
				))}
		</motion.div>
	);
};