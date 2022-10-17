import React, { useState } from "react";

function FormRow({ gridName, offset, deleteRow }) {
  const [grid, setGrid] = useState(gridName);
  const [off, setOff] = useState(offset);
  return (
    <div className="form-row">
      <input
        type="text"
        value={grid}
        onChange={(e) => setGrid(e.target.value)}
      ></input>
      <input
        type="text"
        value={off}
        onChange={(e) => setOff(e.target.value)}
      ></input>
      <div className="btn-container">
        <button
          type="submit"
          name="submit"
          value=""
          className="btn btn-secondary"
        >
          Update
        </button>
        <button
          type="submit"
          name="submit"
          value=""
          className="btn btn-outline-danger"
          onClick={() => deleteRow(gridName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default FormRow;
