import React, { useState, useEffect } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";

export default function Step2({ globalState, setGlobalState, setCurrentPage }) {
  const [conditionOfProperty, setConditionOfProperty] = useState(globalState.conditionOfProperty);
  // Force another render of the component when the global state change
  useEffect(() => {
    setConditionOfProperty(globalState.conditionOfProperty);
  }, [globalState]);

  useEffect(() => {
    let copy = { ...globalState };
    copy.conditionOfProperty = conditionOfProperty;
    setGlobalState(copy);
  }, [conditionOfProperty]);

  return (
    <div className="container">
      <h1 className="page-title">
        ÉTAT DU BIEN <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox
          text="Ancien"
          setSelection={setConditionOfProperty}
          selection={conditionOfProperty}
        />
        <SelectionBox
          text="Neuf"
          setSelection={setConditionOfProperty}
          selection={conditionOfProperty}
        />
      </div>
      <PageNavigation
        currentPage={2}
        setCurrentPage={setCurrentPage}
        next={() => (conditionOfProperty ? true : false)}
      />
    </div>
  );
}
