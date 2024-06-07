import React from "react";
import Header from "@img/headermasjidpemberdaya.png";
import Kmp from "@img/kmp.png";
import Tujuan1 from "@img/tujuan1.png";
import Tujuan2 from "@img/tujuan2.png";
import Tujuan3 from "@img/tujuan3.png";
import Output1 from "@img/output1.png";
import Output2 from "@img/output2.png";
import Output3 from "@img/output3.png";
import Pelaksana1 from "@img/pelaksana1.png";
import Pelaksana2 from "@img/pelaksana2.png";
import Pelaksana3 from "@img/pelaksana3.png";
import Peserta1 from "@img/peserta1.png";
import Peserta2 from "@img/peserta2.png";
import Peserta3 from "@img/peserta3.png";
import Peserta4 from "@img/peserta4.png";
import Peserta5 from "@img/peserta5.png";
import Peserta6 from "@img/peserta6.png";
import Durasi1 from "@img/durasi1.png";
import Durasi2 from "@img/durasi2.png";
import Durasi3 from "@img/durasi3.png";
import Durasi4 from "@img/durasi4.png";
import Tahapan1 from "@img/tahapan1.png";
import Tahapan2 from "@img/tahapan2.png";
import Tahapan3 from "@img/tahapan3.png";
import Tahapan4 from "@img/tahapan4.png";
import Tahapan5 from "@img/tahapan5.png";
import Tahapan6 from "@img/tahapan6.png";
import Timeline1 from "@img/timeline1.png";
import Timeline2 from "@img/timeline2.png";
import Timeline3 from "@img/timeline3.png";
import Timeline4 from "@img/timeline4.png";
import Materi from "@img/materi1.png";
import Key1 from "@img/key1.png";
import Key2 from "@img/key2.png";
import Key3 from "@img/key3.png";
import Key4 from "@img/key4.png";
import Key5 from "@img/key5.png";

const Masjidpemberdaya = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[678px] max-md:px-5 max-md:max-w-full shadow-lg bg-white rounded-3xl">
          <img
            loading="lazy"
            src={Header}
            className="object-cover absolute inset-0 w-full h-full"
          />
          <div className="relative mt-16 mb-28 w-full max-w-[1174px] max-md:my-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow text-2xl font-bold leading-7 text-center text-white max-md:mt-10">
                  <img
                    loading="lazy"
                    src={Kmp}
                    className="w-full aspect-[1.92]"
                  />
                  <a href="https://masjidpemberdaya.org/" className="justify-center px-12 py-7 mt-7 bg-green-700 rounded-3xl max-md:px-5">Pelajari Selengkapnya</a>
                </div>
              </div>
              <div className="flex flex-col mt-12 ml-7 w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col mt-8 text-white max-md:mt-10 max-md:max-w-full">
                  <div className="mb-3 mt-10 ml-8 text-4xl font-bold leading-10 max-md:max-w-full">
                    KOLABORASI MASJID PEMBERDAYA
                  </div>
                  <div className="mt-5 ml-10 text-lg leading-7 text-justify max-md:max-w-full">
                    KMP adalah himpunan masjid- masjid yang bergabung atas dasar
                    visi yang sama dalam mewujudkan peran masjid dalam
                    mengentaskan KEMISKINAN. KMP adalah entitas berbadan hukum
                    perkumpulan yang beranggotakan para perwakilan pengurus
                    masjid pemberdaya di Indonesia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col mt-6 mb-5 px-20 py-7 text-center text-black bg-white rounded-3xl max-md:px-5"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <div className="self-center text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            PROGRAM MASJID PEMBERDAYA
          </div>
          <div className="self-end mt-4 text-xl leading-8 max-md:max-w-full">
            Merupakan Pengembangan Kewirausahaan Terpadu Menggunakan Kurikulum 7
            Top Berbasis Masjid
          </div>
        </div>

        {/* Content tujuan masjid pemberdaya */}

        <div className="flex flex-col mt-20 mb-5 w-full max-w-[1217px] max-md:max-w-full">
          <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Tujuan/Outcome
          </div>
          <div className="mt-12 text-lg leading-4 text-neutral-700 max-md:mt-10 max-md:max-w-full">
            Yuk upgrade Wirausaha Masjid Kamu Bergabung Dengan OKOCE{" "}
          </div>
          <div className="mt-11 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-10 py-11 w-full text-xl leading-8 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={Tujuan1}
                    className="w-10 aspect-square"
                  />
                  <div className="mt-4 max-md:max-w-full">
                    Menjadikan masjid memiliki kemampuan membiayai operasional
                    dan menciptakan lapangan kerja dari usaha yang dimiliki oleh
                    masjid
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-10 pt-9 pb-16 w-full text-xl leading-8 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={Tujuan2}
                    className="aspect-square w-[50px]"
                  />
                  <div className="mt-4 max-md:max-w-full">
                    Membantu masjid untuk meningkatkan pendapatan
                    karyawan/imam/muadzin/marbot, minimal setara UMR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col self-center px-10 py-14 mt-14 max-w-full text-xl leading-8 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm w-[581px] max-md:px-5 max-md:mt-10">
            <img loading="lazy" src={Tujuan3} className="w-10 aspect-square" />
            <div className="mt-4 max-md:max-w-full">
              Menjadikan masjid sebagai pusat pengembangan ekonomi jamaah dan
              masyarakat sekitar.
            </div>
          </div>
        </div>

        {/* Content tujuan masjid pemberdaya end */}

        {/* OUTPUT Content */}

        <div className="flex flex-col mt-12 mb-10 px-10">
          <div className="self-center text-5xl font-bold text-center text-black leading-[57.6px] max-md:text-4xl">
            OUTPUT
          </div>
          <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-10 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xl leading-6 text-center text-black max-md:mt-10">
                  <img
                    loading="lazy"
                    src={Output1}
                    className="self-center aspect-[1.09] w-[217px]"
                  />
                  <div className="mt-4">Masjid Memiliki Usaha</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xl leading-6 text-center text-black max-md:mt-10">
                  <img
                    loading="lazy"
                    src={Output2}
                    className="self-center mx-5 aspect-[0.99] w-[199px]"
                  />
                  <div className="mt-4">Jamaah Memiliki Usaha </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-xl leading-6 text-center text-black max-md:mt-10">
                  <img
                    loading="lazy"
                    src={Output3}
                    className="self-center max-w-full aspect-square w-[200px]"
                  />
                  <div className="mt-1">
                    Usaha Yang Telah Dimiliki
                    <br />
                    Jamaah Naik Kelas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Output Content end */}

        {/* pelaksana */}

        <div className="flex flex-col mt-20 3items-center w-full max-w-[1099px] max-md:max-w-full">
          <div className="text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            PELAKSANA DAN PENDUKUNG
          </div>
          <div className="mt-14 w-full max-w-[1008px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-12 max-md:flex-col max-md:gap-10">
              <div className="flex flex-col items-center w-[38%] max-md:w-full">
                <img
                  loading="lazy"
                  src={Pelaksana1}
                  className="shrink-0 max-w-full aspect-square w-[200px] max-md:mt-10"
                />
                <div className="mt-4 text-xl leading-6 text-center text-black">
                  Dapat Berkolaborasi Dengan <br />
                  Investor, Sponsor atau Lembaga Lain
                </div>
              </div>
              <div className="flex flex-col items-center ml-20 w-[38%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={Pelaksana2}
                  className="shrink-0 max-w-full aspect-square w-[200px] max-md:mt-10"
                />
                <div className="mt-4 text-xl leading-6 text-center text-black">
                  Penggerak OK OCE Berkolaborasi Dengan Masjid Sekitar
                </div>
              </div>
              <div className="flex flex-col items-center ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={Pelaksana3}
                  className="shrink-0 max-w-full aspect-square w-[200px] max-md:mt-10"
                />
                <div className="mt-4 text-xl leading-[120%] text-center text-black">
                  Dukungan Dari OK OCE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* pelaksana */}

        {/* PESERTA CONTENT  */}
        <div className="flex flex-col items-center px-20 py-16 mt-20 max-md:px-5">
          <div className="text-4xl font-bold leading-10 text-center text-black">
            PESERTA
          </div>
          <div className="mt-16 w-full max-w-[1131px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-10">
              <div className="flex flex-col items-center w-[27%] max-md:w-full">
                <img loading="lazy" src={Peserta1} />
                <div className="mt-4 text-xl leading-6 text-center text-black">
                  Pengurus/Jamaah masjid atau masyarakat dalam radius 40 rumah
                  dari sekitar masjid
                </div>
              </div>
              <div className="flex flex-col items-center ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" src={Peserta2} />
                <div className="mt-4 text-xl leading-6 text-center text-black">
                  Satu Kelompok Maksimal
                  <br /> 20 Orang
                </div>
              </div>
              <div className="flex flex-col items-center ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet={Peserta3}
                  className="shrink-0 max-w-full aspect-square w-[150px] max-md:mt-10"
                />
                <div className="mt-4 text-xl leading-6 text-center text-black">
                  Laki-laki atau
                  <br /> Perempuan
                </div>
              </div>
              <div className="flex flex-col items-center ml-5 w-[18%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={Peserta4}
                  className="shrink-0 max-w-full aspect-square w-[150px] max-md:mt-10"
                />
                <div className="mt-4 text-xl leading-6 text-center text-black">
                  Laki-laki atau
                  <br /> Perempuan
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 max-w-full w-[475px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-10">
              <div className="flex flex-col items-center w-[65%] max-md:w-full">
                <img
                  loading="lazy"
                  src={Peserta5}
                  className="shrink-0 max-w-full aspect-square w-[150px] max-md:mt-10"
                />
                <div className="mt-4 text-xl leading-6 text-center text-black">
                  Anggota OK OCE/didaftarkan Menjadi OK OCE
                </div>
              </div>
              <div className="flex flex-col items-center ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={Peserta6}
                  className="shrink-0 max-w-full aspect-square w-[150px] max-md:mt-10"
                />
                <div className="mt-4 text-xl leading-6 text-center text-black">
                  Belum Memiliki Usaha Atau Usaha Mikro
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PESERTA CONTENT END */}

        {/* DURASI CONTENT */}

        <div className="flex flex-col items-center px-16 pt-12 pb-20 max-md:px-5">
          <div className="flex flex-col items-center w-full max-w-[1154px] max-md:max-w-full">
            <div className="text-4xl font-bold leading-10 text-center text-black">
              DURASI
            </div>
            <div className="mt-20 w-full max-w-[1131px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-10">
                <div className="flex flex-col items-center w-[27%] max-md:w-full">
                  <img
                    loading="lazy"
                    src={Durasi1}
                    className="shrink-0 max-w-full aspect-square w-[150px] max-md:mt-10"
                  />
                  <div className="mt-4 text-xl leading-6 text-center text-black">
                    Setiap Kelas Berdurasi 6 Bulan
                  </div>
                </div>
                <div className="flex flex-col items-center ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={Durasi2}
                    className="shrink-0 max-w-full aspect-square w-[150px] max-md:mt-10"
                  />
                  <div className="mt-4 text-xl leading-6 text-center text-black">
                    Pertemuan 2 Pekan Sekali
                  </div>
                </div>
                <div className="flex flex-col items-center ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={Durasi3}
                    className="shrink-0 max-w-full aspect-square w-[150px] max-md:mt-10"
                  />
                  <div className="mt-4 text-xl leading-6 text-center text-black">
                    12 Sesi Pertemuan
                  </div>
                </div>
                <div className="flex flex-col items-center ml-5 w-[18%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={Durasi4}
                    className="shrink-0 max-w-full aspect-square w-[150px] max-md:mt-10"
                  />
                  <div className="mt-4 text-xl leading-6 text-center text-black">
                    2 Jam Pertemuan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DURASI CONTENT END */}

        {/* TAHAPAN CONTENT */}
        <div className="flex flex-col items-center px-16 pt-7 pb-14  max-md:px-5">
          <div className="flex flex-col items-center w-full max-w-[1076px] max-md:max-w-full">
            <div className="text-4xl font-bold leading-10 text-center text-black">
              TAHAPAN
            </div>
            <div className="mt-20 w-full max-w-[1000px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-10">
                <div className="flex flex-col items-center w-[38%] max-md:w-full">
                  <img
                    loading="lazy"
                    src={Tahapan1}
                    className="shrink-0 max-w-full aspect-square w-[200px] max-md:mt-10"
                  />
                  <div className="mt-4 text-xl leading-6 text-center text-black">
                    Sosialisasi
                  </div>
                </div>
                <div className="flex flex-col items-center ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={Tahapan2}
                    className="shrink-0 max-w-full aspect-square w-[200px] max-md:mt-10"
                  />
                  <div className="mt-4 text-xl leading-6 text-center text-black">
                    Pendaftaran
                  </div>
                </div>
                <div className="flex flex-col items-center ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={Tahapan3}
                    className="shrink-0 max-w-full aspect-square w-[200px] max-md:mt-10"
                  />
                  <div className="mt-4 text-xl leading-6 text-center text-black">
                    Pelatihan
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-14 w-full max-w-[990px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-10">
                <div className="flex flex-col items-center w-[39%] max-md:w-full">
                  <img
                    loading="lazy"
                    src={Tahapan4}
                    className="shrink-0 mt-8 max-w-full aspect-square w-[200px] max-md:mt-10"
                  />
                  <div className="mt-4 text-xl leading-6 text-center text-black">
                    Wisuda/Launching Usaha
                  </div>
                </div>
                <div className="flex flex-col items-center ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={Tahapan5}
                    className="shrink-0 mt-8 max-w-full aspect-square w-[200px] max-md:mt-10"
                  />
                  <div className="mt-4 text-xl leading-6 text-center text-black">
                    Pendampingan Selama dan Setelah Pelatihan
                  </div>
                </div>
                <div className="flex flex-col items-center ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={Tahapan6}
                    className="grow shrink-0 max-w-full aspect-[0.78] w-[180px] max-md:mt-10"
                  />
                  <div className="mt-4 text-xl leading-6 text-center text-black">
                    Penghargaan Setahun Sekali Masjid Pemberdaya Dari OK OCE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TAHAPAN CONTENT END */}

        {/* TIME LINE CONTENT */}
        <div className="flex flex-col items-center px-16 pt-2.5 pb-8 max-md:px-5">
          <div className="flex flex-col w-full max-w-[986px] max-md:max-w-full">
            <div className="self-center text-4xl font-bold leading-10 text-center text-black">
              TIMELINE
            </div>
            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-2.5 mt-4 text-2xl font-bold leading-7 text-center text-black max-md:mt-10">
                    <img
                      loading="lazy"
                      src={Timeline1}
                      className="self-center aspect-[1.14] w-[147px]"
                    />
                    <div className="mt-11 max-md:mt-10">MINGGU KE -1</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-2.5 mt-4 text-2xl font-bold leading-7 text-center text-black max-md:mt-10">
                    <img
                      loading="lazy"
                      src={Timeline2}
                      className="self-center aspect-[1.16] w-[152px]"
                    />
                    <div className="mt-11 max-md:mt-10">MINGGU KE -2</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-5 text-2xl font-bold leading-7 text-center text-black max-md:mt-10">
                    <img
                      loading="lazy"
                      src={Timeline3}
                      className="self-center aspect-[2.04] w-[184px]"
                    />
                    <div className="mt-14 max-md:mt-10 max-md:mr-2.5">
                      MINGGU KE -3 SAMPAI 24
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-2 text-2xl font-bold leading-7 text-center text-black max-md:mt-10">
                    <img
                      loading="lazy"
                      src={Timeline4}
                      className="self-center ml-2.5 aspect-[1.14] w-[147px]"
                    />
                    <div className="mt-14 max-md:mt-10">MINGGU KE-25</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TIME LINE CONTENT END */}

        {/* MATERI CONTENT */}
        <div className="flex flex-col items-center mt-20 px-16 pt-7 pb-14 max-md:px-5">
          <div className="flex flex-col w-full max-w-[1222px] max-md:max-w-full">
            <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
              MATERI{" "}
            </div>
            <div className="mt-4 text-lg leading-4 text-neutral-700 max-md:max-w-full">
              Yuk upgrade Wirausaha Masjid Kamu Bergabung Dengan OKOCE{" "}
            </div>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Membangun Pola Pikir dan Mental Wirausaha
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Kepemimpinan dan Membangun Tim Pemenang
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Menggali Ide dan Menetapkan Target Usaha
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Menyusun Business Model Canvas
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Legalitas dan Perizinan
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Keuangan Dasar (Modal, HPP dan Laba Rugi
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Strategi Mendapatkan Modal Usaha
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Membangun Merk yang Kuat
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Pemasaran Digital
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Kerampilan Menjual
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center mt-8 w-full max-w-[1190px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Strategi Meningkatkan Omset
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 py-11 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={Materi}
                      className="w-10 aspect-square"
                    />
                    <div className="mt-4 max-md:max-w-full">
                      Keuangan Lanjutan (Arus Kas, Neraca dan Investasi)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MATERI CONTENT */}

        {/* KUNCI SUKSES */}
        <div className="flex flex-col items-center px-16 pt-6 pb-9 max-md:px-5">
          <div className="flex flex-col w-full max-w-[1120px] max-md:max-w-full">
            <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
              Kunci Sukses/Key Succes Factor
            </div>
            <div className="mt-8 text-lg leading-4 text-neutral-700 max-md:max-w-full">
              Yuk upgrade Wirausaha Masjid Kamu Dengan Kunci Sukses dari OKOCE
            </div>
            <div className="self-center mt-14 w-full max-w-[1011px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center text-2xl leading-9 text-justify text-black max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col px-8 py-10 bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:max-w-full">
                      <img
                        loading="lazy"
                        src={Key1}
                        className="w-10 aspect-square"
                      />
                      <div className="mt-4">
                        Keuangan Lanjutan (Arus Kas, Neraca dan Investasi)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center text-2xl leading-9 text-justify text-black max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col px-8 pt-7 pb-16 bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet={Key2}
                        className="aspect-square w-[50px]"
                      />
                      <div className="mt-4">Sumber daya yang memadai</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center mt-16 w-full max-w-[1011px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center text-2xl leading-9 text-justify text-black max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col px-7 py-10 bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:max-w-full">
                      <img
                        loading="lazy"
                        src={Key3}
                        className="w-10 aspect-square"
                      />
                      <div className="mt-4">Relawan Trainer dan Mentor</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center text-2xl leading-9 text-justify text-black max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col px-7 py-10 bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:max-w-full">
                      <img
                        loading="lazy"
                        src={Key4}
                        className="w-10 aspect-square"
                      />
                      <div className="mt-4">Materi yang mudah dipahami</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center px-7 py-10 mt-16 w-[438px] max-w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
              <img loading="lazy" src={Key5} className="w-10 aspect-square" />
              <div className="mt-4">Pendampingan berkelanjutan</div>
            </div>
          </div>
        </div>

        {/* KUNCI SUKSES END */}
      </div>
    </>
  );
};

export default Masjidpemberdaya;
