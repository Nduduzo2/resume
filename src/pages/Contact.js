import React from 'react'
import './Contact.css';
import {ContactMe} from './components/EmailMe.js'
import { motion } from 'framer-motion'
import { FaPhoneVolume } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { IconContext } from "react-icons";


export const Contact = () =>{


	return (
		<div className='Contacts'>
			<div className = "contact" id="Contact">
				<motion.header
				initial = {{opacity:0,y:-10 }}
				whileInView = {{opacity:1,y:1 }}
				transition = {{duration:1, delay:1}}
				viewport={{
					once:false,
				}}>
				<h2>Contact Me</h2>
				</motion.header>
				<div><h3>Write an Email to me by filling out your name, Email address and the message.</h3></div>
				<ContactMe />
				
			</div>



			
		</div>

	);
};	
