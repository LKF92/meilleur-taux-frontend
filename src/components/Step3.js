import React, { useState, useEffect } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";

export default function Step3({ globalState, setGlobalState, setCurrentPage }) {
  const [useOfProperty, setUseOfProperty] = useState(globalState.useOfProperty);

  useEffect(() => {
    let copy = { ...globalState };
    copy.useOfProperty = useOfProperty;
    setGlobalState(copy);
  }, [useOfProperty]);

  useEffect(() => {
    setUseOfProperty(globalState.useOfProperty);
  }, [globalState]);

  return (
    <div className="container">
      <h1 className="page-title">
        USAGE DU BIEN <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox
          text="Résidence Principale"
          setSelection={setUseOfProperty}
          selection={useOfProperty}
        />
        <SelectionBox
          text="Résidence Secondaire"
          setSelection={setUseOfProperty}
          selection={useOfProperty}
        />
        <SelectionBox
          text="Investissement Locatif"
          setSelection={setUseOfProperty}
          selection={useOfProperty}
        />
      </div>
      <PageNavigation
        currentPage={3}
        setCurrentPage={setCurrentPage}
        next={() => (useOfProperty ? true : false)}
      />
    </div>
  );
}
