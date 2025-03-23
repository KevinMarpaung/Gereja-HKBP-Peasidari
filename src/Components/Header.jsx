import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-center p-6 md:justify-between mx-20">
        <div>
          <FontAwesomeIcon icon={faChurch} size="2x" />
        </div>
        <div>
          <ul className="gap-5 cursor-pointer md:flex hidden">
            <Link
              to="Beranda"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Beranda
            </Link>
            <Link
              to="kegiatan"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Kegiatan
            </Link>
            <Link
              to="lokasi"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Lokasi
            </Link>
            <Link
              to="galery"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Galery
            </Link>
            <Link
              to="kontak"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Kontak
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
