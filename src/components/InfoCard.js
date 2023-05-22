import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedModal from "./Modal";

// profile
import profileImage from "../assets/profileimage_ver2.jpg";

// social icons
import linkedinIco from "../assets/social-icons/linkedin.svg";
import instagramIco from "../assets/social-icons/instagram.svg";
import emailIco from "../assets/social-icons/email.svg";
import MobileCard from "./MobileCard";

const getMenuStyleFromLocalStorage = () => {
  const storedMenuStyle = localStorage.getItem("menuStyle");
  return storedMenuStyle ? storedMenuStyle : "";
};

const setMenuStyleInLocalStorage = (style) => {
  localStorage.setItem("menuStyle", style);
};
export default function InfoCard({ handleOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const [menuStyle, setMenuStyle] = useState(getMenuStyleFromLocalStorage());
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false);

  useEffect(() => {
    const isHomePage =
      location.pathname === "/" || location.pathname === "/contact";
    const newMenuStyle = isHomePage ? "infoCard" : "collapsedCard";

    if (!shouldPlayAnimation) {
      setMenuStyle(newMenuStyle);
      setMenuStyleInLocalStorage(newMenuStyle);
    } else {
      setShouldPlayAnimation(false);
    }
  }, [location.pathname]);

  // Function to trigger the animation when needed
  const playAnimation = () => {
    setShouldPlayAnimation(true);
  };

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const horizontalanimations
  const horizontalAnimation = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      variants={horizontalAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className={`${menuStyle}`}>
        <AnimatedModal
          isOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
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
          <div className="currentEmployment">
            <p>Current position:</p>
            <p>Web Professional at Ericsson</p>
          </div>
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
            <div className="contactMe">
              <button
                className="contactButton"
                style={{
                  width: "100%",
                }}
                variant="contained"
                color="secondary"
                onClick={handleOpenModal}
              >
                <span class="material-icons-outlined">forward_to_inbox</span>
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
