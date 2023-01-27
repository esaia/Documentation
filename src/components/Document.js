import React, { useContext, useEffect, useRef } from "react";
import { ActiveNumberContextObj } from "../context/ActiveNumberProvider";

const Document = () => {
  const introduction = (
    <div className="introduction">
      <h1>1. Introduction</h1>
      <p>
        There are many options on Android for deferrable background work. This
        codelab covers WorkManager, a backwards compatible, flexible and simple
        library for deferrable background work. WorkManager is the recommended
        task scheduler on Android for deferrable work, with a guarantee to be
        executed.
      </p>
      <h2>What is WorkManager</h2>
      <p>
        WorkManager is part of Android Jetpack and an Architecture Component for
        background work that needs a combination of opportunistic and guaranteed
        execution. Opportunistic execution means that WorkManager will do your
        background work as soon as it can. Guaranteed execution means that
        WorkManager will take care of the logic to start your work under a
        variety of situations, even if you navigate away from your app.
        <br />
        <br />
        WorkManager is an incredibly flexible library that has many additional
        benefits. These include:
        <br />
        <br />
      </p>

      <ul>
        <li>Support for both asynchronous one-off and periodic tasks</li>
        <li>
          Support for constraints such as network conditions, storage space, and
          charging status
        </li>
        <li>
          Chaining of complex work requests, including running work in parallel
        </li>
        <li>Output from one work request used as input for the next</li>
        <li>
          Handling API level compatibility back to API level 14 (see note)
        </li>
        <li> Working with or without Google Play services</li>
        <li> Following system health best practices</li>
        <li> LiveData support to easily display work request state in UI</li>
      </ul>

      <div className="notediv">
        <h3>Note</h3>
        <p>
          WorkManager sits on top of a few APIs such as JobScheduler and
          AlarmManager. WorkManager picks the right APIs to use, based on
          conditions like the user's device API level. To learn more, check out
          the WorkManager documentation.
        </p>
      </div>

      <h2>When to use WorkManager</h2>
      <p>Some examples of tasks that are a good use of WorkManager:</p>
      <p>
        The WorkManager library is a good choice for tasks that are useful to
        complete, even if the user navigates away from the particular screen or
        your app.
      </p>

      <ul>
        <li>Uploading logs</li>
        <li>Applying filters to images and saving the image</li>
        <li>Periodically syncing local data with the network</li>
      </ul>

      <p>
        WorkManager offers guaranteed execution, and not all tasks require that.
        As such, it is not a catch-all for running every task off of the main
        thread. For more details about when to use WorkManager, check out the
        Guide to background processing.
      </p>
      <h2>What you'll build</h2>

      <p>
        These days, smartphones are almost too good at taking pictures. Gone are
        the days a photographer could take a reliably blurry picture of
        something mysterious.
      </p>

      <p>
        In this codelab you'll be working on Blur-O-Matic, an app that blurs
        photos and saves the result to a file. Was that the Loch Ness monster or
        evelopera toy submarine? With Blur-O-Matic, no-one will ever know.
      </p>
    </div>
  );

  const navigatinArray = [
    introduction,
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

  const containerRef = useRef({});
  const mainRef = useRef();

  const handleNext = () => {
    setActiveNumber(activeNumber + 1);
  };

  const handleBack = () => {
    setActiveNumber(activeNumber - 1);
  };

  // change activeNunmber
  useEffect(() => {
    if (activeNumber < 0) {
      const lastIndex = navigatinArray.length - 1;
      setActiveNumber(lastIndex);
    } else if (activeNumber > navigatinArray.length - 1) {
      setActiveNumber(0);
    }
  }, [activeNumber, navigatinArray]);

  // container height
  useEffect(() => {
    let containerHeight =
      containerRef.current[activeNumber]?.getBoundingClientRect().height;
    mainRef.current.style.height = `${containerHeight + 100}px`;

    function handleResize() {
      let containerHeight =
        containerRef.current[activeNumber]?.getBoundingClientRect().height;

      mainRef.current.style.height = `${containerHeight + 200}px`;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeNumber]);

  return (
    <div className="document" ref={mainRef}>
      {navigatinArray.map((item, i) => {
        let classname;
        //  1         //0
        if (activeNumber === i) {
          classname = "containerWrap active";
        } else if (
          activeNumber - 1 === i ||
          (activeNumber - 1 < 0 && i === navigatinArray.length - 1)
        ) {
          classname = "containerWrap next";
        } else {
          classname = "containerWrap prev";
        }

        return (
          <div className={classname} key={i}>
            <div
              className="container"
              ref={(element) => (containerRef.current[i] = element)}
            >
              {item}
            </div>
          </div>
        );
      })}

      {/* button */}

      {activeNumber !== 0 && (
        <button className="backBtn" onClick={handleBack}>
          Back
        </button>
      )}

      {activeNumber !== navigatinArray.length - 1 && (
        <button className="nextBtn" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
};

export default Document;
