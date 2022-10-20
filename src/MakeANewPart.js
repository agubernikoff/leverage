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
    <li key={p.id} onClick={() => setClicked(p)} style={{ cursor: "pointer" }}>
      {p.shapeType}
    </li>
  ));
  return (
    <div>
      {!clicked ? <ul>{options}</ul> : null}
      {clicked ? <PartForm closeForm={closeForm} /> : null}
    </div>
  );
}

export default MakeANewPart;
