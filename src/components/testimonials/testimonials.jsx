import './testimonials.css'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Testimonial1 from '../../assets/testimonial5.jpg'
import Testimonial2 from '../../assets/testimonial2.png'
import Testimonial3 from '../../assets/profile4.jpg'
import Testimonial4 from '../../assets/profile5.jpg'


export const Testimonial = () => {

    const testimonials = [

        {
            'id':1 , 
            'img' : Testimonial1,
            'name' : 'hasan nicole',
            'comment' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam ipsa placeat accusamus eos distinctio, voluptatum, vitae, praesentium sequi unde rem soluta quibusdam consequatur. Assumenda!',
            'position' : 'Web Designer'
        },
        {
          'id':1 , 
          'img' : Testimonial2,
          'name' : 'Jhone Doe',
          'comment' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam ipsa placeat accusamus eos distinctio, voluptatum, vitae, praesentium sequi unde rem soluta quibusdam consequatur. Assumenda!',
          'position' : 'Digital marketer'
      },
        {
          'id':1 , 
          'img' : Testimonial3,
          'name' : 'Dunald Trump',
          'comment' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam ipsa placeat accusamus eos distinctio, voluptatum, vitae, praesentium sequi unde rem soluta quibusdam consequatur. Assumenda!',
          'position' : 'Web Developer'
      },
        {
          'id':1 , 
          'img' : Testimonial4,
          'name' : 'Joe Baiden',
          'comment' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam ipsa placeat accusamus eos distinctio, voluptatum, vitae, praesentium sequi unde rem soluta quibusdam consequatur. Assumenda!',
          'position' : 'CEO'
      },
    ]

    return (
        <section id="testimonial">
            <div id="round_testimonial"></div>

            {/* testimonial title */}
            <div className="testimonial_txt">
            <h1 className=''>testimonials</h1>
            <p>What Says<span className='text_ch'> My Clents</span></p>
        </div>

        {/* testimonial card */}
        <div className='container testimonial_container'>
          
          <div className="feedback">
            <h1>They <br /> Trusted Us.</h1>
            <p>We are very happy because <br />we have happy customers.</p>
          </div>

          <Swiper className='swiper_container'
                slidesPerView={1}
                modules={[ Pagination]}
                spaceBetween={50}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 300,
                }}
                
                // breakpoints={{
                //   640: {
                //     slidesPerView: 1,
                //     spaceBetween: 20,
                //   },

                // }}
                >
          {
          testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
            <div className="testimonial_card">
              <img src={testimonial.img} alt="" />
              <q>{testimonial.comment}</q>
              <p>{testimonial.name}</p>
              <h4>{testimonial.position}</h4>
            </div>
          </SwiperSlide>
          ))
          }
          </Swiper>
        </div>

        </section>

    )
}
