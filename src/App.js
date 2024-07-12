import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Sejarah from './containers/Sejarah';
import Visimisi from './containers/VisiMisi';
import NilaiInti from './containers/NilaiInti';
import Struktur from './containers/Struktur';
import Anniversary from './containers/Anniversary';
import Penggerak from './containers/Penggerak';
import Seventop from './containers/Seventop';
import Merchendise from './containers/Merchendise';
import Pelatihan from './containers/Pelatihan';
import Pendampingan from './containers/Pendampingan';
import Faq from './containers/Faq';
import PeluangUsaha from './containers/PeluangUsaha';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import PeluangKerja from './containers/PeluangKerja';
import LokalBrand from './containers/LokalBrand';
import Modalberkah from './containers/Modalberkah';
import Masjidpemberdaya from './containers/Masjidpemberdaya';
import Donasi from './containers/Donasi';
import Magang from './containers/Magang';
import Emakkece from './containers/Emakkece';
import Perizinan from './containers/Perizinan';
import PelaporanKeuangan from './containers/PelaporanKeuangan';
import Pemasaran from './containers/Pemasaran';
import Permodalan from './containers/Permodalan';
import Testimoni from './containers/Testimoni';
import MasterMentor from './containers/MasterMentor';
import Trainer from './containers/Trainer';
import Event from './containers/Event';
import Mentor from './containers/Mentor';
import Mitrakerjasama from './containers/Mitrakerjasama';
import Desapreneur from './containers/Desapreneur';
import Thementor from './containers/Thementor';
import EventDetail from './containers/EventDetail';
import DaftarBerita from './containers/DaftarBerita';
import BeritaDetail from './containers/BeritaDetail';
import Login from './containers/Login';
import AdminPrivateRoute from './AdminPrivateRoute';
import { AuthProvider } from './AuthContext';
import StrukturTable from './cms/strukturs';
import CreateStrukturPengurus from './cms/strukturs/create';
import UpdateStrukturPengurus from './cms/strukturs/update';
import CreateEvent from './cms/events/create';
import UpdateEvent from './cms/events/update';
import EventTable from './cms/events';
import BeritasTable from './cms/beritas';
import CreateBerita from './cms/beritas/create';
import UpdateBerita from './cms/beritas/update';
import MagangTable from './cms/magangs';
import CreateMagang from './cms/magangs/create';
import UpdateMagang from './cms/magangs/update';
import MerchandiseTable from './cms/merchandises';
import CreateMerchandise from './cms/merchandises/create';
import UpdateMerchandise from './cms/merchandises/update';
import DonasiTable from './cms/donasis';
import CreateDonasi from './cms/donasis/create';
import UpdateDonasi from './cms/donasis/update';
import BrandLokalsTable from './cms/brand-lokals';
import CreateBrandLokal from './cms/brand-lokals/create';
import UpdateBrandLokal from './cms/brand-lokals/update';
import PenggerakOkoceTable from './cms/penggerak-okoces';
import CreatePenggerakOkoce from './cms/penggerak-okoces/create';
import UpdatePenggerakOkoce from './cms/penggerak-okoces/update';
import PeluangUsahaTable from './cms/peluang-usahas';
import CreatePeluangUsaha from './cms/peluang-usahas/create';
import UpdatePeluangUsaha from './cms/peluang-usahas/update';
import PeluangKerjaTable from './cms/peluang-kerjas';
import CreatePeluangKerja from './cms/peluang-kerjas/create';
import UpdatePeluangKerja from './cms/peluang-kerjas/update';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/okoclogin" element={<Login />} />
          <Route path="/admin/struktur" element={<AdminPrivateRoute Component={StrukturTable} />} />
          <Route path="/admin/struktur/create" element={<AdminPrivateRoute Component={CreateStrukturPengurus} />} />
          <Route path="/admin/struktur/edit/:id" element={<AdminPrivateRoute Component={UpdateStrukturPengurus} />} />
          <Route path="/admin/event" element={<AdminPrivateRoute Component={EventTable} />} />
          <Route path="/admin/event/create" element={<AdminPrivateRoute Component={CreateEvent} />} />
          <Route path="/admin/event/edit/:id" element={<AdminPrivateRoute Component={UpdateEvent} />} />
          <Route path="/admin/berita" element={<AdminPrivateRoute Component={BeritasTable} />} />
          <Route path="/admin/berita/create" element={<AdminPrivateRoute Component={CreateBerita} />} />
          <Route path="/admin/berita/edit/:id" element={<AdminPrivateRoute Component={UpdateBerita} />} />
          <Route path="/admin/magang" element={<AdminPrivateRoute Component={MagangTable} />} />
          <Route path="/admin/magang/create" element={<AdminPrivateRoute Component={CreateMagang} />} />
          <Route path="/admin/magang/edit/:id" element={<AdminPrivateRoute Component={UpdateMagang} />} />
          <Route path="/admin/merchandise" element={<AdminPrivateRoute Component={MerchandiseTable} />} />
          <Route path="/admin/merchandise/create" element={<AdminPrivateRoute Component={CreateMerchandise} />} />
          <Route path="/admin/merchandise/edit/:id" element={<AdminPrivateRoute Component={UpdateMerchandise} />} />
          <Route path="/admin/donasi" element={<AdminPrivateRoute Component={DonasiTable} />} />
          <Route path="/admin/donasi/create" element={<AdminPrivateRoute Component={CreateDonasi} />} />
          <Route path="/admin/donasi/edit/:id" element={<AdminPrivateRoute Component={UpdateDonasi} />} />
          <Route path="/admin/brand-lokal" element={<AdminPrivateRoute Component={BrandLokalsTable} />} />
          <Route path="/admin/brand-lokal/create" element={<AdminPrivateRoute Component={CreateBrandLokal} />} />
          <Route path="/admin/brand-lokal/edit/:id" element={<AdminPrivateRoute Component={UpdateBrandLokal} />} />
          <Route path="/admin/penggerak-okoce" element={<AdminPrivateRoute Component={PenggerakOkoceTable} />} />
          <Route path="/admin/penggerak-okoce/create" element={<AdminPrivateRoute Component={CreatePenggerakOkoce} />} />
          <Route path="/admin/penggerak-okoce/edit/:id" element={<AdminPrivateRoute Component={UpdatePenggerakOkoce} />} />
          <Route path="/admin/peluang-usaha" element={<AdminPrivateRoute Component={PeluangUsahaTable} />} />
          <Route path="/admin/peluang-usaha/create" element={<AdminPrivateRoute Component={CreatePeluangUsaha} />} />
          <Route path="/admin/peluang-usaha/edit/:id" element={<AdminPrivateRoute Component={UpdatePeluangUsaha} />} />
          <Route path="/admin/peluang-kerja" element={<AdminPrivateRoute Component={PeluangKerjaTable} />} />
          <Route path="/admin/peluang-kerja/create" element={<AdminPrivateRoute Component={CreatePeluangKerja} />} />
          <Route path="/admin/peluang-kerja/edit/:id" element={<AdminPrivateRoute Component={UpdatePeluangKerja} />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/visimisi" element={<Visimisi />} />
          <Route path="/nilaiinti" element={<NilaiInti />} />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/penggerak" element={<Penggerak />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/7top" element={<Seventop />} />
          <Route path="/merchendise" element={<Merchendise />} />
          <Route path="/pendampingan" element={<Pendampingan />} />
          <Route path="/pelatihan" element={<Pelatihan />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testimoni" element={<Testimoni />} />
          <Route path="/peluangusaha" element={<PeluangUsaha />} />
          <Route path="/peluangkerja" element={<PeluangKerja />} />
          <Route path="/lokalbrand" element={<LokalBrand />} />
          <Route path="/modalberkah" element={<Modalberkah />} />
          <Route path="/masjidpemberdaya" element={<Masjidpemberdaya />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/magang" element={<Magang />} />
          <Route path="/emakkece" element={<Emakkece />} />
          <Route path="/perizinan" element={<Perizinan />} />
          <Route path="/pelaporankeuangan" element={<PelaporanKeuangan />} />
          <Route path="/pemasaran" element={<Pemasaran />} />
          <Route path="/permodalan" element={<Permodalan />} />
          <Route path="/mastermentor" element={<MasterMentor />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/event" element={<Event />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/mitrakerjasama" element={<Mitrakerjasama />} />
          <Route path="/desapreneur" element={<Desapreneur />} />
          <Route path="/thementor" element={<Thementor />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/daftarberita" element={<DaftarBerita />} />
          <Route path="/daftarberita/:id" element={<BeritaDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;