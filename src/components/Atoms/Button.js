import React from "react";
import Button from "@mui/material/Button";

export default function ButtonOutline(props) {
  return (
    <Button
      onClick={props.onClick}
      variant="outlined"
      style={{
        borderColor: "white",
      }}
    >
      <p style={{ color: "white" }}>{props.name}</p>
    </Button>
  );
}
