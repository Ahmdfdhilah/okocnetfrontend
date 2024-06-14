import React from "react";
import Header from "@img/headerthementor.png";
import Themen from "@img/thementor1.png";
import Themen2 from "@img/dokumentasi thementor.png"
import FloatingMenu from "../components/FloatingMenu";

const Thementor = () => {
  return (
    <>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 text-center text-white min-h-[677px] max-md:px-5">
        <img
          loading="lazy"
          src={Header}
          className="object-cover absolute inset-0 size-full" alt=""
        />
        <div className="relative self-center mt-20 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          &quot;The Mentor&quot; Training Online Penggerak OK OCE Indonesia
        </div>
        <div className="relative mt-16 mb-8 text-lg font-normal text-gray-300 leading-7 lg:text-xl sm:px-16 lg:px-48 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          &quot;The Mentor&quot; sebelumnya disebut TOT adalah program untuk
          melatih mentor mentor yang berkompeten dari penggerak. Yang akan
          berjalan setiap Minggu selama satu tahun.
        </div>

      </div>

      {/* Teks Content 1 */}
      <div className="px-7 pt-6 pb-4 my-5 text-lg leading-7 mr-2 ml-2 text-center text-black max-md:px-5 max-md:max-w-full lg:w-full">
        <div className="grid mobile:grid-flow-row mobile:grid-cols-1 lg:grid-flow-col lg:mt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="w-10/12 mx-auto">
              <h1 className="font-bold mobile:text-xl lg:text-3xl">Program ToT Mentor OK OCE Batch 8, Pengaruh ‘Ketenangan’ Dalam Public Speaking dan Coaching</h1>
              <p className="mt-10 text-justify text-lg mobile:mb-14 "> OK OCE terus menguatkan visi penciptaan lapangan kerja melalui
                pendampingan wirausaha dengan cara memperluas Mentor diseluruh wilayah
                Indonesia. Yang dilakukan melalui Program Training of Trainer ‘ToT
                Mentor’ OK OCE Batch 8 pada Jumat, 15 Maret 2024.
                <br /><br />
                “Salah satu kunci dalam Public Speaking adalah Ketenangan, ketenangan
                menjamin 50% dari Kesuksesan penyampaian pesan dalam Public Speaking,”
                ujar Aziz Munawar, Manager Kurikulum Program OK OCE Indonesia yang
                menjadi pemateri dalam Program ‘ToT Mentor’.
                {/* Teks Content 2 */}
                Aziz memberikan materi Public Speaking yang diharapkan bisa membangun
                skill para peserta untuk lebih baik menyampaikan pesan dalam menjalankan
                peran seorang Mentor. Ia juga menekankan dalam Terdapat 3 Power of
                Public Speaking, yaitu, The Power Of Mindset, The Power of Content dan
                The Power of Delivery. Masing-masing Power memiliki peran yang besar,
                seperti Mindset untuk terus belajar memberikan manfaat kepada sesama,
                Content yang menarik dan mudah dimengerti hingga Delivery berupa
                penyampaian pesan yang bisa diterima pendengar.
                <br /><br />
                {/* Teks Content 2 end */}

                {/* Teks Content 3 */}
                Irana Leila, Manager Pelatihan Program OK OCE turut hadir memberikan
                materi Coaching, ia menyampaikan, “Seorang Coach perlu memiliki kemampuan dasar ‘Mendengarkan’ yang baik, karena perlu mendorong Coachee
                mengeluarkan potensi untuk menyelesaikan masalah dengan pertanyaan
                terbuka”. Dalam kegitan Coaching, Coach tidak diperbolehkan memberikan
                pertanyaan tertutup karena akan menghambat ide dari Coachee sehingga
                bisa mempersulit pemikirannya. <br /> <br />Didalam Program ‘ToT Mentor’ OK OCE ini
                para peserta calon mentor dilatih untuk praktik secara langsung Public
                Speaking dan Coaching secara sederhana, berharap bisa memberikan
                pengalaman secara langsung secara teknis.</p>
              {/* Teks Content 3 end */}
            </div>
          </div>

          <div className="bg-gray-300 rounded-2xl py-16 lg:col-span-4">
            <div className="">
              <h1 className="text-2xl font-bold text-center">Dokumentasi Kegiatan</h1>
            </div>
            {/* Dokumentasi 1 */}
            <div className="max-w-md mx-auto mt-10 mobile:px-4">
              <img
                loading="lazy"
                src={Themen}
                className="object-cover w-full h-full max-md:h-auto rounded-xl" alt=""
              />
            </div>
            {/* Dokumentasi 2 */}
            <div className="max-w-md mx-auto mt-10 mobile:px-4">
              <img
                loading="lazy"
                src={Themen2}
                className="object-cover w-full h-80 max-md:h-auto rounded-xl mobile:h-52" alt=""
              />
            </div>
          </div>
        </div>
      </div >
      {/* Teks Content 1 end */}
      <FloatingMenu />
    </>
  );
};

export default Thementor;
