/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./containers/Homepage";
import Sejarah from "./containers/Sejarah";
import Visimisi from "./containers/VisiMisi";
import NilaiInti from "./containers/NilaiInti";
import Struktur from "./containers/Struktur";
import Anniversary from "./containers/Anniversary";
import Penggerak from "./containers/Penggerak";
import Seventop from "./containers/Seventop";
import Marchendise from "./containers/Marchendise";
import Pelatihan from "./containers/Pelatihan";
import Pendampingan from "./containers/Pendampingan";
import PeluangUsaha from "./containers/PeluangUsaha";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import PeluangKerja from "./containers/PeluangKerja";
import LokalBrand from "./containers/LokalBrand";
import Modalberkah from "./containers/Modalberkah";
import Masjidpemberdaya from "./containers/Masjidpemberdaya";
import Donasi from "./containers/Donasi";
import Magang from "./containers/Magang";
import Emakkece from "./containers/Emakkece";
import Mastermentor from "./containers/Mastermentor";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/visimisi" element={<Visimisi />} />
          <Route path="/nilaiinti" element={<NilaiInti />} />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/penggerak" element={<Penggerak />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/7top" element={<Seventop />} />
          <Route path="/marchendise" element={<Marchendise />} />
          <Route path="/pendampingan" element={<Pendampingan />} />
          <Route path="/pelatihan" element={<Pelatihan />} />
          <Route path="/peluangusaha" element={<PeluangUsaha />} />
          <Route path="/peluangkerja" element={<PeluangKerja />} />
          <Route path="/lokalbrand" element={<LokalBrand />} />
          <Route path="/modalberkah" element={<Modalberkah />} />
          <Route path="/masjidpemberdaya" element={<Masjidpemberdaya />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/magang" element={<Magang />} />
          <Route path="/emakkece" element={<Emakkece />} />
          <Route path="/mastermentor" element={<Mastermentor />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
