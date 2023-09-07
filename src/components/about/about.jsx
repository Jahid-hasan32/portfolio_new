import './about.css'
import Testimonial from '../../assets/testimonial2.png'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'
import { motion  } from 'framer-motion';


const aboutVariations = {
    initial : {
        opacity :0, 
    },
    open : {
        opacity : 1, 
        transition: {
            delay:.3,
            duration:5,
            type : 'spring', 
        }
    },

    txtAnimateInit : {
        opacity : 0, 
    },
    txtAnimateOpen : {
        opacity: 1, 
        transition: {
            delay:.8,
            duration:7,
            type : 'spring', 
            stiffness : 400,
        }
    }
}

export const About = () => {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <section id="about" >
            <div className="round_about"></div>
        <div className="about_txt">
        <h1>About Me</h1>
                <p>My <span className='text_ch'>short Story</span> </p>
        </div>

        <div className="container about_container">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="counter">
                <div className="project">
                    <h2>Project</h2>
                    {
                        counterOn &&
                        <h1> <CountUp start={0} end={12 } delay={0} duration={5}/> +</h1>
                    }
                </div>

                <div className="experience">
                    <h2>Experience</h2>
                    {
                        counterOn &&
                        <h1> <CountUp start={0} end={1 } delay={0} duration={4}/> Years +</h1>
                    }    </div>

                <div className="clients">
                    <h2>Clients</h2>
                    {
                        counterOn &&
                        <h1> <CountUp start={0} end={10 } delay={0} duration={4}/> +</h1>
                    }  
                    </div>
            </div>

            </ScrollTrigger>

                    {/* img section */}
            <motion.div 
            variants={aboutVariations}
            initial = "initial"
            whileInView= 'open'
            
            className="about_img">
                <img src={Testimonial} alt="" />
            </motion.div>

                    {/* about text section */}
            <motion.div
            variants={aboutVariations}
            initial = "txtAnimateInit"
            whileInView= "txtAnimateOpen"       

            className="about_content">
                <h4>Thank you for your intersteting about me!</h4>
                <p><span>HI,</span> i am <span className='text_ch'>Zubayer Hasan</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam dolorem ex explicabo odio et asperiores? Repellat soluta quasi reprehenderit optio, fuga, aspernatur porro dolorum illo aliquam reiciendis animi delectus praesentium explicabo sunt sapiente deserunt aperiam saepe nihil placeat accusantium. Quia minus error alias consequuntur veniam maiores laudantium animi praesentium numquam.</p>
            </motion.div>
        </div>
    </section>
    )
}