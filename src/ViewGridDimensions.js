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
      <h1>View Grid Dimensions</h1>
      <div className="point-info-container">
        <div className="point_select_container">
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
        <div>
          <p>Position (inches)</p>
          <p>{point1 ? point1.point_levels : "n/a"}</p>
          <p>{point1 ? point1.point_EW : "n/a"}</p>
          <p>{point1 ? point1.point_NS : "n/a"}</p>
        </div>
        <div className="view_grid_labels">
          <p>Elevation</p>
          <p>E-W</p>
          <p>N-S</p>
        </div>
      </div>
      <div className="point-info-container">
        <div className="point_select_container">
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
        <div>
          <p>Position (inches)</p>
          <p>{point2 ? point2.point_levels : "n/a"}</p>
          <p>{point2 ? point2.point_EW : "n/a"}</p>
          <p>{point2 ? point2.point_NS : "n/a"}</p>
        </div>
        <div className="view_grid_labels">
          <p>Elevation</p>
          <p>E-W</p>
          <p>N-S</p>
        </div>
      </div>
      <div className="point-info-container">
        <div className="point_select_container">
          <p>Taxicab distance to reach Point Two from Point One (inches)</p>
        </div>
        {/* <div className="taxi_cab_info_container"> */}
        <div className="view_grid_labels">
          <p>Travel Up</p>
          <p>Travel West</p>
          <p>Travel North</p>
        </div>
        <div className="view_grid_labels">
          <p>
            {point1 && point2
              ? point2.point_levels - point1.point_levels
              : "n / a"}
          </p>
          <p>
            {point1 && point2 ? point1.point_EW - point2.point_EW : "n / a"}
          </p>
          <p>
            {point1 && point2 ? point1.point_NS - point2.point_NS : "n / a"}
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ViewGridDimensions;
