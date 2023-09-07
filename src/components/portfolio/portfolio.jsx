import './portfolio.css'
import Portfolio_6 from '../../assets/1.png'
import Portfolio_1 from '../../assets/2.png'
import Portfolio_2 from '../../assets/3.png'
import Portfolio_3 from '../../assets/4.png'
import Portfolio_4 from '../../assets/5.png'
import Portfolio_5 from '../../assets/6.png'
import { useState } from 'react'
import { motion } from 'framer-motion';

const variants = {
    initial : {
        opacity : 0,
        y : -100
    },
    open : {
        opacity : 1, 
        y : 0,
        transition: {
            delay : .6,
            duration : 1.4,
            type : 'spring',
            stiffness : 200,
        }
    }
}

export const Portfolio = () => {

    const [tabs, setTab] = useState(1)

    function toggleChange1(id) {
        setTab(id)
    }

    return (
        <section  id="portfolio">
            <div className="round-skills-portfolio"></div>

            <div className="portfolio_txt">
                <h1 className=''>Portfolio</h1>
                <p>My <span className='text_ch'>Recent Works</span></p>
            </div>

                        {/* Tabs -> design start */}
        <div className="portfolio_tabs">
            <ul>
                <li onClick={() => toggleChange1(1)}>All</li>
                <li onClick={() => toggleChange1(2)}>Designed</li>
                <li onClick={() => toggleChange1(3)}>Developed</li>
                <li onClick={() => toggleChange1(4)}>Fullstack</li>
            </ul>
        </div>

                        {/* Tabs -> all */}
            <motion.div 
            
            variants={variants}
            initial = "initial"
            whileInView= "open"

            className={tabs === 1 ? "portfolio_card_conents_sow" :  "portfolio_card_conents_hide"}>

            <div className=" portfolio__container container">

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_1} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Excellent-Cofie</h5>
                            <p>i designed this awesome portfolio webstie using HTML, CSSS. this is an one page Portfolio. you can see this by clicking 'Live' button.</p>
                    </div>
                    <div className="card_link">
                        <a href="https://jahid-hasan32.github.io/Excellent-Cofie/" className='btn '>Live</a>
                        <a href="https://github.com/Jahid-hasan32/Excellent-Cofie" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_2} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Moonwatch</h5>
                            <p>i designed this awesome portfolio webstie using HTML, CSSS, and GSAP library animation. this is an one page Portfolio. you can see this by clicking 'Live' button.</p>
                    </div>
                    <div className="card_link">
                        <a href="https://jahid-hasan32.github.io/moonwatch/" className='btn '>Live</a>
                        <a href="https://github.com/Jahid-hasan32/moonwatch" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_3} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_4} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>amazing-design</h5>
                            <p>i designed this awesome portfolio webstie using HTML, CSSS, and GSAP library for awesome animation. this is an one page Portfolio. you can see this by clicking 'Live' button.</p>
                    </div>
                    <div className="card_link">
                        <a href="https://jahid-hasan32.github.io/amazing-design/" className='btn '>Live</a>
                        <a href="https://github.com/Jahid-hasan32/amazing-dea" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_5} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Portfolio</h5>
                            <p>i designed this awesome portfolio webstie using HTML, CSSS, and GSAP library for awesome animation. this is an one page Portfolio. you can see this by clicking 'Live' button.</p>
                    </div>
                    <div className="card_link">
                        <a href="https://jahid-22.github.io/update-portfolio/" className='btn '>Live</a>
                        <a href="https://github.com/jahid-22/update-portfolio" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_6} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>i designed this awesome portfolio webstie using HTML, CSSS, and GSAP library for awesome animation. this is an one page Portfolio. you can see this by clicking 'Live' button.</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn ' >Github</a>
                    </div>
            </div>

            </div>

            </motion.div>
                        {/* Tabs -> design */}
            <motion.div 
            
            variants={variants}
            initial = "initial"
            whileInView= "open"

            className={tabs === 2 ? "portfolio_card_conents_sow" :  "portfolio_card_conents_hide"}>

            <div className=" portfolio__container container">
            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_1} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_3} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_4} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_5} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_6} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>
            </div>
            </motion.div>
                                    {/* Tabs -> developed */}
            <motion.div 
            variants={variants}
            initial = "initial"
            whileInView= "open"
            className={tabs === 3 ? "portfolio_card_conents_sow" :  "portfolio_card_conents_hide"}>

            <div className=" portfolio__container container">
            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_1} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_4} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_5} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_6} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            </div>

            </motion.div>
                        {/* Tabs -> fullstack */}
            <motion.div 
             variants={variants}
             initial = "initial"
             whileInView= "open"
            className={tabs === 4 ? "portfolio_card_conents_sow" :  "portfolio_card_conents_hide"}>

            <div className=" portfolio__container container">
            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_1} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_3} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_4} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_5} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            <div className="portfolio_card">
                    <div className="card_img">
                        <img src={Portfolio_6} alt="" className="port_img" />
                    </div>
                    <div className="card_text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad omnis in necessitatibus veritatis obcaecati?</p>
                    </div>
                    <div className="card_link">
                        <a href="#" className='btn '>Live</a>
                        <a href="#" className='btn '>Github</a>
                    </div>
            </div>

            </div>

            </motion.div>

        </section>
    )
}