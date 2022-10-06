import React from "react";

function Form() {
  return (
    <div>
      <form method="post" action="">
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
      </form>
    </div>
  );
}

export default Form;
