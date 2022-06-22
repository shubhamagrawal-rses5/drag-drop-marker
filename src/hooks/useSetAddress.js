import { useEffect } from "react";

export default function useSetAddress( position, changeAddress ) {
  useEffect(() => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder
      .geocode({ location: position })
      .then((response) => {
        if (response.results[0]) {
          // console.log(response.results[0].formatted_address);
          changeAddress(response.results[0].formatted_address);
        } else {
          window.alert("No results found");
        }
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
  }, [position]);
}