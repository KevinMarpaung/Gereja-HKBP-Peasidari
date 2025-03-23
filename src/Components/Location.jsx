import Map from "./Map";

const Location = () => {
  return (
    <div className=" my-20 rounded-2xl">
      <div className="text-center my-10">
        <h1>Location</h1>
        <h1 className="text-3xl font-bold font-poppins">
          Lokasi Gereja Mudah Diakses
        </h1>
      </div>
      <div className="md:mx-36  mx-2">
        <Map></Map>
      </div>
    </div>
  );
};

export default Location;
