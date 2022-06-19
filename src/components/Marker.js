import { useEffect, useState } from "react";

const MILES_TO_KILOMETERS = 1.609344;

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
        strokeColor: "#0096FF",
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: "#0096FF",
        fillOpacity: 0.3,
      });
      setCircle(circleTemp);
    }
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setMap(map);
      marker.setPosition(position);
      marker.setDraggable(true);
      window.google.maps.event.addListener(marker, "drag", function (e) {
        // console.log(JSON.stringify(e.latLng));
        circle.setCenter(marker.position);
      });
    }
    if (circle) {
      circle.setMap(map);
      circle.setCenter(position);
      let circleRadius;
      if(radius.unit==='kilometers'){
         circleRadius =  radius.value*1000;
      }
      else if(radius.unit==='miles'){
        circleRadius =  MILES_TO_KILOMETERS*radius.value*1000;
      }
      circle.setRadius(circleRadius); // radius in kilometers so convert it meters
      map.fitBounds(circle.getBounds());
    }
  }, [marker, position, map, radius,circle]);

  return null;
}
