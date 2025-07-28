import Link from "next/link";

 

const Services = ({ extraClass = "" }) => {
 const services = [
    {
      id: 1,
      image: "assets/images/services/service-timeline1.jpg",
      title: "Digital Marketing",
    },
    {
      id: 2,
      image: "assets/images/services/service-timeline2.jpg",
      title: "Branding",
    },
    {
      id: 3,
      image: "assets/images/services/service-timeline3.jpg",
      title: "Graphic Design",
    },
    {
      id: 4,
      image: "assets/images/services/service-timeline4.jpg",
      title: "Web Development",
    },
    {
      id: 5,
      image: "assets/images/services/service-timeline5.jpg",
      title: "Mobile Apps",
    },
    {
      id: 6,
      image: "assets/images/services/service-timeline6.jpg",
      title: "Animation",
    },
    {
      id: 7,
      image: "assets/images/services/service-timeline7.jpg",
      title: "Social Media Marketing",
    },
    {
      id: 8,
      image: "assets/images/services/service-timeline8.jpg",
      title: "Advertisement Materials",
    },
    {
      id: 9,
      image: "assets/images/services/service-timeline9.jpg",
      title: "Ad Film Making",
    },
    {
      id: 10,
      image: "assets/images/services/service-timeline10.jpg",
      title: "Company Branding",
    },
    {
      id: 11,
      image: "assets/images/services/service-timeline11.jpg",
      title: "Fashion Shoots & Portfolio",
    },
    {
      id: 12,
      image: "assets/images/services/service-timeline12.jpg",
      title: "Software Solutions",
    },
    {
      id: 13,
      image: "assets/images/services/service-timeline13.jpg",
      title: "Enterprise Products",
    },
  ];
  return (
    <section className={`services-area ${extraClass}`} id="services">
      <div className="container px-0   bordered-top py-130 rpy-100">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-11">
            <div
              className="section-title mb-50 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mt-10 mb-15">Services</span>
              <h2>Creative & Modern Solutions</h2>
            </div>
          </div>
        </div>
        {services.map(({ id, image, title }) => (
          <div key={id} className="service-limeline-item">
            <span className="number">{id < 10 ? `0${id}` : id}</span>
            <span className="h1">
              <Link href="#">{title}</Link>
            </span>
            {/* <div className="image">
              <img src={image} alt={title} />
            </div> */}
            {/* <Link href="service-details" className="detail-btn">
              <i className="far fa-arrow-right" />
            </Link> */}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;


 export const Services2 = ({ extraClass = "pb-70" }) => {
  const services = [
    {
      icon: "flaticon-advertising",
      title: "Digital Marketing",
      description:
        "We create powerful social media campaigns, PPC ads, and SEO strategies to grow your brand’s presence and drive measurable results.",
    },
    {
      icon: "flaticon-design",
      title: "Branding & Graphic Design",
      description:
        "From logos to full brand identities, our creative team designs visuals that capture attention and define your brand’s personality.",
    },
    {
      icon: "flaticon-www",
      title: "Web & Software Development",
      description:
        "We build responsive websites, e-commerce solutions, and enterprise systems (ERP & CRM) tailored to your business needs.",
    },
    {
      icon: "flaticon-smartphone",
      title: "Mobile Applications",
      description:
        "Our team delivers user-friendly iOS and Android apps with stunning UI/UX and strong performance for maximum engagement.",
    },
    {
      icon: "flaticon-3d",
      title: "Animation & Ad Films",
      description:
        "We produce high-quality 2D/3D animations, explainer videos, and ad films that bring your message to life and captivate audiences.",
    },
  ];

  return (
    <section className="services-area rel z-1" id="services">
      <div className={`container bordered-x px-sm-0 ${extraClass}`}>
        <div className="row justify-content-center pb-35">
          <div
            className="col-xl-7 col-lg-9 text-center"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mb-30">
              <span className="subtitle mb-15">Our Services</span>
              <h2>Explore What We Offer</h2>
            </div>
            <p>
              At <strong>Hush Lush Technologies</strong>, we deliver innovative solutions
              that blend creativity and technology — empowering businesses to thrive in the digital era.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          {services.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className={`${i === 0 ? "col-xl-8" : "col-xl-4 col-md-6"}  `}
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item">
                <div className="icon">
                  <i className={icon} />
                </div>
                <h4>
                  <Link href="service-details">{title}</Link>
                </h4>
                <p>{description}</p>
                <Link href="service-details" className="read-more">
                  Read More <i className="far fa-arrow-right" />
                </Link>
                <div className="bg">
                  <img
                    src="assets/images/shapes/service-circle.png"
                    alt="Circle"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

