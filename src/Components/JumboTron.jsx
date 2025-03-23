import { Link } from "react-router";
import Button from "./Button";
const JumboTron = () => {
  return (
    <div className=" flex justify-center items-center h-screen  ">
      <div className="text-center  w-[400px] md:w-1/2 ">
        <h1 className="text-3xl  text-white  font-bold ">
          Temukan Kedamaian Melalui Dekat Dengan Tuhan
        </h1>
        <p className="text-white mt-4 md:mt-7 text-sm   ">
          Gereja bukan hanya tempat ibadah yang nyaman tapi juga tempat berbagai
          kegiatan,memupuk persaudaran hingga membangkitkan perekonomian atau
          tempat apapun yang berkaitan dengan kekristenan
        </p>
        <div className="  md:flex gap-4 justify-center mt-7     ">
          <div>
            <Link to={"/new"}>
              <Button text={"Baca Selengkapnya"} color={"text-white"}></Button>
            </Link>
          </div>
          <div className="mt-2 md:mt-0">
            <Button
              text={"Hubungi Kami"}
              background={"bg-white"}
              color={"text-black"}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JumboTron;
