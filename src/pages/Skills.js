import React from "react";
import GaugeChart from "react-gauge-chart";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

// icons
import sharepoint from "../assets/icons/sharepoint-icon.png";
import powerapps from "../assets/icons/powerapps-icon.png";
import powerautoamte from "../assets/icons/powerautomate-icon.png";
import wordpress from "../assets/icons/wordpress-icon.png";
import epi from "../assets/icons/epi-icon.png";
import drupal from "../assets/icons/drupal-icon.png";
import magento from "../assets/icons/magento-icon.png";
import qbank from "../assets/icons/qbank-icon.png";
import jotform from "../assets/icons/jotform-icon.png";

export default function SkillSet() {
  // navs
  const microsoft = () => {
    window.location.href = "#microsoft";
  };

  const cms = () => {
    window.location.href = "#cms";
  };

  const design = () => {
    window.location.href = "#design";
  };

  const chartStyle = {
    width: "70%",
    margin: "auto",
  };

  const colors = ["#587792", "#F6AE2D", "#EE6055"];

  return (
    <div className="extendedContainer Skills">
      <div className="row justify-content-between justify-content-center secondaryMenu">
        <div className="col-lg-3 col-md-3 col-12">
          <h1>Skills</h1>
        </div>
        <div className="col-lg-9 col-md-9 col-12">
          <div className="filterContainer">
            <p className="navigationHelper">Quick navigation</p>
            <button className="simpleButton" onClick={microsoft}>
              Power Platform
            </button>
            <button className="simpleButton" onClick={cms}>
              CMS platforms
            </button>
            <button className="simpleButton" onClick={design}>
              Design Applications
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="skillContainer" id="web">
            <div className="chartContainer">
              <GaugeChart
                style={chartStyle}
                id="frontend-gauge"
                nrOfLevels={3}
                cornerRadius={10}
                colors={colors}
                arcWidth={0.1}
                percent={0.65}
                animate={true}
                animDelay={200}
                animateDuration={2500}
                hideText={true}
                needleBaseColor="var(--lightWhite)"
                arcsLength={[5, 2, 2]}
              />
            </div>

            <h4>Frontend Development</h4>

            <div className="projectTechnologies">
              <div className="technologyCategories">HTML5</div>
              <div className="technologyCategories">CSS3</div>
              <div className="technologyCategories">React</div>
              <div className="technologyCategories">JavaScript</div>
            </div>

            <div style={{ width: "100%" }}>
              <p
                style={{
                  marginBottom: ".3rem",
                }}
              >
                I'm also familiar with:
              </p>
              <span className="familiarCat">TypeScipt</span>
              <span className="familiarCat">Bootstrap</span>
              <span className="familiarCat">Material UI</span>
              <span className="familiarCat">Git</span>
              <span className="familiarCat">Node.JS</span>
              <span className="familiarCat">Azure</span>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <div className="skillContainer" id="ui">
            <div className="chartContainer">
              <GaugeChart
                id="design-gauge"
                style={chartStyle}
                nrOfLevels={3}
                cornerRadius={10}
                colors={colors}
                arcWidth={0.1}
                percent={0.85}
                animate={true}
                animDelay={1500}
                animateDuration={2500}
                hideText={true}
                needleBaseColor="var(--lightWhite)"
                arcsLength={[5, 2, 2]}
              />
            </div>
            <h4> UI/UX Design & Prototyping</h4>
            <div className="projectTechnologies">
              <div className="technologyCategories">Figma</div>
              <div className="technologyCategories">Adobe CC</div>
            </div>
            <div>
              <p
                style={{
                  marginBottom: ".3rem",
                }}
              >
                I'm also familiar with:
              </p>
              <span className="familiarCat">Webflow</span>

              <span className="familiarCat">Miro</span>
              <span className="familiarCat">ObjectiveC</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="skillContainer"
        style={{
          marginBottom: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <div className="microsoftContainer" id="microsoft">
          <h3>It's time for Microsoft!</h3>
          <p>
            Well...apart from the general knowledge I have in the "basic"
            Microsoft applications, like Outlook, Excel, Word, PowerPoint, I
            have more extensive knowledge in the following areas:
          </p>
          <div className="row" style={{ margin: "1rem 0" }}>
            <div className="col-lg-4 col-md-6 col-12" id="sharepoint">
              <img
                src={sharepoint}
                width="100%"
                alt="sharepoint logo"
                className="serviceIcons"
              ></img>
              <p>SharePoint</p>
              <p>
                Power Apps empowers you to build personalized business
                applications without coding, tailored to your unique
                requirements.
              </p>
              <Link
                to="https://support.microsoft.com/en-us/office/what-is-sharepoint-97b915e6-651b-43b2-827d-fb25777f446f"
                target="_blank"
              >
                <button className="textButton">Read more</button>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" id="powerautomate">
              <img
                src={powerautoamte}
                width="100%"
                alt="powerautomate logo"
                className="serviceIcons"
              ></img>
              <p>Power Automate</p>
              <p>
                Power Automate enables you to automate and streamline tasks by
                creating customized workflows and seamless integrations.
              </p>
              <Link to="https://powerautomate.microsoft.com/" target="_blank">
                <button className="textButton">Read more</button>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" id="powerapps">
              <img
                src={powerapps}
                width="100%"
                alt="powerapps logo"
                className="serviceIcons"
              ></img>
              <p>Power Apps</p>
              <p>
                Power Apps empowers you to build personalized business
                applications without coding, tailored to your unique
                requirements.
              </p>
              <Link
                to="https://learn.microsoft.com/en-us/power-apps/powerapps-overview"
                target="_blank"
              >
                <button className="textButton">Read more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h5 style={{ margin: 0, padding: 0 }}>
            I also have Microsoft specific PnP PowerShell knowledge
          </h5>
        </AccordionSummary>
        <AccordionDetails>
          <h6></h6>
          <p style={{ fontSize: "14.5px" }}>
            PnP (Patterns and Practices) is a Microsoft technology initiative
            that provides developers with reusable code snippets, best
            practices, and guidance specifically tailored for SharePoint.
            <br></br>
            <br></br> It enables developers to streamline and enhance various
            areas of SharePoint, such as customizing site templates, creating
            custom web parts, building workflows, automating content management,
            implementing branding and theming, and integrating external systems.
            With PnP, developers can leverage proven patterns and practices to
            accelerate SharePoint development, improve user experience, and
            extend the capabilities of SharePoint-based solutions.
          </p>
          <p>(most likely used in SharePoint environment)</p>
          <Link
            to="https://learn.microsoft.com/en-us/powershell/sharepoint/sharepoint-pnp/sharepoint-pnp-cmdlets"
            target="_blank"
          >
            <button className="textButton">Read more on PnP</button>
          </Link>
        </AccordionDetails>
      </Accordion>
      <div className="softwareKnowledge" id="cms">
        <h3>Website related platform & software kowledge knowledge</h3>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12" id="magento">
            <img
              src={magento}
              width="100%"
              alt="magento logo"
              className="serviceIcons"
            ></img>
            <p>Magento 1 & 2</p>

            <div className="softwareDescription">
              <p>
                An e-commerce platform for scalable online stores with advanced
                features.
              </p>
            </div>
            <Link
              to="https://support.microsoft.com/en-us/office/what-is-sharepoint-97b915e6-651b-43b2-827d-fb25777f446f"
              target="_blank"
            >
              <button className="textButton">Read more</button>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-12" id="epi">
            <img
              src={epi}
              width="100%"
              alt="epi logo"
              className="serviceIcons"
            ></img>
            <p>Episerver</p>
            <div className="softwareDescription">
              <p>
                Content management and digital experience platform for
                personalized experiences.
              </p>
            </div>
            <Link
              to="https://support.microsoft.com/en-us/office/what-is-sharepoint-97b915e6-651b-43b2-827d-fb25777f446f"
              target="_blank"
            >
              <button className="textButton">Read more</button>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-12" id="wordpress">
            <img
              src={wordpress}
              width="100%"
              alt="wordpress logo"
              className="serviceIcons"
            ></img>
            <p>WordPress</p>
            <div className="softwareDescription">
              <p>
                Popular CMS with customizable themes, plugins, and easy content
                management.
              </p>
              <Link
                to="https://support.microsoft.com/en-us/office/what-is-sharepoint-97b915e6-651b-43b2-827d-fb25777f446f"
                target="_blank"
              >
                <button className="textButton">Read more</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" id="drupal">
            <img
              src={drupal}
              width="100%"
              alt="drupal logo"
              className="serviceIcons"
            ></img>
            <p>Drupal</p>
            <div className="softwareDescription">
              <p>
                Flexible CMS for building websites, intranets, and web
                applications.
              </p>
              <Link
                to="https://support.microsoft.com/en-us/office/what-is-sharepoint-97b915e6-651b-43b2-827d-fb25777f446f"
                target="_blank"
              >
                <button className="textButton">Read more</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" id="jotform">
            <img
              src={jotform}
              width="100%"
              alt="jotform logo"
              className="serviceIcons"
            ></img>
            <p>Jotform</p>
            <div className="softwareDescription">
              <p>
                Versatile online form builder for easy creation and analysis of
                forms and surveys.
              </p>
              <Link
                to="https://support.microsoft.com/en-us/office/what-is-sharepoint-97b915e6-651b-43b2-827d-fb25777f446f"
                target="_blank"
              >
                <button className="textButton">Read more</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" id="qbank">
            <img
              src={qbank}
              width="100%"
              alt="qbank logo"
              className="serviceIcons"
            ></img>
            <p>QBank</p>
            <div className="softwareDescription">
              <p>
                DAM system for centralizing and managing digital assets
                efficiently.
              </p>
              <Link
                to="https://support.microsoft.com/en-us/office/what-is-sharepoint-97b915e6-651b-43b2-827d-fb25777f446f"
                target="_blank"
              >
                <button className="textButton">Read more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="designKnowledge" id="design">
        <div className="designContainer">
          <h3>Figma is the way to go!</h3>
          <p>
            Figma has become my top choice for design. It's incredibly
            user-friendly, making design tasks a breeze.
            <br></br>
            <br></br>
            Collaborating with clients and team members is seamless and
            real-time. Plus, Figma works on both Mac and PC, so you're not
            limited by your device. The community around Figma is amazing too,
            with talented designers sharing their work and ideas. The
            availability of plugins is a game-changer, boosting productivity.
            Trust me, Figma is a game-changer for designers looking for
            simplicity, collaboration, and a supportive community. Give it a try
            and see the difference!
          </p>
        </div>
      </div>
    </div>
  );
}
