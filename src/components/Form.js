import React from "react";
import "./../style.css";
export default function Form({
  position,
  address,
  changeLatitude,
  changeLongitude,
  radius,
  changeRadius,
}) {
  return (
    <div className="form-container">
      <div className="form">
        <div className="entry-address">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={address} />
        </div>
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
            <option value="miles">miles</option>
            <option value="kilometers">kilometers</option>
          </select>
        </div>
      </div>
    </div>
  );
}
