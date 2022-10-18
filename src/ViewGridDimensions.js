import { selectOptions } from "@testing-library/user-event/dist/select-options";
import React, { useState } from "react";

function ViewGridDimensions({ dimensions }) {
  const [point1, setPoint1] = useState(null);
  const [point2, setPoint2] = useState(null);
  console.log(point2);

  const options = dimensions.map((d) => (
    <option value={d.pk} key={d.pk}>
      {d.pk}
    </option>
  ));
  function findAndSet(id, setter) {
    const point = dimensions.find((d) => d.pk === id);
    console.log(point);
    setter(point);
  }
  return (
    <div className="view_grid_dimensions_container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">
          <h4>View Grid Dimensions</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4">
          <p>Point 1</p>
          <select
            defaultValue=""
            onChange={(e) => findAndSet(e.target.value, setPoint1)}
          >
            <option hidden disabled value="">
              select an option
            </option>
            {options}
          </select>
        </div>
        <div className="col-4">
          <div className=" row h-25 p-1 pl-3 text-center lac-z-7">
            Position (inches)
          </div>
          <div className="row h-25 p-1 pl-3 bg-L lac-z-7 justify-content-center">
            {point1 ? point1.point_levels : "n/a"}
          </div>
          <div className="row h-25 p-1 pl-3 bg-EW lac-z-7 justify-content-center">
            {point1 ? point1.point_EW : "n/a"}
          </div>
          <div className="row h-25 p-1 pl-3 bg-NS lac-z-7 justify-content-center">
            {point1 ? point1.point_NS : "n/a"}
          </div>
        </div>
        <div className="col-2">
          <div className="row h-25 p-1 pl-3"></div>
          <div className="row h-25 p-1 pl-3 lac-z-7">Elev.</div>
          <div className="row h-25 p-1 pl-3 lac-z-7">E - W</div>
          <div className="row h-25 p-1 pl-3 lac-z-7">N - S</div>
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4">
          <p>Point 2</p>
          <select
            defaultValue=""
            onChange={(e) => findAndSet(e.target.value, setPoint2)}
          >
            <option hidden disabled value="">
              select an option
            </option>
            {options}
          </select>
        </div>
        <div className="col-4">
          <div className=" row h-25 p-1 pl-3 text-center lac-z-7">
            Position (inches)
          </div>
          <div className="row h-25 p-1 pl-3 bg-L lac-z-7 justify-content-center">
            {point2 ? point2.point_levels : "n/a"}
          </div>
          <div className="row h-25 p-1 pl-3 bg-EW lac-z-7 justify-content-center">
            {point2 ? point2.point_EW : "n/a"}
          </div>
          <div className="row h-25 p-1 pl-3 bg-NS lac-z-7 justify-content-center">
            {point2 ? point2.point_NS : "n/a"}
          </div>
        </div>
        <div className="col-2">
          <div className="row h-25 p-1 pl-3"></div>
          <div className="row h-25 p-1 pl-3 lac-z-7">Elev.</div>
          <div className="row h-25 p-1 pl-3 lac-z-7">E - W</div>
          <div className="row h-25 p-1 pl-3 lac-z-7">N - S</div>
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">
          <p>Taxicab distance to reach Point Two from Point One (inches)</p>
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4">
          <div className="row h-35 p-1 pl-3 lac-z-7 justify-content-center">
            Travel Up
          </div>
          <div className="row h-35 p-1 pl-3 lac-z-7 justify-content-center">
            Travel West
          </div>
          <div className="row h-35 p-1 pl-3 lac-z-7 justify-content-center">
            Travel North
          </div>
        </div>
        <div className="col-4">
          <div className="row h-35 p-1 pl-3 bg-L lac-z-7 justify-content-center">
            {point1 && point2
              ? point2.point_levels - point1.point_levels
              : "n / a"}
          </div>
          <div className="row h-35 p-1 pl-3 bg-EW lac-z-7 justify-content-center">
            {point1 && point2 ? point1.point_EW - point2.point_EW : "n / a"}
          </div>
          <div className="row h-35 p-1 pl-3 bg-NS lac-z-7 justify-content-center">
            {point1 && point2 ? point1.point_NS - point2.point_NS : "n / a"}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ViewGridDimensions;
