import React, { useContext } from "react";
import { ActiveNumberContextObj } from "../context/ActiveNumberProvider";

const Navigation = () => {
  const navigatinArray = [
    "Introduction",
    "Getting set up",
    "Add WorkManager to your app",
    "Make your first WorkRequest",
    "Add input and output",
    "Chain your Work",
    "Ensure unique work",
    "Tag and display Work status",
    "Show final output",
    "Cancel work",
    "Work constraints",
    "Congratulations",
  ];

  const { activeNumber, setActiveNumber } = useContext(ActiveNumberContextObj);

  return (
    <div className="navigation">
      {navigatinArray.map((item, i) => {
        let classname = "item";
        if (i > activeNumber) {
          classname = "item ";
        } else if (i === activeNumber) {
          classname = "item active";
        } else {
          classname = "item lasts";
        }

        return (
          <div className={classname} key={i} onClick={() => setActiveNumber(i)}>
            <div>{i + 1} </div>
            <h2>{item}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
