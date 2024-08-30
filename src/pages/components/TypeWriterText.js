import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './TypeWriterText.css';

export const Intro = () =>{
	const [typeEffect] = useTypewriter({
		words: ['an Agricultural Engineering Graduate' , 'a self taught Web Developer', 'a self taught Data Analyst'],
		loop: 0,
		typeSpeed: 100,
		deleteSpeed: 40,
		delaySpeed: 2000
	})
	return (
		<div className = "IntroP">
			<div> 
				<h3>is{" "}
					<span className="des">{typeEffect}</span>
					<span style = {{fontWeight: 'normal', color: 'black'}}><Cursor/></span>
			 	</h3> 
			  </div>
			
			
		</div>

	);
};
