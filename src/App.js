import { React, useEffect, useState } from "react";

// react components
import { BrowserRouter as Router } from "react-router-dom";

// components
import Menu from "./components/mainMenu";
import InfoCard from "./components/InfoCard";
import MobileCard from "./components/MobileCard";

// styles
import "./App.css";
import "./styles/global.css";
import "./styles/infocard.css";
import "./styles/projects.css";
import "./styles/interactive-cv.css";
import "./styles/mobile.css";

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
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
    <div className="extended-body">
      <Router>
        {showMobileMenu ? <MobileCard /> : <InfoCard />}
        <Menu />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
