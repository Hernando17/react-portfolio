import React from "react";
import Button from "@mui/material/Button";

export default function ButtonOutline(props) {
  return (
    <Button
      onClick={props.onClick}
      variant="outlined"
      style={{
        borderColor: "white",
        marginRight: 8,
        marginTop: 8,
      }}
    >
      <p style={{ color: "white" }}>{props.name}</p>
    </Button>
  );
}
