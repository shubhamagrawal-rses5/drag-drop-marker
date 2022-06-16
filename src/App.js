import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Error from "./components/Error";
import Loading from "./components/Loading";
import "./style.css";
import Marker from "./components/Marker";
import MyMapComponent from "./components/MyMapComponent";
import { useState } from "react";
import Form from "./components/Form";
import SetAddress from "./components/SetAddress";

const render = (status) => {
  if (status === Status.FAILURE) return <Error />;
  return <Loading />;
};

function App() {
  const [position, setPosition] = useState({ lat: 40.714, lng: -74.005 }); // initial position to NewYork
  const [address, setAddress] = useState();
  const [radius, setRadius] = useState(10); //intial radius to 10 miles
  const [zoom, setZoom] = useState(10); //intial zoom 10
  const [center, setCenter] = useState({ lat: 40.714, lng: -74.005 }); // center of the map 

  const changeLatitude = (event) => {
    setPosition({ ...position, lat: Number(event.target.value) });
  };
  const changeLongitude = (event) => {
    setPosition({ ...position, lng: Number(event.target.value) });
  };
  const changeRadius = (event) => {
    setRadius(Number(event.target.value));
  };
  const changeAddress = (value) => {
    setAddress(value);
  };
  const onClick = (coordinates) => {
    // console.log(event)
    setPosition(JSON.parse(coordinates));
  };
  const onIdle = (map) => {
    setZoom(map.getZoom());
    setCenter(map.getCenter());
  };

  // console.log(position);
  return (
    <Wrapper apiKey="AIzaSyBD7x-Hg9Yfzwn6sEpO39RD32nkJkSpdj8" render={render}>
      <MyMapComponent
        center={position}
        zoom={zoom}
        onClick={onClick}
        onIdle={onIdle}
      >
        <Marker position={position} changePosition={onClick} radius={radius} />
      </MyMapComponent>
      <Form
        position={position}
        address={address}
        radius={radius}
        changeLatitude={changeLatitude}
        changeLongitude={changeLongitude}
        changeRadius={changeRadius}
      ></Form>
      <SetAddress
        position={position}
        address={address}
        changeAddress={changeAddress}
      />
    </Wrapper>
  );
}

export default App;
