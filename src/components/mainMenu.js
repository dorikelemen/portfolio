import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";

export default function Menu() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [menuStyle, setMenuStyle] = useState("expandedMenu");
  const [iconState, setIconState] = useState(false);
  const [visibleArrowBack, setVisibleArrowBack] = useState(false);
  const { pathname } = useLocation();
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false);

  const toggleOpenMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const storedShouldPlayAnimation = localStorage.getItem(
      "shouldPlayAnimation"
    );

    if (storedShouldPlayAnimation) {
      localStorage.removeItem("shouldPlayAnimation");
      setShouldPlayAnimation(false);
    }
  }, []);

  // no scroll when menu is open on mobile

  useEffect(() => {
    const content = document.querySelector(".extendedContainer");
    if (content) {
      if (openMenu) {
        document.body.classList.add("no-scroll");
        content.classList.add("fadeEffect");
      } else {
        document.body.classList.remove("no-scroll");
        content.classList.remove("fadeEffect");
      }
    }
  }, []);

  useEffect(() => {
    // const page types
    const isProjectPage = pathname.includes("web") || pathname.includes("ui");
    const isContactPage = pathname === "/" || pathname === "/contact";

    const newMenuStyle = isContactPage ? "" : "expandedMenu";
    const hiddenIcon = isContactPage ? "" : "hiddenMenuIcon";

    const VisibleArrow = isProjectPage
      ? "extraMenuOptions"
      : "hiddenExtraOptions";

    if (!shouldPlayAnimation) {
      setMenuStyle(newMenuStyle);
      setIconState(hiddenIcon);
      setVisibleArrowBack(VisibleArrow);
    } else {
      setShouldPlayAnimation(false);
    }

    window.scrollTo(0, 0); // Scroll to the top of the page on every page load
  }, [pathname]);

  const playAnimation = () => {
    localStorage.setItem("shouldPlayAnimation", true);
    setShouldPlayAnimation(true);
  };

  // responsive menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setShowMobileMenu(window.innerWidth < 865);
    };

    // Call the handleResize function initially and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatedPage>
      {showMobileMenu ? (
        ""
      ) : (
        <div className={`menuComponent ${iconState}`} onClick={toggleOpenMenu}>
          {openMenu === false ? (
            <span className="material-icons-outlined menuIcon">menu</span>
          ) : (
            <span class="material-icons-outlined menuIcon">menu_open</span>
          )}
        </div>
      )}
      {showMobileMenu ? (
        <div className="menuItemContainer openMenu">
          <li className="link-wrapper menuOptions">
            <div className="menuLabelContainer">
              <NavLink
                to="/"
                activeClassName="active"
                onClick={() => setOpenMenu(false)}
              >
                <span class="material-icons-outlined navigationIcon">home</span>
              </NavLink>
              <p className="menuLabels">Home</p>
            </div>

            <div className="menuLabelContainer">
              <NavLink
                to="/about-me"
                activeClassName="active"
                onClick={() => setOpenMenu(false)}
              >
                <span class="material-icons-outlined navigationIcon">
                  person
                </span>
              </NavLink>
              <p className="menuLabels">About</p>
            </div>

            <div className="menuLabelContainer">
              <NavLink
                to="/education-and-experience"
                onClick={() => setOpenMenu(false)}
                activeClassName="active"
              >
                <span class="material-icons-outlined navigationIcon">
                  import_contacts
                </span>
              </NavLink>
              <p className="menuLabels">Experience</p>
            </div>

            <div className="menuLabelContainer">
              <NavLink
                to="/skills"
                activeClassName="active"
                onClick={() => setOpenMenu(false)}
              >
                <span class="material-icons-outlined navigationIcon">
                  build
                </span>
              </NavLink>

              <p className="menuLabels">Skills</p>
            </div>

            <div className="menuLabelContainer">
              <NavLink
                to="/projects"
                activeClassName="active"
                onClick={() => setOpenMenu(false)}
              >
                <span class="material-icons-outlined navigationIcon">work</span>
                <p className="menuLabels">Projects</p>
              </NavLink>
            </div>

            <div className="menuLabelContainer">
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={() => setOpenMenu(false)}
              >
                <span class="material-icons-outlined navigationIcon">
                  phone
                </span>
                <p className="menuLabels">Contact</p>
              </NavLink>
            </div>
          </li>
          <li
            className={`link-wrapper menuOptions goBackIcon ${visibleArrowBack}`}
          >
            <Link
              to="/projects"
              activeClassName="inactive"
              onClick={() => setOpenMenu(false)}
            >
              <span
                class="material-icons-outlined navigationIcon"
                style={{ color: "#f7c548" }}
              >
                arrow_back
              </span>
            </Link>
          </li>
        </div>
      ) : (
        <div
          className={`menuItemContainer ${
            openMenu ? "openMenu" : ""
          } ${menuStyle}`}
        >
          <li className="link-wrapper menuOptions">
            <div className="menuLabelContainer">
              <NavLink
                to="/"
                activeClassName="active"
                onClick={() => setOpenMenu(false)}
              >
                <span class="material-icons-outlined navigationIcon">home</span>
              </NavLink>
              <p className="menuLabels">Home</p>
            </div>

            <div className="menuLabelContainer">
              <NavLink
                to="/about-me"
                activeClassName="active"
                onClick={() => setOpenMenu(false)}
              >
                <span class="material-icons-outlined navigationIcon">
                  person
                </span>
              </NavLink>
              <p className="menuLabels">About</p>
            </div>

            <div className="menuLabelContainer">
              <NavLink
                to="/education-and-experience"
                onClick={() => setOpenMenu(false)}
                activeClassName="active"
              >
                <span class="material-icons-outlined navigationIcon">
                  import_contacts
                </span>
              </NavLink>
              <p className="menuLabels">Experience</p>
            </div>

            <div className="menuLabelContainer">
              <NavLink
                to="/skills"
                activeClassName="active"
                onClick={() => setOpenMenu(false)}
              >
                <span class="material-icons-outlined navigationIcon">
                  build
                </span>
              </NavLink>

              <p className="menuLabels">Skills</p>
            </div>

            <div className="menuLabelContainer">
              <NavLink
                to="/projects"
                activeClassName="active"
                onClick={() => setOpenMenu(false)}
              >
                <span class="material-icons-outlined navigationIcon">work</span>
                <p className="menuLabels">Projects</p>
              </NavLink>
            </div>

            <div className="menuLabelContainer">
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={() => setOpenMenu(false)}
              >
                <span class="material-icons-outlined navigationIcon">
                  phone
                </span>
                <p className="menuLabels">Contact</p>
              </NavLink>
            </div>
          </li>
          <li
            className={`link-wrapper menuOptions goBackIcon ${visibleArrowBack}`}
          >
            <Link
              to="/projects"
              activeClassName="inactive"
              onClick={() => setOpenMenu(false)}
            >
              <span
                class="material-icons-outlined navigationIcon"
                style={{ color: "#f7c548" }}
              >
                arrow_back
              </span>
            </Link>
          </li>
        </div>
      )}
    </AnimatedPage>
  );
}
