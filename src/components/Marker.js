import { useEffect, useState } from "react";

export default function Marker({ position, changePosition, radius, map }) {
  const [marker, setMarker] = useState(null);
  const [circle, setCircle] = useState(null);
  useEffect(() => {
    if (!marker) {
      let markerTemp = new window.google.maps.Marker({});
      setMarker(markerTemp);

      window.google.maps.event.addListener(markerTemp, "dragend", function (e) {
        // console.log(JSON.stringify(e.latLng));
        changePosition(JSON.stringify(e.latLng));
      });
    }

    if (!circle) {
      let circleTemp = new window.google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      });
      setCircle(circleTemp);
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
      circle.setRadius(radius*1000);// radius in miles so convert it meters
      map.fitBounds(circle.getBounds());
    }
  }, [marker, position, map,radius]);

  return null;
}
