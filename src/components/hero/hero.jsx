import './hero.css'
import {FaLinkedin,FaFacebook, FaGithub, FaTwitter} from 'react-icons/fa'
import Profile_img from '../../assets/profile-img.png'
import ShapeOne from '../../assets/shape-1.png'
import ShapeTwo from '../../assets/shape-2.png'
import CV from '../../assets/JAHID CV.pdf'
import { motion } from 'framer-motion';


export const Hero = () => {

    return(
        <section id='home'  >
            <div className="hero_main_content">
            <motion.nav
            initial = {{y:-200}}
            animate = {{y:0}}
            transition={{duration:2, delay:0.3, type:'spring', stiffness:400}}
            >
                <motion.div
                initial = {{opacity : 0}}
                animate = {{opacity:1}}
                transition={{delay:0.9, duration:3, type:'spring', stiffness: 200}}
                className="logo" >JAHID</motion.div>
                <motion.div
                initial = {{opacity : 0}}
                animate = {{opacity:1}}
                transition={{delay:1.2, duration:4}}
                className="nav_content">
                    <button className='btn'><a href="#contact">Contact Me</a></button>
                </motion.div> 
            </motion.nav>
            <div className='hero__container'>
                <div className="round"></div>
                <div className="container hero_content">
                <motion.div 
                initial={{x:-100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay:1, type:'spring', stiffness:200}}
                className="left">
                    <div className="home_txt">
                        <p className='smt'>hello, <span className='text_ch'>my name is</span></p>
                        <h1><span>JAHIDUL</span> HASAN</h1>
                        <p>i am <span className='text_ch' style={{fontSize:'24px'}}>fullstack web developer</span></p>

                        <p className='home_desc'>A highly motivated and
                                skilled Full Stack Web
                                Developer with a passion
                                for creating efficient and
                                user-friendly web
                                applications. 
                                Proficient in
                                HTML, CSS, JavaScript,
                                React.js, Python, and
                                Django, seeking
                                challenging opportunities
                                to contribute my technical
                                expertise and creativity to
                                innovative projects.

                            </p>
                    </div>

                    <div className="social_links">
                        <a href="https://www.linkedin.com/in/jahid-hasan-2a69b3286/"><FaLinkedin className='social_icon'/></a>
                        <a href="#"><FaFacebook className='social_icon'/></a>
                        <a href="https://github.com/Jahid-hasan32"><FaGithub className='social_icon'/></a>
                        <a href="https://twitter.com/jahidactive32"><FaTwitter className='social_icon'/></a>
                    </div>
                    
                    <div className="home_link">
                        <a href={CV} className='btn btn_home' download>Download CV</a>
                        <small>My Skills</small>
                    </div>
                </motion.div>

                <motion.div 
                initial={{x:100, opacity:0}}
                animate ={{opacity:1, x:0}}
                transition={{delay:1.8, type:'spring', stiffness:200}}
                
                className="right">
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1,}}
                    transition={{delay:2.5, duration:1}}

                    className="highlight">
                        <span>1+ Year</span> Experience
                    </motion.div>

                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1,}}
                    transition={{delay:3, duration:1}}
                    className="highlight highlighttwo">
                        More than <span>20+</span> Project
                    </motion.div>

                    <div className="profile_img">
                        <img src={Profile_img} alt="Profile img" />
                        <div className="img_banner"></div>
                        <img className='shape shapeone' src={ShapeOne} alt="" />
                        <img className='shape shapetwo' src={ShapeTwo} alt="" />
                        <img className='shape shapetwo shapethree' src={ShapeTwo} alt="" />
                    
                    </div>
                </motion.div>
                </div>
            </div>
            </div>
        </section>
    )
}