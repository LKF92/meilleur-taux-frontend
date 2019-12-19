import React, { useState, useEffect } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";
import Cookies from "js-cookie";

export default function Step3({ globalState, setGlobalState, currentPage, setCurrentPage }) {
  const [useOfProperty, setUseOfProperty] = useState(
    globalState.useOfProperty ? globalState.useOfProperty : ""
  );

  console.log("STEP3 : useOfProperty ==> ", useOfProperty);

  useEffect(() => {
    let copy = { ...globalState };
    copy.useOfProperty = useOfProperty;
    setGlobalState(copy);
  }, [useOfProperty]);

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
      <PageNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
