import React, { useState } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";

export default function Step4({ currentPage, setCurrentPage }) {
  const [selection, setSelection] = useState("Appartement");
  return (
    <div className="container">
      <h1 className="page-title">
        VOTRE SITUATION ACTUELLE <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox text="Locataire" setSelection={setSelection} selection={selection} />
        <SelectionBox text="Propriétaire" setSelection={setSelection} selection={selection} />
        <SelectionBox
          text="Bénéficiaire d'un logement de fonction"
          setSelection={setSelection}
          selection={selection}
        />
        <SelectionBox
          text="Hébergé à titre gratuit"
          setSelection={setSelection}
          selection={selection}
        />
      </div>
      <PageNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
