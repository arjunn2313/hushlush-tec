 const WorkingProcess = ({ titleColor = "color-primary" }) => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      text: "We begin by understanding your brand, goals, and target audience to create a clear roadmap for success.",
    },
    {
      number: "02",
      title: "Strategy & Planning",
      text: "Our experts craft tailored strategies combining creative ideas, digital marketing, and technology solutions.",
    },
    {
      number: "03",
      title: "Creative Design & Development",
      text: "From branding and graphic design to web & mobile app development, we bring your vision to life.",
    },
    {
      number: "04",
      title: "Launch & Distribution",
      text: "We execute campaigns and launch products across the right platforms for maximum reach and impact.",
    },
    {
      number: "05",
      title: "Support & Optimization",
      text: "Post-launch, we provide ongoing support, performance tracking, and optimization for continuous growth.",
    },
  ];

  return (
    <section className="working-process-area py-100">
      <div className="container container-1290">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="section-title mb-50 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className={`subtitle mt-10 mb-15 ${titleColor}`}>
                Our Working Process
              </span>
              <h2>Step-by-Step To Your Digital Success</h2>
            </div>
          </div>
        </div>
        <div className="working-step-wrap">
          {steps.map((step) => (
            <div className="work-step-item hover-item" key={step.number}>
              <span className="number">{step.number}</span>
              <h6>{step.title}</h6>
              <div className="hover-content">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;


export const WorkingProcess2 = ({ extraClass = "bgc-black text-white" }) => {
  return (
    <section className={`working-process-area rel z-1 ${extraClass}`}>
      <div className="container px-sm-0 bordered-x pt-100 pb-70">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div
              className="section-title mb-50 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mt-10 mb-15">Our Working Process</span>
              <h2>How We Optimize Inside Our SEO Workflow</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center rel">
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="flip-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="work-process-item-two">
              <span className="number">01</span>
              <h6>Discovery &amp; Analysis</h6>
              <div className="arrow">
                <img src="assets/images/shapes/arrow.png" alt="Arrow" />
              </div>
              <p>
                We start by understanding your business target audience
                conducting comprehensive
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="flip-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="work-process-item-two">
              <span className="number">02</span>
              <h6>Website Optimization</h6>
              <div className="arrow">
                <img src="assets/images/shapes/arrow.png" alt="Arrow" />
              </div>
              <p>
                Optimize the website for both on-page and technical SEO ensuring
                responsiveness,
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="flip-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="work-process-item-two">
              <span className="number">03</span>
              <h6>Content Strategy</h6>
              <div className="arrow">
                <img src="assets/images/shapes/arrow.png" alt="Arrow" />
              </div>
              <p>
                Develop and implement the content strategy that focuses
                keyword-optimized content.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="flip-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="work-process-item-two">
              <span className="number">04</span>
              <h6>Discovery &amp; Analysis</h6>
              <div className="arrow">
                <img src="assets/images/shapes/arrow.png" alt="Arrow" />
              </div>
              <p>
                We start by understanding your business target audience
                conducting comprehensive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
