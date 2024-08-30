import React from 'react'
import {motion} from 'framer-motion'

export const AnimatedText = ({text}) => {
	const words = text.split(" ");
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
		<motion.div  initial= "hidden" whileInView= "visible" transition= {{staggerChildren: 0.1}}>
			{words.map ((word, index) => (
				<motion.span variants = {container} 
 
				 style = {{marginRight: "5px",
							display: "inline-block"}} key={index} >
					{word}
				</motion.span> 
				))}
		</motion.div>
	);
}