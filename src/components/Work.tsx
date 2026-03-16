import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Alvi Global</h4>
                  <p>Weather Widget</p>
                </div>
              </div>
              <p className="work-description">
                A modular AEM component providing real-time weather forecasts across global pages, optimized for high performance and scalability.
              </p>
              <h4>Tools and features</h4>
              <p>AEM 6.5, Java, Sling Servlets, Sightly, OSGi, OpenWeatherMap API</p>
            </div>
            <a href="https://github.com/yusuf-dev31/aem-global-weather-widget" target="_blank" rel="noreferrer">
              <WorkImage image="/images/weatherWidgetSnap.png" alt="Alvi Global Project" link="https://github.com/yusuf-dev31/aem-global-weather-widget" />
            </a>
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>RetailHub</h4>
                  <p>Headless Commerce</p>
                </div>
              </div>
              <p className="work-description">
                An AI-powered headless commerce solution leveraging Content Fragments and GraphQL for a seamless decoupled frontend experience.
              </p>
              <h4>Tools and features</h4>
              <p>AEM Headless CMS, GraphQL APIs, Google Gemini AI, Prompt Engineering</p>
            </div>
            <a href="https://github.com/yusuf-dev31/aem-ai-headless-commerce" target="_blank" rel="noreferrer">
              <WorkImage image="/images/Ai-headless-commence.png" alt="RetailHub AI Project" link="https://github.com/yusuf-dev31/aem-ai-headless-commerce" />
            </a>
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>NotesApp</h4>
                  <p>CRUD Application</p>
                </div>
              </div>
              <p className="work-description">
                A full-featured notes management system with secure authentication, dedicated RESTful APIs, and robust MongoDB cloud persistence.
              </p>
              <h4>Tools and features</h4>
              <p>Node.js, Express, MongoDB Atlas, RESTful APIs, MVC Architecture, Render Deployment</p>
            </div>
            <a href="https://backend-js-uj6u.onrender.com/" target="_blank" rel="noreferrer">
              <WorkImage image="/images/Crud.png" alt="NotesApp Project" link="https://backend-js-uj6u.onrender.com/" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
