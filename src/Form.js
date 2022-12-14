import React from "react";
import FormRow from "./FormRow";
import FormLabel from "./FormLabel";

function Form({ data, append, deleteRow }) {
  console.log(data);
  const mapped = data.map((d) => (
    <FormRow
      key={d.tag_name}
      gridName={d.tag_name}
      offset={d.offset_in}
      deleteRow={deleteRow}
    />
  ));
  return (
    <div style={{ width: "50%" }}>
      <FormLabel direction="EW" />
      {mapped}
      <div className="buttonHolder">
        <button
          type="submit"
          name="submit"
          value=""
          className="btn btn-info"
          onClick={append}
        >
          Append
        </button>
      </div>
      {/* <form method="post" action="">
        <div class="row">
          <div class="col-4">
            <div class="form-group d-flex justify-content-center"></div>
          </div>
          <div class="col-4">
            <div class="form-group d-flex justify-content-center"></div>
          </div>

          <div class="col-2">
            <div class="buttonHolder">
              <button type="submit" name="submit" value="" class="btn btn-info">
                Append
              </button>
            </div>
          </div>

          <div class="col-2">
            <div class="buttonHolder">
              <button
                type="submit"
                name="submit"
                value=""
                class="btn btn-secondary"
              >
                Update
              </button>
            </div>
          </div>
          <div class="col-2">
            <div class="buttonHolder">
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
        </div>
      </form> */}
    </div>
  );
}

export default Form;
