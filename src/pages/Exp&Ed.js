import React from 'react'
import './Exp&Ed.css';
import { motion } from 'framer-motion'
import {ExperienceI} from './components/Icons.js'
import {EducationI} from './components/Icons.js'
/*import {WebSkills} from './components/WebSkills.js'
import {DataSkills} from './components/DataSkills.js'*/


export const ExpEd = () =>{


	return (
		<div className = "ExpEdu" id="Exp">
			<div className='Experience'>
				<div className = 'ExpHeader'>

					<ExperienceI/>
					<motion.header
						className='Header'
						initial = {{opacity:0,y:-5 }}
						whileInView = {{opacity:1,y:1 }}
						transition = {{duration:1, delay:1}}
						viewport={{
							once:false,
						}}>
						<h2>Experience</h2>
					</motion.header>
				</div>
					<motion.div className='ExpList'
					initial = {{opacity:0,y:-5 }}
						whileInView = {{opacity:1,y:1 }}
						transition = {{duration:1, delay:2}}
						viewport={{
							once:true
						}}>

						<div className = "Clicks">
							<div className="Topic">Clicks <span>(Sep 2023 - Present)</span></div> <br/>
							<h3>Currently working as a shop assistant cashier at 
							Clicks in Durban, my duties include,</h3>
							<ul className="ClicksRes">
							<li>Working at the till </li>
							<li>Merchandising </li>
							
							</ul>
						</div>

						<div className = "Tutoring">
							<div className="Topic">Private Tutoring <span>(Mar 2023 - Sep 2023)</span> </div> <br/>
							<h3>Offered private tutoring for grade 12 Mathematics and physics and grade 11 physics. The tutoring resulted in 
							an average of 20% increases in average marks of learners. Services included, 
							Services included,</h3>
							<ul className="TutRes">
							<li>Extra classes </li>
							<li>Assistance with Homework </li>
							</ul>
						</div>

						<div className = "AgriKool ">
							<div className="Topic"> AgriKool <span>(Nov 2022 - Feb 2023)</span> </div><br/>
							<h3>Served as the assistant for an Operations Manager at AgriKool (Agrivalue chain startup).
							I carried out tasks that improved my administrative capacity and my proficiency in Excel.
							My responsibilities included,</h3>
							<ul className='AgRes'>
							<li>Record keeping and report writing using Excel and Microsoft Word</li>
							<li>Reviewing and providing support in agrivalue chain management </li>
							<li> Maintaining and creating new data collection systems </li>
							</ul>
						</div>
				</motion.div>
			</div>


			<div className='Education'>
				<div className = "EduHeader">
					<EducationI/>
					<motion.header 
						className='Header'
						initial = {{opacity:0,y:-5 }}
						whileInView = {{opacity:1,y:1 }}
						transition = {{duration:1, delay:1}}
						viewport={{
							once:false,
						}}>
						<h2>Formal Education</h2>
					</motion.header>
				</div>
				<motion.div className='education'
				initial = {{opacity:0,y:-5 }}
						whileInView = {{opacity:1,y:1 }}
						transition = {{duration:1, delay:2}}
						viewport={{
							once:true
						}}>
						
						<div className = "Degree">
						<div className ="ETopic"> 2022 </div>
						<div className="EdText"><h3>Honour`s degree in <span className="AgEng">Agricultural Engineering</span> from the University of Kwazulu Natal. <br />
						Core modules completed include, Agricultural Engineering Design, Power and traction of 
						Agricultural Machines, Introduction to computer science, Principles of Food Processing, Structural Analysis and Design, 
						Introduction to statistics, Food Engineering Unit Operation, Irrigation Engineering, Applied Hydrology. </h3> <br /></div>
						<div className="TSList"><h3>Technical skills obtained during degree</h3> <br /></div>
						<ul className="TSkills">
							<li> Scientific Writing</li>
							<li>  Machine Design</li>
							<li>  SolidWorks</li>
							<li>  AutoCad</li>
							<li>  ProKon</li>
							<li>  Acru</li>
							<li>  ArcGis Pro</li>
							<li>  Independent Research</li>

						</ul>
						<div className="SSList"><h3>Soft skills obtained during degree</h3> <br /></div>
						<ul className="sSkills">
							<li>  Problem Solving</li>
							<li> Public Speaking (PowerPoint)</li>
							<li> Effective Communication</li>
							<li>  Ability to Work Under Pressure</li>
							<li>Being Industrious</li>	
						</ul>
						</div>

						<div className="Matric">
							<div className ="ETopic"> 2018 </div>
							<h3>National Senior Certificate</h3>
						</div>

				</motion.div>
			</div>
		</div>

	);
};	