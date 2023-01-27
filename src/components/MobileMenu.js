import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { ActiveNumberContextObj } from "../context/ActiveNumberProvider";
import Navigation from "./Navigation";

const MobileMenu = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const { activeNumber } = useContext(ActiveNumberContextObj);

  const handleClick = () => {
    setIsNavActive(!isNavActive);
  };

  useEffect(() => {
    setIsNavActive(false);
  }, [activeNumber]);

  return (
    <div className="mainFrame">
      <div
        className={isNavActive ? "mobileMenuicon active" : "mobileMenuicon"}
        onClick={handleClick}
      >
        {isNavActive ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>

      <div
        className={isNavActive ? "mobileNavigation active" : "mobileNavigation"}
      >
        <div className="menu">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
