import Header from "../Components/Header";
import Main from "../Components/Main";
import JumboTron from "../Components/JumboTron";
import Activity from "../Components/Activity";
import Gallery from "../Components/Galery";
import Location from "../Components/Location";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-[url(/img/bg.jpg)] bg-cover bg-center top-0">
        <section id="beranda">
          <Header></Header>
        </section>
        <JumboTron></JumboTron>
      </div>
      <Main></Main>
      <section id="kegiatan">
        <Activity></Activity>
      </section>
      <section id="galery">
        <Gallery></Gallery>
      </section>
      <section id="lokasi">
        <Location></Location>
      </section>
      <section id="kontak">
        <Footer />
      </section>
    </>
  );
};

export default Home;
