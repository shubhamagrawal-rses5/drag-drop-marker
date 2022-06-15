import "./App.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Error from "./components/Error";
import Loading from "./components/Loading";
import "./style.css";
import Marker from "./components/Marker";
import MyMapComponent from "./components/MyMapComponent";
import { useState } from "react";
import Form from "./components/Form";
const render = (status) => {
  if (status === Status.FAILURE) return <Error />;
  return <Loading />;
};

function App() {
  const [position, setPosition] = useState({ lat: 5, lng: 5 });
  const [radius, setRadius] = useState(2000);
  const [zoom, setZoom] = useState(3);
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });
  const changeLatitude = (event) => {
    setPosition({ ...position, lat: Number(event.target.value)});
  };
  const changeLongitude = (event) => {
    setPosition({ ...position, lng: Number(event.target.value)});
  };
  const changeRadius = (event) => {
    setRadius(Number(event.target.value));
  };
  const onClick = (event) => {
    // console.log(event)
    setPosition(event.latLng);
  };
  const onIdle = (m) => {
    console.log("onIdle");
    setZoom(m.getZoom());
    setCenter(m.getCenter());
  };
  // const onDrop = (e) => {
  //   setPosition(e.latLng);
  // };
  console.log(position);
  return (
  
    <Wrapper apiKey="AIzaSyBD7x-Hg9Yfzwn6sEpO39RD32nkJkSpdj8" render={render}>
      <MyMapComponent center={center} zoom={zoom} onClick={onClick} onIdle={onIdle}>
        <Marker position={position} />
      </MyMapComponent>
      <Form
        position={position}
        radius={radius}
        changeLatitude={changeLatitude}
        changeLongitude={changeLongitude}
        changeRadius={changeRadius}
      ></Form>
    </Wrapper>
  );
}

export default App;
