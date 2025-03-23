import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "380px",
  borderRadius: "20px",
  boxShadow: "4px 4 px",
};

const center = {
  lat: -6.22088,
  lng: 106.8456,
};

const Map = () => {
  return (
    <iframe
      width="100%"
      height="400"
      src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=panindii+(Hkbp%20Panindii)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    ></iframe>
  );
};

export default Map;
