import React, { useState, useEffect } from "react";
import PageNavigation from "./PageNavigation";
import axios from "axios";
import colors from "../colors";
import InputRow from "./InputRow";
import SelectRow from "./SelectRow";
const countriesList = [
  "Select a country",
  "France",
  "Italy",
  "Netherland",
  "Germany",
  "Spain",
  "UK"
];

export default function Step5({ globalState, setGlobalState, setCurrentPage }) {
  const [country, setCountry] = useState(
    globalState.locationOfProperty ? globalState.locationOfProperty.country : ""
  );
  const [city, setCity] = useState(
    globalState.locationOfProperty ? globalState.locationOfProperty.city : ""
  );
  const [data, setData] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://vicopo.selfbuild.fr/search/" + city);
      setData(response.data);
      setShowModal(true);
    })();
  }, [city]);

  useEffect(() => {
    let copy = { ...globalState };
    copy.locationOfProperty = { country: country, city: city };
    setGlobalState(copy);
  }, [country, city]);

  useEffect(() => {
    if (globalState.locationOfProperty) {
      setCity(globalState.locationOfProperty.city);
      setCountry(globalState.locationOfProperty.country);
    }
  }, [globalState]);

  return (
    <div className="container">
      <h1 className="page-title">OÙ SE SITUE LE BIEN À FINANCER ?</h1>
      <div className="form-section">
        <SelectRow
          data={countriesList}
          text="Dans quel pays se situe votre projet ?*"
          value={country}
          setValue={setCountry}
          style={{ backgroundColor: colors.grey }}
        />
        <div className="input-with-autocomplete">
          <InputRow
            text="Dans quelle ville se situe votre projet ?*"
            value={city}
            setValue={setCity}
          />
          {showModal && data && (
            <div className="vicopo">
              {data.cities.map((choice, index) => (
                <p
                  key={index}
                  className="vicopo-choice"
                  onClick={() => {
                    setCity(`${choice.city} (${choice.code})`);
                    setShowModal(false);
                  }}
                >
                  {`${choice.city} (${choice.code})`}
                </p>
              ))}
            </div>
          )}
        </div>

        <p className="form-info">
          La connaissance du code postal du bien permettra de calculer les frais de notaire selon
          les conditions en vigueur dans le département concerné. Si vous êtes en recherche de bien
          sur plusieurs communes, indiquez une commune ciblée.
        </p>
      </div>
      <PageNavigation
        currentPage={5}
        setCurrentPage={setCurrentPage}
        next={() => (country && city ? true : false)}
      />
    </div>
  );
}
