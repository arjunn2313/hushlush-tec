import PageBanner from "@/components/PageBanner";
import { WhyChooseUs3 } from "@/components/WhyChooseUs";
import RiddaLayout from "@/layout/RiddaLayout";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Contact" pageName="Contact" />
      <WhyChooseUs3 className="why-choose-contact-page" />
      <section className="contact-form-area">
        <div className="container  -x px-sm-0 pb-120 rpb-90">
          <div className="row align-items-center">
            {/* Contact Info */}
            <div className="col-lg-6">
              <div
                className="contact-info-part style-two rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-50">
                  <h2>
                    Ready to get started? Fill out the form below, and we'll be
                    in touch shortly
                  </h2>
                </div>
                <div className="contact-info-wrap bordered br-10 overflow-hidden">
                  <div className="row no-gap">
                    <div className="col-sm-6">
                      <div
                        className="contact-info-item"
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                        data-aos-delay={50}
                      >
                        <div className="icon">
                          <i className="far fa-map-marker-alt" />
                        </div>
                        <div className="text">
                          Crystal Plaza, <br />
                          Majaz 01, Sharjah, UAE
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="contact-info-item"
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                        data-aos-delay={50}
                      >
                        <div className="icon">
                          <i className="far fa-envelope" />
                        </div>
                        <div className="text">
                          <a href="mailto:marketing@hushlushtechnologies.com">
                            marketing@hushlushtechnologies.com
                          </a>
                          <br />
                          <a
                            href="mailto:bdm@hushlushtechnologies.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            bdm@hushlushtechnologies.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="contact-info-item"
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                        data-aos-delay={50}
                      >
                        <div className="icon">
                          <i className="far fa-phone-volume" />
                        </div>
                        <div className="text">
                          <a href="tel:+971542321275">+971-542321275</a>
                          <br />
                          <a href="tel:+971542321276">+971-542321276</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="contact-info-item"
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                        data-aos-delay={50}
                      >
                        <div className="icon">
                          <i className="far fa-clock" />
                        </div>
                        <div className="text">
                          Monday - Saturday <br />
                          09:00 AM - 06:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="contact-form style-three bgc-lighter z-1 rel">
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h3>Get In Touch</h3>
                  <p>
                    Contact us today to schedule a consultation with our expert
                    team.
                  </p>
                  <div className="row gap-20 mt-20">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Your Full Name"
                          required
                          data-error="Please enter your Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="phone_number">Phone</label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          placeholder="Your Phone Number"
                          required
                          data-error="Please enter your Number"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-25">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          required
                          data-error="Please enter your Subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="message">Message Us</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write your message here"
                          required
                          data-error="Please enter your Message"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn"
                          data-hover="Send Message"
                        >
                          <span>Send Message</span>
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            className="our-location mt-100"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.806660140149!2d55.3864222!3d25.344268000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b4ad1f84c95%3A0x905e1932b1c879a2!2sAfaq%20Alkhaleej%20Management%20Consultants!5e0!3m2!1sen!2sin!4v1753704440809!5m2!1sen!2sin"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default page;
