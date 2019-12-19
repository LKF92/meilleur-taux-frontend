import React, { useState, useEffect } from "react";
import InputRow from "./InputRow";
import colors from "../colors";
import PageNavigation from "./PageNavigation";
import Cookies from "js-cookie";

export default function Step6({ globalState, setGlobalState, currentPage, setCurrentPage }) {
  const [valueOfProperty, setValueOfProperty] = useState(0);
  const [costOfRenovation, setCostOfRenovation] = useState(0);
  const [notaryFees, setNotaryFees] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    let copy = { ...globalState };
    copy.estimatedValueOfProject = {
      valueOfProperty: valueOfProperty,
      costOfRenovation: costOfRenovation,
      notaryFees: notaryFees,
      totalBudget: totalBudget
    };
    setGlobalState(copy);
  }, [valueOfProperty, costOfRenovation, notaryFees, totalBudget]);

  return (
    <div className="container">
      <h1 className="page-title">DÉFINISSONS LE MONTANT DE VOTRE PROJET</h1>
      <div className="form-section">
        <InputRow
          text="Montant estimé de votre acquisition ?*"
          value={valueOfProperty}
          setValue={setValueOfProperty}
          after="€"
          style={{ backgroundColor: colors.grey }}
        />
        <InputRow
          text="Montant estimé des travaux ?"
          value={costOfRenovation}
          setValue={setCostOfRenovation}
          after="€"
        />
        <InputRow
          text="Frais de notaire *"
          value={notaryFees}
          setValue={setNotaryFees}
          style={{ backgroundColor: colors.grey }}
          after="€"
        />
        <InputRow
          text="Budget total estimé du projet"
          value={totalBudget}
          setValue={setTotalBudget}
          after="€"
        />
      </div>
      <PageNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      />
    </div>
  );
}
