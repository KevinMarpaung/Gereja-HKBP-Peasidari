import Fitur from "./Fitur";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBookBible,
  faComments,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div>
      <div className="my-20">
        <div>
          <h1 className="font-Poppins text-3xl font-bold text-center">
            Semua Kenyamanan <br></br> Dalam Satu Website Gereja
          </h1>

          <div className="justify-center md:flex md:flex-row  mt-10 gap-2 ">
            <Fitur
              text={"Jadwal Gereja  pagi Yang Lengkap"}
              icon={<FontAwesomeIcon color="white" size="3x" icon={faClock} />}
            ></Fitur>
            <Fitur
              text={"Dilengkapi dengan bible dan buku ende "}
              icon={
                <FontAwesomeIcon icon={faBookBible} color="white" size="3x" />
              }
            ></Fitur>
            <Fitur
              text={"Forum Diskusi Untuk Jemaat Tentang Iman"}
              icon={
                <FontAwesomeIcon color="white" size="3x" icon={faComments} />
              }
            ></Fitur>
            <Fitur
              text={"Renungan Dan Artikel Setiap Hari"}
              icon={
                <FontAwesomeIcon size="3x" color="white" icon={faBookOpen} />
              }
            ></Fitur>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
