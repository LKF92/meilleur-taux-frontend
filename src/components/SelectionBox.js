import React from "react";

const unselectedChoice = {
  flex: 1,
  border: "1px solid #b7b7b7",
  backgroundColor: "white",
  marginRight: "5px",
  borderRadius: "5px",
  boxShadow: "0px 3px 0px lightgrey"
};
const selectedChoice = {
  borderRadius: "5px",
  marginRight: "5px",
  flex: 1,
  backgroundColor: "#f49e24",
  boxShadow: "0px 3px 0px #E57F00"
};
const textUnselected = {
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
  color: "black"
};
const textSelected = {
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
  color: "white"
};

export default function SelectionBox({ text, selection, setSelection }) {
  return (
    <div
      onClick={() => setSelection(text)}
      style={selection === text ? selectedChoice : unselectedChoice}
    >
      <p style={selection === text ? textSelected : textUnselected}>{text}</p>
    </div>
  );
}
