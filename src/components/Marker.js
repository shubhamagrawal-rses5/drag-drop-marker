import { useEffect, useState } from "react";

export default function Marker({position,changePosition, map}){
  const [marker, setMarker] = useState(null);
  
      useEffect(() => {
        if (!marker) {
        let markertemp =new window.google.maps.Marker({})
        setMarker(markertemp); 
        
        window.google.maps.event.addListener(markertemp, "drag", function (e) {
          // console.log(JSON.stringify(e.latLng));
           changePosition(JSON.stringify(e.latLng));
        });}
    }, [marker]);
   useEffect(() => {
      if (marker) {
        marker.setMap(map);
        marker.setPosition(position);
        marker.setDraggable(true);
      }
    }, [marker, position,map]);
  
    return null;
};

