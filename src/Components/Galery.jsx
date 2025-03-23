import berdoa from "../../img/berdoa.jpg";
import gereja1 from "../../img/gereja1.jpg";
import gereja2 from "../../img/gereja2.jpg";
import gereja3 from "../../img/gereja3.jpg";
import gerejaDepan from "../../img/gereja-depan.jpg";
import kebaktian from "../../img/kebaktian.jpg";
import kebaktian2 from "../../img/kebaktian2.jpg";
import luarGereja from "../../img/luarGereja.jpg";
import gambar4 from "../../img/gambar4.jpg";
import dalamGereja from "../../img/dalamgereja.jpg";
import kebaktian4 from "../../img/kebaktian3.jpg";
import bacaalkitab from "../../img/bacaalkitab.jpg";

const Gallery = () => {
  return (
    <div className="text-center my-16 mx-16">
      <div className="my-6">
        <h1>Foto</h1>
        <h1 className="text-3xl font-bold">
          Menjelajahi Keindahan <br /> Gereja Dari Berbagai Sisi
        </h1>
      </div>

      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-1/2 md:m-auto gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gereja1}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={bacaalkitab}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={kebaktian4}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dalamGereja}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gereja2}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={berdoa}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gerejaDepan}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={kebaktian}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gambar4}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={kebaktian2}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={luarGereja}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gereja3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
