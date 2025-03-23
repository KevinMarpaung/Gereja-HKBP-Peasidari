import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faChurch } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="bg-[#91857a]">
        <div className="md:flex  text-white justify-between py-4 mx-4 ">
          <div className="flex-col  md:w-96  ">
            <div className="flex gap-2 justify-center items-center bg-white rounded-xl mx-2 ">
              <div className="md:pl-4 p-2   ">
                <FontAwesomeIcon icon={faChurch} size="2x" color="black" />
              </div>
              <p className=" font- text-black font-bold text-center  ">
                Gereja HKBP Panindii
              </p>
            </div>
            <p className="text-sm my-2 font-serif">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              dolores quasi dignissimos quae id
            </p>
            <div>
              <ul className="flex justify-start gap-2 my-2">
                <div className="bg-white rounded-full p-2">
                  <FontAwesomeIcon icon={faInstagram} color="black" />
                </div>
                <div className="bg-white rounded-full p-2">
                  <FontAwesomeIcon icon={faTiktok} color="black" />
                </div>
                <div className="bg-white rounded-full p-2">
                  <FontAwesomeIcon icon={faFacebook} color="black" />
                </div>
              </ul>
            </div>
          </div>
          <div className="flex justify-between md:w-1/2">
            <div>
              <ul className="flex-col ">
                <li className="font-bold">Halaman</li>
                <li>Beranda</li>
                <li>Blog</li>
                <li>Kegiatan</li>
                <li>Tentang </li>
                <li>Kontak</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold">Kegiatan</li>
                <li>Koor</li>
                <li>Ibadah</li>
                <li>Sharing</li>
                <li>Pendalaman</li>
              </ul>
            </div>
            <div className="mr-20">
              <ul>
                <li className="font-bold">Kontak</li>
                <li>
                  0831213214 <span className="font-bold">(WA)</span>
                </li>
                <li>
                  j1192j3 <span className="font-bold">(PIN BBM)</span>
                </li>
                <li>
                  08314485910 <span className="font-bold">(Telegram)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-center text-white font-bold text-sm">
            @2025 Gereja HKBP Panindii Utara All Rights Reserved
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
