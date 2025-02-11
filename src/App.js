import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Sejarah from './containers/Sejarah';
import Visimisi from './containers/VisiMisi';
import NilaiInti from './containers/NilaiInti';
import Struktur from './containers/Struktur';
import Anniversary from './containers/Anniversary';
import Penggerak from './containers/Penggerak';
import Seventop from './containers/Seventop';
import Merchandise from './containers/Merchandise';
import Pelatihan from './containers/Pelatihan';
import Pendampingan from './containers/Pendampingan';
import Faq from './containers/Faq';
import PeluangUsaha from './containers/PeluangUsaha';
import Navbar from '@components/Navbar';
import AdminNavbar from './components/AdminNavbar';
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
import TotalsTable from './cms/totals';
import CreateTotal from './cms/totals/create';
import UpdateTotal from './cms/totals/update';
import SosmedTable from './cms/sosmed';
import CreateSosmed from './cms/sosmed/create';
import UpdateSosmed from './cms/sosmed/update';
import ReviewTable from './cms/review';
import CreateReview from './cms/review/create';
import UpdateReview from './cms/review/update';
import CMSHome from './cms/home';
import MitraTable from './cms/mitra';
import CreateMitra from './cms/mitra/create';
import UpdateMitra from './cms/mitra/update';
import ProfileTable from './cms/profile';
import CreateProfile from './cms/profile/create';
import UpdateProfile from './cms/profile/update';
import AnniversaryTable from './cms/anniversaries';
import CreateAnniversary from './cms/anniversaries/create';
import UpdateAnniversary from './cms/anniversaries/update';
import CreateThementor from './cms/thementor/create';
import ThementorTable from './cms/thementor';
import UpdateThementor from './cms/thementor/update';
import CreateBenefitMasterMentor from './cms/benefit-master-mentor/create';
import BenefitMasterMentorTable from './cms/benefit-master-mentor';
import UpdateBenefitMasterMentor from './cms/benefit-master-mentor/update';
import TujuanMasterMentorTable from './cms/tujuan-master-mentor';
import CreateTujuanMasterMentor from './cms/tujuan-master-mentor/create';
import UpdateTujuanMasterMentor from './cms/tujuan-master-mentor/update';
import SyaratMasterMentorTable from './cms/syarat-master-mentor';
import CreateSyaratMasterMentor from './cms/syarat-master-mentor/create';
import UpdateSyaratMasterMentor from './cms/syarat-master-mentor/update';
import BenefitTrainerTable from './cms/benefit-trainer';
import CreateBenefitTrainer from './cms/benefit-trainer/create';
import UpdateBenefitTrainer from './cms/benefit-trainer/update';
import LogoTable from './cms/logo';
import CreateLogo from './cms/logo/create';
import UpdateLogo from './cms/logo/update';
import EmakKeceTable from './cms/emak-kece';
import CreateEmakKece from './cms/emak-kece/create';
import UpdateEmakKece from './cms/emak-kece/update';
import SyaratTrainerTable from './cms/syarat-trainer';
import CreateSyaratTrainer from './cms/syarat-trainer/create';
import UpdateSyaratTrainer from './cms/syarat-trainer/update';
import AllBannerTable from './cms/all-banner';
import CreateAllBanner from './cms/all-banner/create';
import UpdateAllBanner from './cms/all-banner/update';
import ForgotPassword from './containers/ForgotPassword';
import ResetPasswordPage from './containers/ResetPassword';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <Routes>
        {/* Admin routes */}
        <Route path="/admin" element={<AdminPrivateRoute Component={CMSHome} />} />
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
        <Route path="/admin/total" element={<AdminPrivateRoute Component={TotalsTable} />} />
        <Route path="/admin/total/create" element={<AdminPrivateRoute Component={CreateTotal} />} />
        <Route path="/admin/total/edit/:id" element={<AdminPrivateRoute Component={UpdateTotal} />} />
        <Route path="/admin/sosmed" element={<AdminPrivateRoute Component={SosmedTable} />} />
        <Route path="/admin/sosmed/create" element={<AdminPrivateRoute Component={CreateSosmed} />} />
        <Route path="/admin/sosmed/edit/:id" element={<AdminPrivateRoute Component={UpdateSosmed} />} />
        <Route path="/admin/review" element={<AdminPrivateRoute Component={ReviewTable} />} />
        <Route path="/admin/review/create" element={<AdminPrivateRoute Component={CreateReview} />} />
        <Route path="/admin/review/edit/:id" element={<AdminPrivateRoute Component={UpdateReview} />} />
        <Route path="/admin/mitra" element={<AdminPrivateRoute Component={MitraTable} />} />
        <Route path="/admin/mitra/create" element={<AdminPrivateRoute Component={CreateMitra} />} />
        <Route path="/admin/mitra/edit/:id" element={<AdminPrivateRoute Component={UpdateMitra} />} />
        <Route path="/admin/profile" element={<AdminPrivateRoute Component={ProfileTable} />} />
        <Route path="/admin/profile/create" element={<AdminPrivateRoute Component={CreateProfile} />} />
        <Route path="/admin/profile/edit/:id" element={<AdminPrivateRoute Component={UpdateProfile} />} />
        <Route path="/admin/anniversary" element={<AdminPrivateRoute Component={AnniversaryTable} />} />
        <Route path="/admin/anniversary/create" element={<AdminPrivateRoute Component={CreateAnniversary} />} />
        <Route path="/admin/anniversary/edit/:id" element={<AdminPrivateRoute Component={UpdateAnniversary} />} />
        <Route path="/admin/thementor" element={<AdminPrivateRoute Component={ThementorTable} />} />
        <Route path="/admin/thementor/create" element={<AdminPrivateRoute Component={CreateThementor} />} />
        <Route path="/admin/thementor/edit/:id" element={<AdminPrivateRoute Component={UpdateThementor} />} />
        <Route path="/admin/benefit-master-mentor" element={<AdminPrivateRoute Component={BenefitMasterMentorTable} />} />
        <Route path="/admin/benefit-master-mentor/create" element={<AdminPrivateRoute Component={CreateBenefitMasterMentor} />} />
        <Route path="/admin/benefit-master-mentor/edit/:id" element={<AdminPrivateRoute Component={UpdateBenefitMasterMentor} />} />
        <Route path="/admin/tujuan-master-mentor" element={<AdminPrivateRoute Component={TujuanMasterMentorTable} />} />
        <Route path="/admin/tujuan-master-mentor/create" element={<AdminPrivateRoute Component={CreateTujuanMasterMentor} />} />
        <Route path="/admin/tujuan-master-mentor/edit/:id" element={<AdminPrivateRoute Component={UpdateTujuanMasterMentor} />} />
        <Route path="/admin/syarat-master-mentor" element={<AdminPrivateRoute Component={SyaratMasterMentorTable} />} />
        <Route path="/admin/syarat-master-mentor/create" element={<AdminPrivateRoute Component={CreateSyaratMasterMentor} />} />
        <Route path="/admin/syarat-master-mentor/edit/:id" element={<AdminPrivateRoute Component={UpdateSyaratMasterMentor} />} />
        <Route path="/admin/benefit-trainer" element={<AdminPrivateRoute Component={BenefitTrainerTable} />} />
        <Route path="/admin/benefit-trainer/create" element={<AdminPrivateRoute Component={CreateBenefitTrainer} />} />
        <Route path="/admin/benefit-trainer/edit/:id" element={<AdminPrivateRoute Component={UpdateBenefitTrainer} />} />
        <Route path="/admin/syarat-trainer" element={<AdminPrivateRoute Component={SyaratTrainerTable} />} />
        <Route path="/admin/syarat-trainer/create" element={<AdminPrivateRoute Component={CreateSyaratTrainer} />} />
        <Route path="/admin/syarat-trainer/edit/:id" element={<AdminPrivateRoute Component={UpdateSyaratTrainer} />} />
        <Route path="/admin/logo" element={<AdminPrivateRoute Component={LogoTable} />} />
        <Route path="/admin/logo/create" element={<AdminPrivateRoute Component={CreateLogo} />} />
        <Route path="/admin/logo/edit/:id" element={<AdminPrivateRoute Component={UpdateLogo} />} />
        <Route path="/admin/emak-kece" element={<AdminPrivateRoute Component={EmakKeceTable} />} />
        <Route path="/admin/emak-kece/create" element={<AdminPrivateRoute Component={CreateEmakKece} />} />
        <Route path="/admin/emak-kece/edit/:id" element={<AdminPrivateRoute Component={UpdateEmakKece} />} />
        <Route path="/admin/all-banner" element={<AdminPrivateRoute Component={AllBannerTable} />} />
        <Route path="/admin/all-banner/create" element={<AdminPrivateRoute Component={CreateAllBanner} />} />
        <Route path="/admin/all-banner/edit/:id" element={<AdminPrivateRoute Component={UpdateAllBanner} />} />

        {/* User routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/okoclogin" element={<Login />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/visimisi" element={<Visimisi />} />
        <Route path="/nilaiinti" element={<NilaiInti />} />
        <Route path="/struktur" element={<Struktur />} />
        <Route path="/penggerak" element={<Penggerak />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/7top" element={<Seventop />} />
        <Route path="/merchandise" element={<Merchandise />} />
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
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;