import React, { useState, useEffect } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";

export default function Step4({ globalState, setGlobalState, setCurrentPage }) {
  const [currentSituation, setCurrentSituation] = useState(globalState.currentSituation);

  useEffect(() => {
    let copy = { ...globalState };
    copy.currentSituation = currentSituation;
    setGlobalState(copy);
  }, [currentSituation]);

  useEffect(() => {
    setCurrentSituation(globalState.currentSituation);
  }, [globalState]);

  return (
    <div className="container">
      <h1 className="page-title">
        VOTRE SITUATION ACTUELLE <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox
          text="Locataire"
          setSelection={setCurrentSituation}
          selection={currentSituation}
        />
        <SelectionBox
          text="Propriétaire"
          setSelection={setCurrentSituation}
          selection={currentSituation}
        />
        <SelectionBox
          text="Bénéficiaire d'un logement de fonction"
          setSelection={setCurrentSituation}
          selection={currentSituation}
        />
        <SelectionBox
          text="Hébergé à titre gratuit"
          setSelection={setCurrentSituation}
          selection={currentSituation}
        />
      </div>
      <PageNavigation
        currentPage={4}
        setCurrentPage={setCurrentPage}
        next={() => (currentSituation ? true : false)}
      />
    </div>
  );
}
