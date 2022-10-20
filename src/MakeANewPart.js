import React, { useState } from "react";
import PartForm from "./PartForm";

function MakeANewPart({ prototypes }) {
  const [clicked, setClicked] = useState(null);
  console.log(prototypes);
  console.log(clicked);
  function closeForm() {
    setClicked(null);
  }

  const options = prototypes.map((p) => (
    <li
      key={p.id}
      onClick={() => setClicked(p)}
      style={{ cursor: "pointer", width: "fit-content" }}
    >
      {p.shapeType}
    </li>
  ));

  return (
    <div style={{ position: "relative" }}>
      {!clicked ? <ul style={{ marginTop: "1em" }}>{options}</ul> : null}
      {clicked ? <PartForm closeForm={closeForm} clicked={clicked} /> : null}
    </div>
  );
}

export default MakeANewPart;
