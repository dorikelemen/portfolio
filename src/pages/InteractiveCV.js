import React from "react";

// compontent
import AnimatedPage from "../components/AnimatedPage";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function InteractiveCV() {
  return (
    <AnimatedPage>
      <div className="extendedContainer">
        <h1>Education & Experience</h1>
        <div className="experienceChart">
          <ul className="rb">
            <li className="rb-item" ng-repeat="itembx">
              <div className="employmentTitle">
                <p className="timestamp">2022 June - Present</p>
                <p className="item-title">Web Professional</p>
                <p className="item-subtitle">Ericsson</p>
              </div>
              <div className="employmentDetails">
                <ul></ul>
              </div>
            </li>
            <li className="rb-item" ng-repeat="itembx">
              <div className="employmentTitle">
                <p className="timestamp">2021 - 2022</p>
                <p className="item-title">Web Editor</p>
                <p className="item-subtitle">Lighware Visual Engineering</p>
                <Link to="/projets">
                  <button className="textButton">Check my work</button>
                </Link>
              </div>
              <div className="employmentDetails">
                <ul>
                  <li>
                    Complete administration, editing and updating of the website
                  </li>
                  <li>
                    Website redesigning and optimalization work on older landing
                    pages
                  </li>
                  <li>
                    Designing and creating main campaign landing pages, news
                    articles and a completely new home page
                  </li>
                  <li>
                    Creating a new automatic report system to gain more insight
                    of website traffic and user experience
                  </li>
                  <li>Integrating Hotjar, Analytics into the site</li>
                  <li>
                    Working closely with the sales department to solve regional
                    offices’ needs
                  </li>
                  <li>
                    Planning, designing and creating future website modules &
                    widgets
                  </li>
                </ul>
              </div>
            </li>

            <li className="rb-item" ng-repeat="itembx">
              <div className="employmentTitle">
                <p className="timestamp">2020 - 2021</p>
                <p className="item-title">E-Commerce Specialist</p>
                <p className="item-subtitle">
                  Studio Moderna 2000 TV-Shop Kft.
                </p>
              </div>
              <div className="employmentDetails">
                <ul>
                  <li>
                    Complete administration, editing and updating of the web
                    store and pages
                  </li>
                  <li>Supporting and setting up online campaigns</li>
                  <li>
                    Creating graphical elements for the website and
                    advertisements
                  </li>
                  <li>Product management and translations</li>
                  <li>Creating reports based on website traffic and sales</li>
                </ul>
              </div>
            </li>

            <li className="rb-item" ng-repeat="itembx">
              <div className="employmentTitle">
                <p className="timestamp">2019 - 2020</p>
                <p className="item-title">Junior media designer </p>
                <p className="item-subtitle">Central Home</p>
              </div>
              <div className="employmentDetails">
                <ul>
                  <li>Editing brochures, posters and billboard signs</li>
                  <li>Creating monthly newsletters in the MailChimp syste</li>
                  <li>Designing mockups for future corporate identity plans</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h5>Studies</h5>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <p>Qualifications</p>
                <div className="qualificationSection">
                  <ul>
                    <li>
                      Budapest University of Technology and Economics
                      <span style={{ display: "block" }}>
                        BA degree in Communication and media Visual
                        communication specialisation
                      </span>
                      <span className="qualiDate">Budapest, 2016 - 2020</span>
                    </li>
                    <li>
                      Andrássy György Catholic Business Academy
                      <span style={{ display: "block" }}>
                        vocational certificate in marketing, tourism and
                        hospitality studies
                      </span>
                      <span className="qualiDate">Eger, 2011 - 2016</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <h3>Other courses & trainings</h3>
                <div className="qualificationSection">
                  <ul>
                    <li>
                      Tour guide
                      <span style={{ display: "block" }}>
                        Andrássy György Catholic Business Academy
                      </span>
                      <span className="qualiDate">Budapest, 2016</span>
                    </li>
                    <li>
                      ECDL
                      <span style={{ display: "block" }}>
                        Andrássy György Catholic Business Academy
                      </span>
                      <span className="qualiDate">Eger, 2016</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h5>Language proficiency</h5>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <ul>
                  <li>
                    Hungarian
                    <span style={{ display: "block" }}>native language</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <ul>
                  <li>
                    English - superlative
                    <span style={{ display: "block" }}>
                      C1 complex certificate
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <ul>
                  <li>
                    German
                    <span style={{ display: "block" }}>basic level</span>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </AnimatedPage>
  );
}
