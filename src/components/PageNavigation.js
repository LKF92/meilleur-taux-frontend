import React from "react";
import { Link } from "react-router-dom";
import colors from "../colors";

export default function PageNavigation({ currentPage, setCurrentPage }) {
  return (
    <div style={pageNavigation}>
      {currentPage > 1 ? (
        <Link
          to={"/demande-simulation/credit-immobilier/step" + (currentPage - 1)}
          style={{ textDecoration: "none" }}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <h3 style={previousPage}>Précédent</h3>
        </Link>
      ) : (
        <div></div>
      )}
      <div>barre de progression</div>
      {currentPage < 7 ? (
        <Link
          to={"/demande-simulation/credit-immobilier/step" + (currentPage + 1)}
          style={{ textDecoration: "none" }}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <h3 style={nextPage}>Suivant</h3>
        </Link>
      ) : (
        <button value="valider"></button>
      )}
    </div>
  );
}

const pageNavigation = {
  padding: "0 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const previousPage = {
  textDecoration: "underline"
};
const nextPage = {
  padding: 10,
  borderRadius: 5,
  backgroundColor: colors.orange,
  color: "white"
};
