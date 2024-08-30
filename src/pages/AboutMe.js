import React from 'react'
import './AboutMe.css';
import "react-slideshow-image/dist/styles.css";
import { Fade} from 'react-slideshow-image'
import { motion } from 'framer-motion'
import {AnimatedText} from './components/animatedWords.js';
import {ProfileI} from './components/Icons.js'

export const About = () =>{


	return (
		<div className = "about" id='About'>
			<div className='Box1'>
				<div className='images'>
						<Fade arrows={false}
						pauseOnHover={true}
						transitionDuration={1000}
						duration={4000}
						infinite={true}
						>
						<img  alt = "" src="Mlaba.jpg"  /*style ={{ marginTop : "10px", height:"350px", width: "auto"}}*/  />
						<img alt = "" src="Mlaba2.jpg"   /*style={{ marginTop : "10px", height:"350px", width: "auto"}}*/   />
						<img alt = "" src="Mlaba3.jpeg"   /*style={{ marginTop : "10px", height:"350px", width: "auto"}}*/   />
						<img alt = "" src="Mlaba4.jpeg"   /*style={{ marginTop : "10px", height:"350px", width: "auto"}}*/   />
						<img alt = "" src="Mlaba5.jpeg"   /*style={{ marginTop : "10px", height:"350px", width: "auto"}}*/   />
					</Fade>
				</div>
				<div> <h3><AnimatedText text='"Jack of all trades, master of none, Though oftentimes better than a master of one"'/></h3></div>

			</div>
			<div className='Profile'>
				<div className = "ProfileI">
				<ProfileI />
				</div>
				<motion.header className='header'
				
					initial = {{opacity:0,y:-10 }}
					whileInView = {{opacity:1,y:1 }}
					transition = {{duration:1, delay:1}}
					viewport={{
						once:false,
					}}>
				<h2>Profile</h2>
				</motion.header>
				<motion.div className= "pText"
				initial = {{opacity:0,y:-10 }}
					whileInView = {{opacity:1,y:1 }}
					transition = {{duration:1, delay:2}}
					viewport={{
						once:true,
					}}>

					<h3>I am a firm believer that continual learning is the key to being a great 
					engineer and problem solver. For this reason, after graduating from UKZN 
					with a degree in agricultural engineering, I enrolled in online courses to 
					broaden my skill set. Learning anything from website development to 
					Arduino programming to data analysis.
					I am proficient in using applications like AutoCad, SolidWorks, Prokon, 
					Outlook, Excel, and Python. I bring, among other things, experience in 
					scientific writing, problem solving and machine design.</h3>
				</motion.div> 
			</div>
		</div>

	);
};	