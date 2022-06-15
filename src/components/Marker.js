import { useEffect, useState } from "react";

export default function Marker({position,onDrop, map}){
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setPosition(position);
      marker.setMap(map);
      marker.setDraggable(true);
      // marker.addListner('click',()=>{

      // })
    }
   
  }, [marker, position,map]);

  return null;
};

