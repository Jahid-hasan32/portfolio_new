import './blog.css'
import Blog1 from '../../assets/blog1.jpg'
import Blog2 from '../../assets/blog2.jpg'
import Blog3 from '../../assets/blog3.jpg'



export const Blog = () => {
    return (
        <section id="blog">
            <div id="round_blog"></div>

            {/* blog heading text */}
                <div className="blog_txt">
                    <h1>Read Our Blogs</h1>
                    <p>Learn New<span className='text_ch'>Technologies</span></p>
                </div>


            {/* blog content */}

            <div className="container blog_container">
                <div className="blog_wrapper">
                    {/* blog cards */}
                    <div className="blog_card">
                        <img src={Blog1} alt="blog img technical" />
                        <div className="blog_sm_text">
                            <p>UI Design. </p>
                            <small>6 mins read</small>
                        </div>
                        <p><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, obcaecati eligendi. Vitae eligendi vero accusamus!</a></p>
                    </div>

                    <div className="blog_card">
                        <img src={Blog2} alt="blog img technical" />
                        <div className="blog_sm_text">
                            <p>Web Development. </p>
                            <small>6 mins read</small>
                        </div>
                        <p><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, obcaecati eligendi. Vitae eligendi vero accusamus!</a></p>
                    </div>

                    <div className="blog_card">
                        <img src={Blog3} alt="blog img technical" />
                        <div className="blog_sm_text">
                            <p>beauty of AI. </p>
                            <small>6 mins read</small>
                        </div>
                        <p><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, obcaecati eligendi. Vitae eligendi vero accusamus!</a></p>
                    </div>

                </div>
            </div>

        </section>
    )
}