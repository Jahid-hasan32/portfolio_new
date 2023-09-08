import "./contact.css";
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsBagPlus } from "react-icons/bs";
import { motion } from 'framer-motion';

import axios from "axios";
import { useState } from "react";
const variants = {
  initial : {
      opacity : 0,
      x : -200
  },
  open : {
    opacity : 1, 
    x : 0,
  },
  transition: {
    delay : .5, 
    type : 'spring',
    stiffness : 230,
    duration : 3,
  },


  initialForm : {
    opacity : 0,
    x : 200
  },
  openForm : {
    opacity : 1, 
    x : 0,
  }

}

export const Contact = () => {

    const [formData, setFormData] = useState({
      username : '',
      email : '',
      subject : '',
      message : ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };


    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Send the form data to the Django API using Axios
      axios.post('https://jahidhasan32.pythonanywhere.com/form/', formData)
        .then((response) => {
          // Handle successful response (e.g., show a success message)
        })
        .catch((error) => {
          // Handle error (e.g., show an error message)
          console.error('Error sending email:', error);
        });
    };
  

  return (
    <section id="contact">
        {/* contact heading text */}
      <div className="contact_txt">
        <h1>Get in Tocuh</h1>
        <p>
          Let's Talk <span className="text_ch">about ideas</span>
        </p>
      </div>

      <div className="container contact_container">
        <motion.div
        
        variants={variants}
        initial = "initial"
        whileInView= "open"

        className="left">
          <div className="content_form ">
            <div className="round_div">
              <FaRegAddressCard className="form_icon" />
            </div>
            <div className="form_txt">
              <h3 className="text_ch">Address</h3>
              <address>BD, Chandpur, north Matlab, mohonpor.</address>
            </div>
          </div>

          <div className="content_form ">
            <div className="round_div">
              <BiPhoneCall className="form_icon" />
            </div>
            <div className="form_txt">
              <h3 className="text_ch">Phone</h3>
              <p>+8801819087654</p>
            </div>
          </div>
          <div className="content_form ">
            <div className="round_div">
              <BsBagPlus className="form_icon" />
            </div>
            <div className="form_txt">
              <h3 className="text_ch">freelance</h3>
              <p>availabe right now</p>
            </div>
          </div>
          <div className="content_form ">
            <div className="round_div">
              <AiOutlineMail className="form_icon" />
            </div>
            <div className="form_txt">
              <h3 className="text_ch">Email</h3>
              <p>jahidactive32@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div

        variants={variants}
        initial = "initialForm"
        whileInView= "openForm"

        className="right">
          <form action="" onSubmit={handleSubmit}>
            <div className="form">
              <div className="form_group">
                <label htmlFor="name">Your full name *</label>
                <input type="text" name="username" value={formData.username}  onChange={handleChange}/>
              </div>
              <div className="form_group">
                <label htmlFor="name">Your email address *</label>
                <input type="email" name="email" value={formData.email}  onChange={handleChange} />
              </div>
              <div className="form_group">
                <label htmlFor="name">Your subject *</label>
                <input type="text" name="subject" value={formData.subject}  onChange={handleChange}/>
              </div>
              <div className="form_group">
                <label htmlFor="name">Your Message *</label>
                <textarea  id="" cols="30" rows="10" name="message" value={formData.message}  onChange={handleChange}></textarea>
              </div>

              <button className="btn"> Send</button>
            </div>
          </form>
        </motion.div>
      </div>

      <footer className="container">
        <div className="social_links">
          <a href="https://github.com">
            <FaGithub className="social_icon" />
          </a>
          <a href="https://www.linkedin.com/in/jahid-hasan-2a69b3286/">
            <FaLinkedin className="social_icon" />
          </a>
          <a href="#">
            <FaFacebook className="social_icon" />
          </a>
          <a href="https://twitter.com/jahidactive32">
            <FaTwitter className="social_icon" />
          </a>
        </div>

        <div className="footer_txt">
            <p>© All right reserved by developer <a href="https://www.linkedin.com/in/jahid-hasan-2a69b3286/" ><span className="text_ch">Zubayer hasan</span></a></p>
        </div>
      </footer>
    </section>
  );
};
