import React, { useState } from "react";

function MakeANewPart({ prototypes }) {
  const [clicked, setClicked] = useState(null);
  console.log(prototypes);
  console.log(clicked);
  const options = prototypes.map((p) => (
    <li key={p.id} onClick={() => setClicked(p)} style={{ cursor: "pointer" }}>
      {p.shapeType}
    </li>
  ));
  return (
    <div>
      <ul>{options}</ul>
    </div>
  );
}

export default MakeANewPart;
