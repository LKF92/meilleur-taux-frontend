import React, { useState } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";

export default function Step2({ currentPage, setCurrentPage }) {
  const [selection, setSelection] = useState("Appartement");
  return (
    <div className="container">
      <h1 className="page-title">
        ÉTAT DU BIEN <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox text="Ancien" setSelection={setSelection} selection={selection} />
        <SelectionBox text="Neuf" setSelection={setSelection} selection={selection} />
      </div>
      <PageNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
