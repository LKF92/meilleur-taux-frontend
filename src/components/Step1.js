import React, { useState, useEffect } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";

export default function Step1({ globalState, setGlobalState, currentPage, setCurrentPage }) {
  const initialState = globalState.typeOfProperty;
  const [typeOfProperty, setTypeOfProperty] = useState(initialState);

  console.log("STEP1 : typeOfProperty ==> ", typeOfProperty);

  // We add the choice of the user to the global state
  useEffect(() => {
    let copy = { ...globalState };
    copy.typeOfProperty = typeOfProperty;
    setGlobalState(copy);
  }, [typeOfProperty, setTypeOfProperty]);

  // Force another render of the component when the global state change
  useEffect(() => {
    console.log("SHOULD RERENDER FOR FINAL state");
    setTypeOfProperty(globalState.typeOfProperty);
  }, [globalState]);

  return (
    <div className="container">
      <h1 className="page-title">
        TYPE DE BIEN <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox text="Maison" setSelection={setTypeOfProperty} selection={typeOfProperty} />
        <SelectionBox
          text="Appartement"
          setSelection={setTypeOfProperty}
          selection={typeOfProperty}
        />
      </div>
      <PageNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
