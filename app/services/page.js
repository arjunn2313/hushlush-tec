import { Faq2 } from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import { WhyChooseUs3 } from "@/components/WhyChooseUs";
import WorkingProcess from "@/components/WorkingProcess";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Services" pageName="Services" />
      <section className="what-we-provide-area rel z-1">
        <div className="container px-sm-0   py-130 rpy-100">
          <div className="row justify-content-between">
            {/* Left Side: Title & Image */}
            <div
              className="col-lg-6 rmb-55"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-50">
                <span className="subtitle mt-10 mb-15">What We Provide</span>
                <h2>
                  A Complete Suite of Services <br />
                  for Your Digital Success
                </h2>
              </div>
              <img
                src="assets/images/about/what-we-provide.jpg"
                alt="What We Provide"
              />
            </div>

            {/* Right Side: Content */}
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image mb-40">
                <img
                  src="assets/images/about/what-we-provide2.jpg"
                  alt="Digital Solutions"
                />
              </div>
              <p>
                At <strong>Hush Lush Technologies</strong>, we deliver
                end-to-end solutions that help your business thrive in today’s
                competitive digital landscape. From
                <em>branding and graphic design</em> to
                <em>
                  digital marketing, web & mobile development, AR/VR, and
                  enterprise software
                </em>
                , we ensure your brand not only stands out but also achieves
                measurable growth.
              </p>
              <Link
                href="about"
                className="theme-btn hover-primary mt-25"
                data-hover="Learn More"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WorkingProcess titleColor="" />
      <Services extraClass="bgc-black text-white" />
      <WhyChooseUs3 />
      <Faq2 />
    </RiddaLayout>
  );
};
export default page;
