import React from 'react'
import './Home.css';
import {AnimatedIcon} from './components/animatedLogo.js';
import {AnimatedTextC} from './components/animatedLetter.js';
import {Intro} from './components/TypeWriterText.js';
import {Link} from 'react-scroll'
import { FiChevronDown } from "react-icons/fi";
import { IconContext } from "react-icons";
import { motion } from 'framer-motion'


export const Home = () =>{

const bounceTransition = {
	y: {
		duration:0.7,
		repeatType: "mirror",
  		repeat: Infinity,
		ease:'easeOut'
	},
};

	return (
		<IconContext.Provider value={{ color: '#964734', size: '3em', className: 'react-icons' }}>
		<div className = "home" id="Home">
			<div><AnimatedIcon/></div>
			<div className="up">
				<div className="upShape"></div>
			</div>
			<div className="animText"><h1> <AnimatedTextC text="NDUDUZO MLABA" /> </h1></div>
			<div className="down"><div className="downShape"></div></div>
			<div><Intro/></div>
			<Link to= "About" spy={true} offset ={10} smooth={true} duration={600}>
			<motion.div 
			transition={bounceTransition}
			animate={{
				y:["10%", "-10%"]
			}}>
				<FiChevronDown />
			</motion.div>
			</Link>

		</div>
		</IconContext.Provider>

	);
}	