import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Error from "./components/Error";
import Loading from "./components/Loading";
import "./style.css";
import MyMapComponent from "./components/MyMapComponent";
import { useState } from "react";
import Form from "./components/Form";


const render = (status) => {
  if (status === Status.FAILURE) return <Error />;
  return <Loading />;
};


function App() {
  const [position, setPosition] = useState({ lat: 40.714, lng: -74.005 }); // initial position to NewYork
  const [address, setAddress] = useState();
  const [radius, setRadius] = useState({value:10,unit:'kilometers'}); //intial radius to 10 kilometrs
  const [zoom, setZoom] = useState(10); //intial zoom 10



  const changeLatitude = (event) => {
    setPosition({ ...position, lat: Number(event.target.value) });
  };
  const changeLongitude = (event) => {
    setPosition({ ...position, lng: Number(event.target.value) });
  };
  const changeRadius = (radius) => {
    setRadius(radius);
  };
  const changeAddress = (value) => {
    setAddress(value);
  };
  const onClick = (coordinates) => {
    setPosition(JSON.parse(coordinates));
  };
  const onIdle = (map) => {
    setZoom(map.getZoom());
  };


  /* Autodetect Geolocation to your current location*/
//   useEffect(()=>{
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
// setPosition(pos);
//         },
//         () => {
//           // The Geolocation service failed.
//           setPosition({ lat: 40.714, lng: -74.005 });
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//      setPosition({ lat: 40.714, lng: -74.005 });
//     }
//   },[]);
 
  return (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={render}>
      <MyMapComponent
        center={position}
        zoom={zoom}
        onClick={onClick}
        onIdle={onIdle}
        changeAddress={changeAddress}
        radius={radius}
      >
      </MyMapComponent>
      <Form
        position={position}
        address={address}
        radius={radius}
        changeLatitude={changeLatitude}
        changeLongitude={changeLongitude}
        changeRadius={changeRadius}
      ></Form>

    </Wrapper>
    
  );


}

export default App;
