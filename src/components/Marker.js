import { useEffect, useState } from "react";

export default function Marker({ position, changePosition, radius, map }) {
  const [marker, setMarker] = useState(null);
  const [circle, setCircle] = useState(null);
  useEffect(() => {
    if (!marker) {
      let markertemp = new window.google.maps.Marker({});
      setMarker(markertemp);

      window.google.maps.event.addListener(markertemp, "drag", function (e) {
        // console.log(JSON.stringify(e.latLng));
        changePosition(JSON.stringify(e.latLng));
      });
    }

    if (!circle) {
      let circletemp = new window.google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      });
      setCircle(circletemp);
    }
  }, [marker]);
  useEffect(() => {
    if (marker) {
      marker.setMap(map);
      marker.setPosition(position);
      marker.setDraggable(true);
    }
    if (circle) {
      circle.setMap(map);
      circle.setCenter(position);
      circle.setRadius(radius*1609.34);// radius in miles so convert it meters
    }
  }, [marker, position, map,radius]);

  return null;
}
