import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

// profile
import profileImage from "../assets/profileimage_ver2.jpg";

// social icons
import linkedinIco from "../assets/social-icons/linkedin.svg";
import instagramIco from "../assets/social-icons/instagram.svg";
import emailIco from "../assets/social-icons/email.svg";

const getMenuStyleFromLocalStorage = () => {
  const storedMenuStyle = localStorage.getItem("menuStyle");
  return storedMenuStyle ? storedMenuStyle : "";
};

const setMenuStyleInLocalStorage = (style) => {
  localStorage.setItem("menuStyle", style);
};
export default function MobileCard({ handleOpen }) {
  const location = useLocation();

  const [menuStyle, setMenuStyle] = useState(getMenuStyleFromLocalStorage());
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false);

  useEffect(() => {
    const isHomePage =
      location.pathname === "/" || location.pathname === "/contact";
    const newMenuStyle = isHomePage ? "mobileCard" : "closedMobileCard";

    if (!shouldPlayAnimation) {
      setMenuStyle(newMenuStyle);
      setMenuStyleInLocalStorage(newMenuStyle);
    } else {
      setShouldPlayAnimation(false);
    }
  }, [location.pathname]);

  // const horizontalanimations
  const verticalAnimation = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, yx: 100 },
  };

  return (
    <motion.div
      variants={verticalAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className={`${menuStyle}`}>
        <h3>Dóra Kelemen</h3>

        <div className="firstInformation">
          <div className="profileContainer">
            <img
              src={profileImage}
              width="100%"
              alt="DK profile image"
              title="profile image"
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="moreInformation">
            <p>Based in Budapest, Hungary</p>
          </div>
          <div className="ctaContainer">
            <div className="socialLinks">
              <Link
                to="https://www.linkedin.com/in/dora-kelemen/"
                target="_blank"
              >
                <img src={linkedinIco} width="100%" alt="linkedin icon"></img>
              </Link>
              <Link
                to="https://www.instagram.com/dori.kelemen/"
                target="_blank"
              >
                <img src={instagramIco} width="100%" alt="linkedin icon"></img>
              </Link>
              <Link to="mailto:">
                <img src={emailIco} width="100%" alt="linkedin icon"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
