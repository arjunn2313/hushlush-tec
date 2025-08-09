 import Link from "next/link";
import CounterItems from "./CounterItems";

const About = ({ counter }) => {
  return (
    <section className="about-area rel z-1">
      <div className="container  pt-130 rpt-100 pb-100">
        <div className="row px-xl-5 justify-content-between align-items-center">
          {/* Circles Section */}
          <div className="col-xl-4 col-lg-5">
            <div className="about-circles rmb-55">
              <div
                className="circle"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Branding
              </div>
              <div
                className="circle mx-auto bgc-black text-white"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Graphic Design
              </div>
              <div
                className="circle ms-auto bgc-primary"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Digital Marketing
              </div>
            </div>
          </div>

          {/* About Content */}
          <div
            className="col-lg-7"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="about-content-four">
              <div className="section-title mb-40">
                <span className="subtitle mt-10 mb-15">About Us</span>
                <h2>
                  Transforming Ideas into Reality <br />
                  Empowering Brands with{" "}
                  <span>Hush Lush Technologies</span>
                </h2>
              </div>
              <p>
                At <strong>Hush Lush Technologies</strong>, we blend{" "}
                <em>creativity, technology, and strategy</em> to deliver
                impactful solutions. From{" "}
                <strong>branding and digital marketing</strong> to{" "}
                <strong>web & mobile development, AR/VR, and enterprise
                systems</strong>, we empower businesses across the GCC and
                India to grow in today’s digital-first world.
              </p>
              <ul className="list-style-one my-30">
                <li>Creative Branding & Graphic Design</li>
                <li>Digital Marketing & SEO</li>
                <li>Web & Software Development</li>
                <li>Mobile Applications</li>
              </ul>
              {/* <Link
                href="project-list"
                className="theme-btn style-two"
                data-hover="Explore Our Projects"
              >
                <span>Explore Our Projects</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div
        className={`container bordered-x px-0 ${
          counter && "about-counter rel"
        }`}
      >
        <img src="assets/images/about/about.png" alt="About Hush Lush Technologies" />
        {counter && <CounterItems />}
      </div>
    </section>
  );
};

export default About;
