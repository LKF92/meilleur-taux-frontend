import React from "react";
import InfoIcon from "./InfoIcon";

export default function InputRow({ text, value, setValue, style, after }) {
  return (
    <label style={(inputRowLabel, style)}>
      <p style={inputTitle}>{text}</p>
      <div style={blocInput}>
        <InfoIcon />
        <input style={inputs} value={value} onChange={e => setValue(e.target.value)}></input>
        {after}
      </div>
    </label>
  );
}
const inputRowLabel = {
  padding: "0 30px",
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "20px 0",
  width: "100%",
  paddingRight: "300px",
  boxSizing: "border-box"
};
const inputTitle = {
  width: "40%"
};
const blocInput = {
  width: "50%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};
const inputs = {
  margin: "0 10px",
  height: "40px",
  width: "100%",
  fontSize: "16px",
  fontWeight: 700,
  border: "1px solid #f49e24",
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: "0px 3px 0px #e57f00"
};
