import ShapeOne from '../../assets/shape-2.png'
import axios from 'axios';
import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './skills.css'
// import required modules
import { Pagination } from 'swiper/modules';

export const Skills = () => {

    const [data, setData] = useState([''])
    useEffect(() => {
        const apiUrl = 'https://jahidhasan32.pythonanywhere.com/services/';
        axios.get(apiUrl)
            .then(response => {
                // console.log(response);
                console.log('hello world. how are you');
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);


    return (
        <>
            <section className="skills" id='skills'>
                <div className="round-skills"></div>
                <div className="skills_txt">
                    <h1>What i do</h1>
                    <p>My<span className='text_ch'>Services</span></p>
                </div>

                <div className="skills_wrapper">
                    <img className='shape shapeone_skills' src={ShapeOne} alt="" />

                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Pagination]}

                        className="container skills_container">

                            <SwiperSlide  >
                                <div className="box1" >
                                    <h6>CSS Frameworks</h6>
                                    <div className="inner_txt">
                                        <h4>Bootstrap5 - Tailwind css</h4>
                                        <p>Bootstrap5 & Tailwind css are most popular CSS framework. these used to repetedly design and creating front end parts of a web app.</p>
                                        <img src={ShapeOne} alt="shape img" />
                                        <button className='btn'>Know More</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide  >
                                <div className="box1" >
                                    <h6>Efficiency</h6>
                                    <div className="inner_txt">
                                        <h4>Docker</h4>
                                        <p>Docker is a platform designed to help developers build, share, and run container applications. We handle the tedious setup, so you can focus on the code.</p>
                                        <img src={ShapeOne} alt="shape img" />
                                        <button className='btn'>Know More</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide  >
                                <div className="box1" >
                                    <h6>Web Development</h6>
                                    <div className="inner_txt">
                                        <h4>Python - Django</h4>
                                        <p>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. it's could be your best choice to development backend.</p>
                                        <img src={ShapeOne} alt="shape img" />
                                        <button className='btn'>Know More</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide  >
                                <div className="box1" >
                                    <h6>API Building</h6>
                                    <div className="inner_txt">
                                        <h4>Django Rest API</h4>
                                        <p>DRF is a powerful toolkit for building Web APIs in Django. It provides a flexible way to create APIs by serializing Django models into JSON or other content types.</p>
                                        <img src={ShapeOne} alt="shape img" />
                                        <button className='btn'>Know More</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide  >
                                <div className="box1" >
                                    <h6>Web Designe</h6>
                                    <div className="inner_txt">
                                        <h4>HTML CSS & React JS</h4>
                                        <p>we offered HTML for markuping Web Pages and  CSS and most popular Java Script frontend library 'React JS' to design most interactive web applications.</p>
                                        <img src={ShapeOne} alt="shape img" />
                                        <button className='btn'>Know More</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                    </Swiper>
                </div>
            </section>

        </>
    )
}
