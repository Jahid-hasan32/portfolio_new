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
        const apiUrl = 'http://127.0.0.1:8000/services/';
        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
                // console.log(response);
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

                        {data.map(item => (
                            <SwiperSlide  key={item.pk}>
                                <div className="box1" key={item.pk}>
                                    <h6>{item.main_title}</h6>
                                    <div className="inner_txt">
                                        <h4>{item.sub_title}</h4>
                                        <p>{item.text}</p>
                                        <img src={ShapeOne} alt="shape img" />
                                        <button className='btn'>Know More</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </section>

        </>
    )
}
