import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Navigation from "./Navigation";

const MobileMenu = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const handleClick = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div className="mainFrame">
      <div
        className={isNavActive ? "mobileMenuicon active" : "mobileMenuicon"}
        onClick={handleClick}
      >
        {isNavActive ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>

      <div className={isNavActive ? "mobileMenu active" : "mobileMenu"}>
        <div
          className={
            isNavActive ? "mobileNavigation active" : "mobileNavigation"
          }
        >
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
