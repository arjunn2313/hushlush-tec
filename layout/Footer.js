import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    case 5:
      return <Footer5 />;
    default:
      return <Footer1 />;
  }
};
export default Footer;

const FooterMenu = () => {
  return (
 <Fragment>
  <div
    className="container bordered-x pt-80 pb-20"
    style={{
      backgroundImage: "url(assets/images/background/footer-bg-dots.png)",
    }}
  >
    <div className="row justify-content-between">
      {/* Company Info & Newsletter */}
      <div
        className="col-lg-4 col-sm-8"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="footer-widget footer-newsletter">
          <div className="footer-logo mb-20">
            <Link href="/">
              <img src="assets/images/logos/logo.png" alt="Hush Lush Technologies" />
            </Link>
          </div>
          <p>
            Empowering brands across GCC & India with innovative digital 
            marketing, creative design, and technology solutions.
          </p>
          <form className="newsletter-form mt-25" action="#">
            <label htmlFor="news-email">
              <i className="fas fa-envelope" />
            </label>
            <input
              id="news-email"
              type="email"
              placeholder="Email Address"
              required
            />
            <button
              type="submit"
              className="theme-btn btn-small bgc-secondary hover-secondary"
              data-hover="Subscribe"
            >
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Quick Links */}
      <div
        className="col-lg-2 col-sm-4 col-6"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="footer-widget footer-links">
          <div className="footer-title">
            <h6>Services</h6>
          </div>
          <ul>
            <li><Link href="services">Digital Marketing</Link></li>
            <li><Link href="services">Branding & Design</Link></li>
            <li><Link href="services">Web Development</Link></li>
            <li><Link href="services">Mobile Applications</Link></li>
            <li><Link href="services">AR & VR Solutions</Link></li>
          </ul>
        </div>
      </div>

      {/* Company */}
      <div
        className="col-lg-2 col-sm-4 col-6"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="footer-widget footer-links">
          <div className="footer-title">
            <h6>Company</h6>
          </div>
          <ul>
            <li><Link href="about">About Us</Link></li>
            <li><Link href="blog">News & Updates</Link></li>
            <li><Link href="portfolio">Portfolio</Link></li>
            <li><Link href="contact">Contact</Link></li>
            <li><Link href="careers">Careers</Link></li>
          </ul>
        </div>
      </div>

      {/* Support */}
      <div
        className="col-lg-2 col-sm-4 col-6"
        data-aos="fade-up"
        data-aos-delay={150}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="footer-widget footer-links">
          <div className="footer-title">
            <h6>Support</h6>
          </div>
          <ul>
            <li><Link href="faqs">FAQs</Link></li>
            <li><Link href="privacy-policy">Privacy Policy</Link></li>
            <li><Link href="refund">Refund Policy</Link></li>
            <li><Link href="terms">Terms & Conditions</Link></li>
            <li><Link href="support">Help Desk</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div
        className="col-lg-2 col-sm-4 col-6"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="footer-widget footer-contact">
          <div className="footer-title">
            <h6>Follow Us</h6>
          </div>
          <div className="social-style-one mt-15">
            <Link href="https://facebook.com"><i className="fab fa-facebook" /></Link>
            <Link href="https://twitter.com"><i className="fab fa-twitter-square" /></Link>
            <Link href="https://youtube.com"><i className="fab fa-youtube" /></Link>
            <Link href="https://instagram.com"><i className="fab fa-instagram" /></Link>
            <Link href="https://linkedin.com"><i className="fab fa-linkedin" /></Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <div className="container bordered-x bordered-top pt-30 pb-15">
      <div className="row">
        <div className="col-lg-5">
          <div className="copyright-text text-center text-lg-start">
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <Link href="/">Hush Lush Technologies</Link>, All rights reserved.
            </p>
          </div>
        </div>
        <div className="col-lg-7 text-center text-lg-end">
          <ul className="footer-bottom-nav">
            <li><Link href="refund">Refund</Link></li>
            <li><Link href="privacy-policy">Privacy Policy</Link></li>
            <li><Link href="faqs">FAQs</Link></li>
          </ul>
        </div>
      </div>
      {/* Scroll Top Button */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="far fa-arrow-up" />
      </button>
    </div>
  </div>
</Fragment>

  );
};

const Footer1 = () => {
  return (
   <footer className="main-footer bgc-black text-white rel z-1">
  {/* Scrolling Banner */}
  <div className="footer-marquee pt-60 pb-75 rpy-90 rel">
    <div className="container blank-container  " />
    <span className="marquee-wrap">
      <span className="marquee-inner left">
        <span className="marquee-item">Let's Build The Future</span>
        <span className="marquee-item">_</span>
        <span className="marquee-item">Get In Touch</span>
        <span className="marquee-item">_</span>
      </span>
      <span className="marquee-inner left">
        <span className="marquee-item">Let's Build The Future</span>
        <span className="marquee-item">_</span>
        <span className="marquee-item">Get In Touch</span>
        <span className="marquee-item">_</span>
      </span>
    </span>
  </div>

  <div className="container   pb-50">
    <div className="row justify-content-between">
      {/* Company Info & Newsletter */}
      <div
        className="col-lg-4 col-sm-8"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="footer-widget footer-newsletter">
          <div className="footer-logo mb-20">
            <Link href="/">
              <img src="assets/images/logos/logo-1.png" alt="Hush Lush Technologies" />
            </Link>
          </div>
          <p>
            Empowering businesses across GCC & India with innovative 
            digital marketing, branding, and technology solutions.
          </p>
          <form className="newsletter-form mt-25" action="#">
            <label htmlFor="news-email">
              <i className="fas fa-envelope" />
            </label>
            <input
              id="news-email"
              type="email"
              placeholder="Email Address"
              required
            />
            <button
              type="submit"
              className="theme-btn btn-small hover-primary"
              data-hover="Subscribe"
            >
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Location & Contact */}
      <div className="col-lg-8">
        <div className="row justify-content-between">
          <div
            className="col-md-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-text">
              <div className="footer-title">
                <h6>Location</h6>
              </div>
              <div className="text">
                Crystal Plaza, Second Floor <br />
                Majaz 01, Sharjah, UAE
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-text">
              <div className="footer-title">
                <h6>Contact Us</h6>
              </div>
              <div className="text">
                <a href="mailto:marketing@hushlushtechnologies.com">
                 marketing@hushlushtechnologies.com
                </a>
                <br />
                <a href="mailto:bdm@hushlushtechnologies.com">
                 bdm@hushlushtechnologies.com
                </a>
                <br />
                <a href="tel:+971542321275">+971 542321275</a>
                <br />
                <a href="tel:+971542321276">+971 542321276</a>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            {/* <div className="footer-widget footer-contact">
              <div className="footer-title">
                <h6>Follow Us</h6>
              </div>
              <div className="social-style-two mt-15">
                <Link href="https://facebook.com">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link href="https://instagram.com">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="https://linkedin.com">
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link href="https://youtube.com">
                  <i className="fab fa-youtube" />
                </Link>
                <Link href="https://twitter.com">
                  <i className="fab fa-twitter" />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <div className="container   bordered-top pt-25 pb-10">
      <div className="row">
        <div className="col-lg-5">
          <div className="copyright-text text-center text-lg-start">
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <Link href="/">Hush Lush Technologies</Link>, All Rights Reserved.
            </p>
          </div>
        </div>
        {/* <div className="col-lg-7 text-center text-lg-end">
          <ul className="footer-bottom-nav">
            <li><Link href="refund">Refund Policy</Link></li>
            <li><Link href="privacy-policy">Privacy Policy</Link></li>
            <li><Link href="faqs">FAQs</Link></li>
          </ul>
        </div> */}
      </div>
      {/* Scroll Top Button */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="far fa-arrow-up" />
      </button>
    </div>
  </div>

  {/* Shapes */}
  <div className="footer-shapes">
    <div className="shape">
      <img src="assets/images/shapes/footer-shape.png" alt="Shape" />
    </div>
  </div>
</footer>

  );
};

const Footer2 = () => {
  return (
    <footer className="main-footer bgc-black text-white">
      <FooterMenu />
    </footer>
  );
};

const Footer3 = () => {
  return (
    <footer className="main-footer bgc-black text-white">
      <div className="container px-sm-0 bordered-x py-100">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div
              className="contact-info-content rmb-55"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-30">
                <h2>Ready To Take Your SEO to the Next Level?</h2>
                <p>
                  Contact us today to schedule a consultation or learn more
                  about our services
                </p>
              </div>
              <div className="contact-info-two-item">
                <div className="icon">
                  <i className="flaticon-world-map" />
                </div>
                <div className="text">
                  Main Location
                  <span className="h6">
                    57 Main Street, Melbourne, Australia
                  </span>
                </div>
              </div>
              <div className="contact-info-two-item">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="text">
                  Email Address
                  <span className="h6">
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </span>
                </div>
              </div>
              <div className="contact-info-two-item">
                <div className="icon">
                  <i className="flaticon-call" />
                </div>
                <div className="text">
                  Need Helps
                  <span className="h6">
                    <a href="callto:+000(123)45688">+000 (123) 456 88</a>
                  </span>
                </div>
              </div>
              <div className="logo mt-60 rmt-35">
                <Link href="/">
                  <img src="assets/images/logos/logo-footer.png" alt="Logo" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-white">
            <form
              className="contact-form style-two z-1 rel"
              name="contactForm"
              action="#"
              method="post"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h3>Get In Touch</h3>
              <p>Contact us today to schedule consultation to expert team</p>
              <div className="row mt-30">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      defaultValue
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      className="form-control"
                      placeholder="Phone No"
                      defaultValue
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      defaultValue
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={4}
                      placeholder="Write Message"
                      required
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group mb-0">
                    <ul className="radio-filter mb-25">
                      <li>
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultChecked
                          name="ByActivities"
                          id="activity1"
                        />
                        <label htmlFor="activity1">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="theme-btn bgc-secondary"
                      data-hover="Send Us  Message"
                    >
                      <span>Send Us Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container px-sm-0 bordered-x bordered-top pt-30 pb-15">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright © <Link href="/">Ridda</Link>, all rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Refund</Link>
                </li>
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="faqs">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="far fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer4 = () => {
  return (
    <footer
      className="main-footer bgc-lighter"
      style={{
        backgroundImage: "url(assets/images/background/video-bg-dots.png)",
      }}
    >
      <FooterMenu />
    </footer>
  );
};

const Footer5 = () => {
  return (
    <footer
      className="main-footer style-two bgc-black text-white bgp-bottom pt-250 rel z-1"
      style={{
        backgroundImage: "url(assets/images/background/footer-two.png)",
      }}
    >
      <div className="container container-1290 pb-50">
        <div className="row gap-140 justify-content-between">
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-text">
              <span className="h1">Let’s Develop Your New Website</span>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-6"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-contact">
              <p>Get in touch with our team</p>
              <div className="section-title">
                <h2>
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </h2>
              </div>
              <div className="social-style-two mt-10">
                <Link href="contact">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-dribbble" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-behance" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-1290">
        <div className="footer-bottom bordered-top pt-30 pb-10">
          <div className="row">
            <div className="col-md-3">
              <div className="logo mb-15 text-center text-md-start">
                <img src="assets/images/logos/logo-footer.png" alt="Logo" />
              </div>
            </div>
            <div className="col-md-9 text-center text-lg-end">
              <div className="copyright-text text-center text-md-end">
                <p>
                  Copyright © <Link href="/">Ridda</Link>, all rights reserved.
                </p>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="far fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};
