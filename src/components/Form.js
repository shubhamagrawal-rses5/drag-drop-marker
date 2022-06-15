import React from "react";
import "./../style.css";
export default function Form({
  position,
  changeLatitude,
  changeLongitude,
  radius,
  changeRadius,
}) {
  return (
    <>
      <div className="form">
        <div className="entry">
          <label htmlFor="lat">Latitude</label>
          <input
            type="number"
            id="lat"
            name="lat"
            value={position.lat}
            onChange={(event) => changeLatitude(event)}
          />
        </div>
        <div className="entry">
          <label htmlFor="lng">Longitude</label>
          <input
            type="number"
            id="lng"
            name="lng"
            value={position.lng}
            onChange={(event) => changeLongitude(event)}
          />
        </div>
        <div className="entry">
          <label htmlFor="radius">Radius</label>
          <input
            type="number"
            id="radius"
            name="radius"
            value={radius}
            onChange={(event) => changeRadius(event)}
          />
        </div>
        <div className="entry">
          <label htmlFor="units">Units</label>
          <select name="dropdown">
            <option value="meters">meters</option>
            <option value="kilometers">kilometers</option>
          </select>
        </div>
      </div>
    </>
  );
}
