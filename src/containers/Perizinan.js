import React from "react";
import Top from "@img/7top-rb.webp";
import Halal from "@img/7 top/perizinan/izin-sertifikasi-halal.png";
import Berusaha from "@img/7 top/perizinan/nomer-izin-berusaha.png";
import Kosmetik from "@img/7 top/perizinan/izin-sertifikasi-kosmetik.png";
import Pangan from "@img/7 top/perizinan/izin-sertifikasi-pangan.png";
import Haki from "@img/7 top/perizinan/haki.png";
import Pkrt from "@img/7 top/perizinan/sertifikasi-pkrt.png";
import a7 from "@img/7 top/perizinan/7.png";
import header from "@img/7 top/perizinan/headerperizinan.png";

const Perizinan = () => {
  return (
    <>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 min-h-[677px] max-md:pl-5">
        <img
          loading="lazy"
          src={header}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative mt-24 w-full max-w-[1196px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow justify-center p-2.5 w-full rounded-3xl shadow-sm bg-opacity-70 max-md:mt-10">
                <img loading="lazy" src={a7} className="w-full aspect-[0.79]" />
              </div>
            </div>
            <div className="flex flex-col ml-10 w-[78%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col self-stretch p-8 my-auto w-full text-white bg-sky-700 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                  Perizinan
                </div>
                <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                  Peserta akan dijelaskan proses perizinan sesuai kebutuhannya.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center px-16 py-20 text-center text-black max-md:px-5">
        <div className="flex flex-col mt-6 w-full max-w-[1093px] max-md:max-w-full">
          <div className="self-center text-4xl font-bold leading-10">
            Perizinan
          </div>
          <div className="mt-10 text-lg leading-7 max-md:mt-10 max-md:max-w-full">
            Melalui OK OCE Indonesia, usaha sobat akan mendapatkan bimbingan
            dalam mengelola perizinan usaha oleh Mentor OK OCE Indonesia.
            Fasilitas tersebut, dapat diakses melalui sistem OK OCE Indonesia.
          </div>
        </div>
      </div>

      {/* Izin sertifikasi halal */}
      <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
              <div className="flex flex-col grow items-start px-16 py-8 w-full text-xl font-medium leading-6 text-center text-white bg-sky-700 shadow-sm rounded-[40px_0px_0px_40px] max-md:px-5 max-md:items-center">
                <img
                  loading="lazy"
                  src={Halal}
                  className="w-[149px] aspect-[1.19]"
                />
                <div className="mt-4">Izin Sertifikasi Halal</div>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                &quot;Izin sertifikasi halal memastikan bahwa produk memenuhi
                standar syariah Islam, memberikan jaminan kepada konsumen Muslim
                bahwa produk tersebut bebas dari bahan-bahan haram dan
                diproduksi sesuai dengan prinsip-prinsip halal.&quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:
                <a
                  href="https://ptsp.halal.go.id/"
                  className="underline text-blue-500"
                  target="_blank">
                  https://ptsp.halal.go.id/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Izin sertifikasi halal End */}

      {/* NIB */}
      <div className="flex justify-center items-center px-16 py-11 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
              <div className="flex flex-col grow px-16 py-7 w-full text-xl font-medium leading-6 text-center text-white bg-red-600 shadow-sm rounded-[40px_0px_0px_40px] max-md:px-5 max-md:items-center">
                <img
                  loading="lazy"
                  src={Berusaha}
                  className="aspect-[1.16] w-[155px]"
                />
                <div className="mt-4">Nomor Izin Berusaha</div>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center px-12 py-7 w-full text-lg leading-7 text-center text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                Nomor Induk Berusaha (NIB) merupakan identitas usaha yang wajib
                dimiliki oleh setiap pelaku usaha. Setiap pelaku usaha wajib
                memiliki Nomor Induk Berusaha segera buat Nomor Induk Berusaha
                (NIB) untuk memudahkan akses legalitas, memperluas peluang
                bisnis, dan meningkatkan kredibilitas usaha Anda di mata
                pemerintah dan konsumen.
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:
                <a
                  href="https://oss.go.id/"
                  className="underline text-blue-500"
                  target="_blank">
                  https://oss.go.id/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NIB END */}

      {/* IZIN KOSMETIK */}
      <div className="flex justify-center items-center px-16 py-11 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-20 pt-3.5 pb-10 w-full text-xl font-medium leading-6 text-center text-white bg-sky-700 shadow-sm rounded-[40px_0px_0px_40px] max-md:px-5">
                <img
                  loading="lazy"
                  src={Kosmetik}
                  className="self-center aspect-[1.01] w-[133px]"
                />
                <div className="mt-4 max-md:mx-1">
                  Izin Sertifikasi Kosmetik
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center px-11 py-4 w-full text-lg leading-7 text-center text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                &quot;Dapatkan izin sertifikasi kosmetik, Obat Tradisional,
                Suplemen Kesehatan, dan Obat untuk menjamin keamanan, kualitas,
                dan legalitas produk Anda, serta untuk meningkatkan kepercayaan
                konsumen terhadap merek Anda.&quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan diatas lebih
                lengkap, Sobat bisa mengunjungi:{" "}
                <a
                  href="https://notifkos.pom.go.id/"
                  className="underline text-blue-500"
                  target="_blank">
                  https://notifkos.pom.go.id{" "}
                </a>
                (Izin/ sertifikasi Kosmetik) <br />
                <a
                  href="https://asrot.pom.go.id/"
                  className="underline text-blue-500"
                  target="_blank">
                  https://asrot.pom.go.id
                </a>{" "}
                (Obat Tradisional) <br />
                <a
                  href="https://asrot.pom.go.id/asrot/"
                  className="underline text-blue-500"
                  target="_blank">
                  e-Registration OTSM - BPOM
                </a>
                (Suplemen Kesehatan)
                <br />
                <a
                  href="https://new-aero.pom.go.id/"
                  className="underline text-blue-500"
                  target="_blank">
                  https://new-aero.pom.go.id/
                </a>{" "}
                (Obat).
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* IZIN KOSMETIK END */}

      {/* IZIN SERTIF PANGAN */}
      <div className="flex justify-center items-center px-16 py-11 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-20 py-6 w-full text-xl font-medium leading-6 text-center text-white bg-red-600 shadow-sm rounded-[40px_0px_0px_40px] max-md:px-5">
                <img
                  loading="lazy"
                  src={Pangan}
                  className="self-center aspect-[0.99] w-[133px]"
                />
                <div className="mt-4 max-md:mx-1">Izin Sertifikasi Pangan</div>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center p-14 w-full text-lg leading-7 text-center text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                &quot;Dapatkan izin sertifikasi pangan untuk memastikan produk
                makanan Anda memenuhi standar keamanan dan kualitas, serta
                meningkatkan kepercayaan konsumen.&quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:{" "}
                <a
                  href="https://registrasipangan.pom.go.id/"
                  className="underline text-blue-500"
                  target="_blank">
                  Beranda | Direktorat Registrasi Pangan Olahan (pom.go.id)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* IZIN SERTIF PANGAN */}

      {/* IZIN HAKI */}
      <div className="flex justify-center items-center px-16 py-11 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-16 pt-6 pb-9 w-full text-xl font-medium leading-6 text-center text-white bg-sky-700 shadow-sm rounded-[40px_0px_0px_40px] max-md:px-5">
                <img
                  loading="lazy"
                  src={Haki}
                  className="self-center aspect-[1.2] w-[157px]"
                />
                <div className="mt-4">Izin Sertifikasi HAKI</div>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center px-8 py-11 w-full text-lg leading-7 text-center text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                &quot;Ajukan izin sertifikasi Hak Kekayaan Intelektual (HAKI)
                untuk melindungi dan mengamankan hak cipta, merek dagang, serta
                inovasi Anda dari penggunaan yang tidak sah.&quot;
                <br />
                Berikut informasi Pendaftaran Hak Merek:
                <br />- Tata Cara Pendaftaran{" "}
                <a
                  href="https://www.dgip.go.id/menu-utama/merek/proses-pendaftaran-merek"
                  className="underline text-blue-500"
                  target="_blank">
                  https://www.dgip.go.id/menu-utama/merek/proses-pendaftaran-merek
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* IZIN HAKI END */}

      {/* PKRT */}
      <div className="flex flex-col items-center px-16 pt-12 pb-20 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-20 py-4 w-full text-xl font-medium leading-6 text-center text-white bg-red-600 shadow-sm rounded-[40px_0px_0px_40px] max-md:px-5">
                <img
                  loading="lazy"
                  src={Pkrt}
                  className="self-center aspect-[1.02] w-[155px]"
                />
                <div className="mt-5">Izin Sertifikasi PKRT</div>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center px-8 py-11 w-full text-lg leading-7 text-center text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                &quot;Ajukan izin sertifikasi Hak Kekayaan Intelektual (HAKI)
                untuk melindungi dan mengamankan hak cipta, merek dagang, serta
                inovasi Anda dari penggunaan yang tidak sah.&quot;
                <br />
                Berikut informasi Pendaftaran Hak Merek:
                <br />- Tata Cara Pendaftaran{" "}
                <a
                  href="https://www.dgip.go.id/menu-utama/merek/proses-pendaftaran-merek"
                  className="underline text-blue-500"
                  target="_blank">
                  https://www.dgip.go.id/menu-utama/merek/proses-pendaftaran-merek
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PKRT END */}
    </>
  );
};

export default Perizinan;
