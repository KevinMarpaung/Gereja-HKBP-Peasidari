import Card from "./Card";
import berdoa from "../../img/berdoa.jpg";
import travel from "../../img/travel.jpg";
import ibadah from "../../img/ibadah.jpg";
const Activity = () => {
  return (
    <div className="bg-[#91857a] mx-2 md:mx-40 rounded-lg shadow-2xl">
      <div className="text-center pt-4 text-white">
        <h4>KEGIATAN</h4>
        <h1 className="text-2xl md:text-3xl font-bold">
          Berbagai Kegiatan Menarik <br /> Yang Ada Di Gereja
        </h1>
      </div>
      <div className="grid grid-cols-2 my-5  md:grid md:grid-cols-3 md:mx-20 ">
        <Card title={"Kegiatan Ibadah Malam  bersama"} gambar={ibadah}></Card>
        <Card title={"Retret Ketempat tempat rohani "} gambar={travel}></Card>
        <Card title={"Koor dan lagu pujian "} gambar={berdoa}></Card>
      </div>
    </div>
  );
};

export default Activity;
