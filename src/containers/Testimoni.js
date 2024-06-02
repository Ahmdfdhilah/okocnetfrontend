import React from "react";
import Header from "@img/headertestimoni.png";
import Testi1 from "@img/testi1.jpg";
import Testi2 from "@img/testi2.jpg";
import Testi3 from "@img/testi3.jpg";
import Testi4 from "@img/testi4.jpg";
import Testi5 from "@img/testi5.jpg";
import Testi6 from "@img/testi6.jpg";

const Testimoni = () => {
  return (
    <>
      <section
        class="mt-[4em] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Header})`,
          width: `100%`,
          height: `100%`,
          backgroundSize: `cover`,
        }}>
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Yuk, Mulai Gabung dan Dapatkan Hasil Tambahan dengan daftar
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Fondasi kami, idemu, bersama-sama kita maju dan berkembang untuk
            menciptakan masa depan bersama.
          </p>
        </div>
      </section>

      {/* Testimoni section */}
      <section className="bg-gray-100 py-12">
        <div className="container my-10 mx-auto px-4">
          <h2 className="text-4xl font-bold my-14 text-center text-sky-700">Pendapat Mereka Tentang Kami!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Testimoni item 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Saya sangat senang bisa bergabung dengan tim ini. Mereka
                  memberikan layanan terbaik dan hasilnya luar biasa!"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={Testi1}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Jane Doe</p>
                    <p className="text-xs text-gray-600">CEO, Company XYZ</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 1 */}
            {/* Testimoni item 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Pelayanan pelanggan mereka sangat responsif dan solutif.
                  Sangat merekomendasikan untuk bekerja sama dengan mereka."
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={Testi2}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">John Smith</p>
                    <p className="text-xs text-gray-600">CTO, Tech Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 2 */}
            {/* Testimoni item 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Mereka membantu kami mengubah visi kami menjadi realitas.
                  Terima kasih banyak OKE OCE INDONESIA!"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={Testi3}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Emily Johnson</p>
                    <p className="text-xs text-gray-600">COO, Startup ABC</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 3 */}
            {/* Testimoni item 4 */}
            <div className="mt-[2rem] bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Pelayanan yang luar biasa! Sangat merekomendasikan untuk
                  semua orang."
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={Testi4}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Michael Brown</p>
                    <p className="text-xs text-gray-600">
                      Manager, Company ABC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 4 */}
            {/* Testimoni item 5 */}
            <div className="mt-[2rem] bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Pelayanan cepat dan hasilnya memuaskan. Akan merekomendasikan
                  kepada teman-teman saya!"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={Testi5}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Sarah Johnson</p>
                    <p className="text-xs text-gray-600">
                      Marketing Manager, XYZ Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 5 */}
            {/* Testimoni item 6 */}
            <div className="mt-[2rem] bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Pelayanan yang sangat ramah dan kompeten. Sangat puas dengan
                  hasilnya!"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={Testi6}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">David Wilson</p>
                    <p className="text-xs text-gray-600">
                      Founder, Startup XYZ
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 6 */}
          </div>
        </div>
      </section>
      {/* End Testimoni section */}
    </>
  );
};

export default Testimoni;
