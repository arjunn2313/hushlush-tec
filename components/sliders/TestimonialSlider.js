"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

export const TestimonialSlider1 = () => {
  return (
    <Slider
      {...sliderProps.testimonials2}
      className="testimonials-two-active"
      data-aos="fade-right"
      data-aos-duration={1500}
      data-aos-offset={50}
    >
      {[
        {
          logo: "assets/images/testimonials/logo1.png",
          author: "assets/images/testimonials/author1.jpg",
          text: "Hush Lush Technologies transformed our online presence. Their digital marketing strategies brought us more engagement and leads than we imagined.",
          name: "Aisha Khan",
          designation: "Marketing Director, Gulf Horizons",
        },
        {
          logo: "assets/images/testimonials/logo2.png",
          author: "assets/images/testimonials/author2.jpg",
          text: "From web development to branding, Hush Lush delivered beyond our expectations. The team is creative, reliable, and results-driven.",
          name: "Rajesh Menon",
          designation: "CEO, Bright Future Enterprises",
        },
        {
          logo: "assets/images/testimonials/logo3.png",
          author: "assets/images/testimonials/author3.jpg",
          text: "Their AR/VR solutions helped us showcase our real estate projects in a way that truly impressed clients. Highly recommended!",
          name: "Fatima Al Mansoori",
          designation: "Founder, Vision Properties",
        },
        {
          logo: "assets/images/testimonials/logo4.png",
          author: "assets/images/testimonials/author4.jpg",
          text: "Working with Hush Lush has been a game changer for our business. Their support and innovative ideas keep us ahead of the competition.",
          name: "Omar Abdullah",
          designation: "COO, Tech Innovators LLC",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-two">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
            <div className="logo">
              {/* <img src={testimonial.logo} alt="Logo" /> */}
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              {/* <img src={testimonial.author} alt={testimonial.name} /> */}
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};


export const TestimonialsSlider2 = () => {
  return (
    <Slider className="testimonials-active" {...sliderProps.testimonials}>
      {[
        {
          author: "assets/images/testimonials/author1.jpg",
          logo: "assets/images/testimonials/logo1.png",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          logo: "assets/images/testimonials/logo2.png",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Thomas L. Brinker",
          designation: "SR Manager",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          logo: "assets/images/testimonials/logo1.png",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          logo: "assets/images/testimonials/logo2.png",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Thomas L. Brinker",
          designation: "SR Manager",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="testimonial-item"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
          data-aos-delay={index * 50}
        >
          <div className="author-logo">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <div className="logo">
              <img src={testimonial.logo} alt="Logo" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider3 = () => {
  return (
    <Slider className="testimonials-two-active" {...sliderProps.testimonials2}>
      {[
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-three">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider4 = () => {
  return (
    <Slider
      {...sliderProps.testimonials3}
      className="testimonials-three-active"
    >
      {[
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-four">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider5 = () => {
  return (
    <Slider {...sliderProps.testimonials2} className="testimonials-two-active">
      {[
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-four">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};
