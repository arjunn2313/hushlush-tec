 import Link from "next/link";

const Services = ({ extraClass = "" }) => {
  const services = [
    {
      id: 1,
      image: "assets/images/services/digitalmarketing.jpg",
      title: "Digital Marketing",
      description:
        "Social media advertising is vital to creating a new customer base along with building your brand's credibility. It helps drive real organic traffic to one's website, thereby creating active customer engagement. At HUSH LUSH, we highlight the positive aspects of your business, join in the conversation with each of your customers, listen to what they are saying and address their concerns. We make use of various platforms like Facebook, Instagram, YouTube, and Twitter, LinkedIn, Google+ to promote your brand actively and effectively."
    },
    {
      id: 2,
      image: "assets/images/services/branding.jpg",
      title: "Branding",
      description:
        "Our creative services include user guidance with onboarding screens showing user progress, replacing paragraphs with engaging illustrations, and producing custom artwork such as apparel illustrations, packaging designs, poster illustrations, infographic creations, and other bespoke illustrations tailored to your brand."
    },
    {
      id: 3,
      image: "assets/images/services/graphicdesign.jpg",
      title: "Graphic Design",
      description:
        "Our Graphic Designing services includes outstanding website designs, attention grabbing logos, noticeable flyers and attractive flexes, which are what companies need to strengthen their brand image while enhancing its recognition. Creative, ingenious and conspicuous graphics easily engage the customers and catch their attention instantly."
    },
    {
      id: 4,
      image: "assets/images/services/webdesign.jpg",
      title: "Web Development",
      description:
        "We provide a complete range of web design and development services including CMS websites, small business and corporate website design, eCommerce solutions, and web application development, all crafted to be mobile responsive and user-friendly. Our expertise extends to website redesigning, mobile website designing, HTML page creation, customized website development, and wireframing for precise planning. Whether you need a fresh new site or a revamp of your existing one, we ensure designs that are visually appealing, functional, and aligned with your brand identity."
    },
    {
      id: 5,
      image: "assets/images/services/mobileapp.jpg",
      title: "Mobile Apps",
      description:
        "We craft cutting-edge mobile applications that blend innovation, functionality, and design to deliver seamless experiences for both iOS and Android users. From ideation to deployment, our expert team ensures your app not only meets industry standards but also stands out in the competitive market."
    },
    {
      id: 6,
      image: "assets/images/services/animation.jpg",
      title: "Animation",
      description:
        "From explainer videos to 3D animations, we bring ideas to life with engaging motion graphics that simplify complex concepts and captivate viewers."
    },
    {
      id: 7,
      image: "assets/images/services/socialmedia.jpg",
      title: "Social Media Marketing",
      description:
        "Social media advertising is vital to creating a new customer base along with building your brand's credibility. It helps drive real organic traffic to one's website, thereby creating active customer engagement. At HUSHLUSH, We highlight the positive aspects of your business, join in the conversation with each of your customers, listen to what they are saying and address their concerns. We make use of various platforms like Facebook, Instagram, YouTube, and Twitter, Linked in, Google+ to promote your brand actively and effectively."
    },
    {
      id: 8,
      image: "assets/images/services/flyer.jpg",
      title: "Advertisement Materials",
      description:
        " Designing and Developing Advertising Collateral Promotional Events and Campaigns Developing Marketing Strategies Corporate Advertising Services Online and Social Media Advertising Services."
    },
    {
      id: 9,
      image: "assets/images/services/ad-film.jpg",
      title: "Ad Film Making",
      description:
        "Ad Films has always been the most effective when it comes to capturing the audience attention. As an advertising company, we offer commercial and professional ad film services that you will need to represent your company in a thoughtful, imaginative and convincing manner.."
    },
    {
      id: 10,
      image: "assets/images/services/companybranding.jpg",
      title: "Company Branding",
      description:
        "We provide complete branding solutions—from logo creation to brand guidelines—that ensure your company is recognized, trusted, and remembered."
    },
    {
      id: 11,
      image: "assets/images/services/fashionshoots.jpg",
      title: "Fashion Shoots & Portfolio",
      description:
        "Fashion photography is a quickly emerging genre of photography, becoming incredibly popular. We focus on excellent portraiture, optimum lighting and scenic locations. Specializations include catalogs & commercial photography which is solely for the purpose of selling clothes, makeup, accessories, etc."
    },
    {
      id: 12,
      image: "assets/images/services/software.jpg",
      title: "Software Solutions",
      description:
        "Custom-built software designed to automate tasks, enhance productivity, and integrate seamlessly into your existing workflows."
    },
    {
      id: 13,
      image: "assets/images/services/CRM.jpg",
      title: "Enterprise Products",
      description:
        "Scalable enterprise-grade solutions, including CRM, ERP, and industry-specific platforms, designed to streamline operations and empower growth for large organizations."
    },
  ];

  return (
     <section className={`services-area ${extraClass}`} id="services">
  <div className="container px-0 bordered-top py-130 rpy-100">
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

 {services.map(({ id, image, title, description }) => (
  <div key={id} className="mb-5">
    <div className="service-limeline-item mb-3">
      <span className="number">{id < 10 ? `0${id}` : id}</span>
      <span className="h1 d-block mb-3">
        <Link href="#">{title}</Link>
      </span>

      <div className="image mb-3">
        <img src={image} alt={title} className="img-fluid rounded shadow-sm" />
      </div>
    </div>

    {/* Attractive description card */}
    <div className="card bg-light border-0 shadow-sm p-4 rounded-3">
      <p className="mb-0 lead text-dark">
         {description}
      </p>
    </div>
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
    id: 1,
    icon: "flaticon-advertising",
    image: "assets/images/services/service-timeline1.jpg",
    title: "Digital Marketing",
    description: "Boost your online presence with data-driven marketing campaigns that deliver measurable results."
  },
  {
    id: 2,
    icon: "flaticon-design",
    image: "assets/images/services/service-timeline2.jpg",
    title: "Branding & Graphic Design",
    description: "Create a strong and lasting identity that resonates with your target audience."
  },
  {
    id: 3,
    icon: "flaticon-brush",
    image: "assets/images/services/service-timeline3.jpg",
    title: "Graphic Design",
    description: "Visually stunning designs to communicate your message and captivate customers."
  },
  {
    id: 4,
    icon: "flaticon-www",
    image: "assets/images/services/service-timeline4.jpg",
    title: "Web Development",
    description: "Custom, responsive websites built with modern technologies for maximum performance."
  },
  {
    id: 5,
    icon: "flaticon-smartphone",
    image: "assets/images/services/service-timeline5.jpg",
    title: "Mobile Apps",
    description: "User-friendly mobile applications designed for seamless experiences on all devices."
  },
  {
    id: 6,
    icon: "flaticon-3d",
    image: "assets/images/services/service-timeline6.jpg",
    title: "Animation",
    description: "Engaging animations that bring your brand and ideas to life."
  },
  {
    id: 7,
    icon: "flaticon-megaphone",
    image: "assets/images/services/service-timeline7.jpg",
    title: "Social Media Marketing",
    description: "Grow and engage your audience with creative content and smart strategies."
  },
  {
    id: 8,
    icon: "flaticon-promotion",
    image: "assets/images/services/service-timeline8.jpg",
    title: "Advertisement Materials",
    description: "Professional ad creatives designed to grab attention and convert customers."
  },
  {
    id: 9,
    icon: "flaticon-video",
    image: "assets/images/services/service-timeline9.jpg",
    title: "Ad Film Making",
    description: "High-quality promotional films to showcase your brand and story."
  },
  {
    id: 10,
    icon: "flaticon-badge",
    image: "assets/images/services/service-timeline10.jpg",
    title: "Company Branding",
    description: "Comprehensive branding solutions that align with your company vision."
  },
  {
    id: 11,
    icon: "flaticon-camera",
    image: "assets/images/services/service-timeline11.jpg",
    title: "Fashion Shoots & Portfolio",
    description: "Stylish and professional photography to highlight your unique fashion identity."
  },
  {
    id: 12,
    icon: "flaticon-coding",
    image: "assets/images/services/service-timeline12.jpg",
    title: "Software Solutions",
    description: "Tailor-made software systems to streamline and optimize your business operations."
  },
  {
    id: 13,
    icon: "flaticon-enterprise",
    image: "assets/images/services/service-timeline13.jpg",
    title: "Enterprise Products",
    description: "Robust and scalable enterprise solutions to drive productivity and growth."
  }
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

