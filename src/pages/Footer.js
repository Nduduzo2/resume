import React from 'react'
import './Footer.css'
import { FaPhoneVolume } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { IconContext } from "react-icons";


export const Footer = () =>{


	return (

			<div className="footer">

				<div className='fLogo'>
				<svg width="80" height="139" viewBox="0 0 108 139" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 80V29H18V89H36V50L67 89V110H31C14.4315 110 1 96.5685 1 80Z" fill="#E0E7E9"/>
					<path d="M1 80V29H18V89H36V50L67 89V110H31C14.4315 110 1 96.5685 1 80Z" fill="#E0E7E9" fillOpacity="0.2"/>
					<path d="M1 80V29H18V89H36V50L67 89V110H31C14.4315 110 1 96.5685 1 80Z" stroke="#E0E7E9"/>
					<path d="M69 68L37 29V1H77C93.5685 1 107 14.4315 107 31V90H87V29H69V68Z" fill="#E0E7E9" stroke="#E0E7E9"/>
					<path d="M48.1804 124.455V139H45.5241L39.196 129.845H39.0895V139H36.0142V124.455H38.7131L44.9915 133.602H45.1193V124.455H48.1804ZM55.3501 124.455H59.1428L63.1484 134.227H63.3189L67.3246 124.455H71.1172V139H68.1342V129.533H68.0135L64.2493 138.929H62.218L58.4538 129.497H58.3331V139H55.3501V124.455Z" fill="black"/>
				</svg>
				</div>
				<div className='contactDetails'>
				<IconContext.Provider value={{ color: 'red', size: '2em', className: '' }}>
						<div className= 'Cellphone' >
						<FaPhoneVolume />
						<div className="content">078 528 4461</div>
						</div>
					
						<div className='Whatsapp'>
						<FaWhatsapp />
						<div className="content">078 528 4461</div>
						</div>

						<div className='Email'>
						<TfiEmail />
						<div className="content">mlabanduduzo0@gmail.com</div>
						</div>

						<div className='Location'>
						<FaLocationDot />
						<div className="content">Durban, South Africa</div>
						</div>

				</IconContext.Provider>
				</div>

			</div>
		

	);
};	