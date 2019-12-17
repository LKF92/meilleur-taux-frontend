import React, { useState } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";

export default function Step1() {
  const [selection, setSelection] = useState("Appartement");
  return (
    <div className="container">
      <h1 className="page-title">
        TYPE DE BIEN <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox text="Maison" setSelection={setSelection} selection={selection} />
        <SelectionBox text="Appartement" setSelection={setSelection} selection={selection} />
      </div>
    </div>
  );
}
