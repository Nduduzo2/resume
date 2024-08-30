import React from 'react'
import './Skills.css';
import {WdIcon} from './components/WebDevsvg.js'
import {DataIcon} from './components/DataIcon.js'
import { motion } from 'framer-motion'
import {WebSkills} from './components/WebSkills.js'
import {DataSkills} from './components/DataSkills.js'


export const Skills = () =>{


	return (
		<div className = "skills" id="Skills">
			<div className='webDev'>
				<WdIcon />
				<motion.header
					className='WebHeader'
					initial = {{opacity:0,y:-5 }}
					whileInView = {{opacity:1,y:1 }}
					transition = {{duration:1}}
					viewport={{
						once:false,
					}}>
					<h2>Web Dev Skills</h2>
				</motion.header>
				<div className='wdList'>
					<WebSkills />

				</div>
			</div>


			<div className='Data'>
				<DataIcon/>
				<motion.div 
					className='dataHeader'
					initial = {{opacity:0,y:-5 }}
					whileInView = {{opacity:1,y:1 }}
					transition = {{duration:1}}
					viewport={{
						once:false,
					}}>
					<h2>Data Analytics Skills</h2>
				</motion.div>
				<div className='daList'>
					<DataSkills />
				</div>
			</div>
		</div>

	);
};	