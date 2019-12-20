import React, { useState, useEffect } from "react";
import InputRow from "./InputRow";
import colors from "../colors";
import PageNavigation from "./PageNavigation";

export default function Step6({ globalState, setGlobalState, setCurrentPage }) {
  const [valueOfProperty, setValueOfProperty] = useState(
    globalState.estimatedValueOfProject ? globalState.estimatedValueOfProject.valueOfProperty : 0
  );
  const [costOfRenovation, setCostOfRenovation] = useState(
    globalState.estimatedValueOfProject ? globalState.estimatedValueOfProject.costOfRenovation : 0
  );
  const [notaryFees, setNotaryFees] = useState("");
  const [totalBudget, setTotalBudget] = useState("");
  const [isWrong, setIsWrong] = useState(false);

  // Copy any value to state
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

  // Get values from previous session from cookies (from App.js)
  useEffect(() => {
    if (globalState.estimatedValueOfProject) {
      setValueOfProperty(Number(globalState.estimatedValueOfProject.valueOfProperty));
      setCostOfRenovation(Number(globalState.estimatedValueOfProject.costOfRenovation));
    }
  }, [globalState]);

  //Calculate total cost & check wether inputs are NaN or left to 0
  useEffect(() => {
    if (isNaN(valueOfProperty) || isNaN(costOfRenovation)) {
      setIsWrong(true);
    } else if (valueOfProperty > 0 && costOfRenovation > 0) {
      setIsWrong(false);
      setTotalBudget(Number(valueOfProperty) + Number(costOfRenovation) + Number(notaryFees));
    }
  }, [valueOfProperty, costOfRenovation]);

  // Calculate notary fees depending on the condition of the property
  useEffect(() => {
    const getNotaryFees = () => {
      if (valueOfProperty && !isNaN(valueOfProperty)) {
        if (globalState.conditionOfProperty === "Neuf") {
          setNotaryFees((valueOfProperty * 1.8) / 100);
        } else if (globalState.conditionOfProperty === "Ancien") {
          setNotaryFees((valueOfProperty * 7.38) / 100);
        }
      }
    };
    getNotaryFees();
  }, [valueOfProperty]);

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
        {isWrong && <p style={errorMessage}>Seuls les nombres sont acceptés dans ce champs</p>}
        <InputRow
          text="Montant estimé des travaux ?*"
          value={costOfRenovation}
          setValue={setCostOfRenovation}
          after="€"
        />
        {isWrong && <p style={errorMessage}>Seuls les nombres sont acceptés dans ce champs</p>}
        <InputRow
          text="Frais de notaire"
          value={notaryFees}
          style={{ backgroundColor: colors.grey }}
          readOnly={true}
          after="€"
        />
        <InputRow
          text="Budget total estimé du projet"
          value={totalBudget}
          readOnly={true}
          after="€"
        />
      </div>
      <PageNavigation
        currentPage={6}
        setCurrentPage={setCurrentPage}
        next={() => (valueOfProperty && costOfRenovation && !isWrong ? true : false)}
      />
    </div>
  );
}
const errorMessage = {
  color: "red",
  fontSize: "10px",
  margin: "2px 0",
  textAlign: "center"
};
