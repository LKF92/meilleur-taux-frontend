import React, { useState, useEffect } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";

export default function Step1({ globalState, setGlobalState, setCurrentPage }) {
  const [typeOfProperty, setTypeOfProperty] = useState(globalState.typeOfProperty);

  // We add the choice of the user to the global state
  useEffect(() => {
    let copy = { ...globalState };
    copy.typeOfProperty = typeOfProperty;
    setGlobalState(copy);
  }, [typeOfProperty, setTypeOfProperty]);

  // Force a render of the component when the global state change (to get the inputs preselected).
  // With functional component, it doesn't create an infinite loop of render between globalState and typeOfProperty
  // since react doesn't render the component when 'changing' a state for its current value
  useEffect(() => {
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
      <PageNavigation
        currentPage={1}
        setCurrentPage={setCurrentPage}
        next={() => (typeOfProperty ? true : false)}
      />
    </div>
  );
}
