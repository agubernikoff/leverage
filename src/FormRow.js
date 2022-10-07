import React from "react";

function FormRow() {
  return (
    <div className="form-row">
      <input></input>
      <input></input>
      <div className="btn-container">
        <button type="submit" name="submit" value="" class="btn btn-secondary">
          Update
        </button>
        <button
          type="submit"
          name="submit"
          value=""
          class="btn btn-outline-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default FormRow;
