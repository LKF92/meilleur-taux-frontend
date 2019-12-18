import React, { useState } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";

export default function Step3({ currentPage, setCurrentPage }) {
  const [selection, setSelection] = useState("Appartement");
  return (
    <div className="container">
      <h1 className="page-title">
        USAGE DU BIEN <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox
          text="Résidence Principale"
          setSelection={setSelection}
          selection={selection}
        />
        <SelectionBox
          text="Résidence Secondaire"
          setSelection={setSelection}
          selection={selection}
        />
        <SelectionBox
          text="Investissement Locatif"
          setSelection={setSelection}
          selection={selection}
        />
      </div>
      <PageNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
