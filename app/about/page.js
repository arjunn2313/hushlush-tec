import About from "@/components/About";
import { Blog2 } from "@/components/Blog";
import PageBanner from "@/components/PageBanner";
import ClientSlider from "@/components/sliders/ClientSlider";
import { TestimonialSlider1 } from "@/components/sliders/TestimonialSlider";
import Team from "@/components/Team";
import { WhyChooseUs2 } from "@/components/WhyChooseUs";
import RiddaLayout from "@/layout/RiddaLayout";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="About Us" pageName="About Us" />
      <About counter={true} />
      <WhyChooseUs2 bg="bgc-none" />
      {/* <Team /> */}
      <section className="testimonials-two-area rel z-1">
  <div className="container px-0   pt-130 rpt-100 pb-170 rpb-140">
    <div className="testimonials-and-clients bg-white br-10 bordered">
      <div className="row">
        {/* Testimonials Content */}
        <div className="col-lg-5">
          <div
            className="testimonials-content rmb-55"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mb-30">
              <span className="subtitle mt-10 mb-15">Our Testimonials</span>
              <h2>What Our Clients Say About Us</h2>
            </div>
            <p>
              At <strong>Hush Lush Technologies</strong>, we’ve helped brands 
              across GCC & India grow through <em>digital marketing, branding, 
              web & mobile development, AR/VR, and creative campaigns</em>.  
              Here’s what some of them have to say about their experience.
            </p>
            <div className="testimonial-dots mt-45" />
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="col-lg-7">
          <TestimonialSlider1 />
        </div>
      </div>

      {/* Clients Section */}
      {/* <div
        className="text-center mt-45 mb-40"
        data-aos="zoom-in"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <h6>Trusted by Leading Brands Across GCC & India</h6>
      </div> */}
      {/* <ClientSlider /> */}
    </div>
  </div>
</section>

      {/* <Blog2 subtitleColor="" /> */}
    </RiddaLayout>
  );
};
export default page;
