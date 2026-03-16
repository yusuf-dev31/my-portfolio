import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer L1 – AEM Developer</h4>
                <h5>Axeno Consulting Pvt. Ltd.</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Designed reusable AEM components and editable templates. Improved page performance through client library optimization (50% faster loads). Configured DAM workflows and backend functionality using Sling Servlets and OSGi.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AEM Platform Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected modular backend components and scalable AEM Headless APIs using GraphQL. Optimized JCR queries (70% faster search) and built automated DAM pipelines. Led AEM 6.5 and Cloud Service migrations for enterprise clients like H&M and Thomson Reuters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
