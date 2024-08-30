import React from 'react'
import './Navbar.css'
import {useState, useRef} from 'react'
/*import {NavHashLink} from 'react-router-hash-link'*/
import {Link} from 'react-scroll'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'


export const Navbar = () =>{
	const [menuOpen, setMenuOpen] = useState(false)
	const [isHidden,setIsHidden] = useState(false);
	const { scrollY} =useScroll();
	const lastYRef = useRef (0);

	useMotionValueEvent(scrollY, 'change', (y) =>{
		const difference = y - lastYRef.current;
		if (Math.abs(difference) >50) {
			setIsHidden(difference>0);
			/*if (y > 300) {
				setIsHidden(true);
			} else {
				setIsHidden(false);
			}*/

			lastYRef.current = y;
		}
	});


	return (
		
		<motion.nav 
		animate= {isHidden? "hidden" : "visible"}
		whileHover= "visible"
		onFocusCapture={() => setIsHidden(false)}
		variants={{
			hidden: {y:"-80%",},
			visible: {y:"0%"},
		}}>
		<Link to="Home" spy={true} offset ={-40} smooth={true} duration={600}  className="logo">Mlaba</Link>
		<div className= "menu" 
		onClick= {() =>{
		setMenuOpen(!menuOpen);

		}}>
			<span></span>
			<span></span>
			<span></span>
		</div>
			<ul className={menuOpen? "open" : ""}>
				<Link to= 'About' spy={true} offset ={-10} smooth={true} duration={600} activeClass="active" className="navLink"> About</Link>
				<Link to= "Skills" spy={true} offset ={-20} smooth={true} duration={600} className="navLink"> Skills </Link>
				<Link to ="Exp" spy={true} offset ={-25} smooth={true} duration={600} className="navLink"> Experience </Link>
				<Link to ="Contact" spy={true} offset ={-10} smooth={true} duration={600} className="navLink"> Contact </Link>
				

			</ul>
		</motion.nav>
		
	);
};	