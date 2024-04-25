import React, { useState } from "react";
import Header from "../asset/img/headertestimoni.png";

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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Testimoni</h2>
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
                    src="https://randomuser.me/api/portraits/women/81.jpg"
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Jane Doe</p>
                    <p className="text-xs text-gray-600">CEO, Company XYZ</p>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-xs font-semibold text-blue-500 hover:text-blue-700">
                    Lihat lebih banyak
                  </a>
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
                    src="https://randomuser.me/api/portraits/men/91.jpg"
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">John Smith</p>
                    <p className="text-xs text-gray-600">CTO, Tech Solutions</p>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-xs font-semibold text-blue-500 hover:text-blue-700">
                    Lihat lebih banyak
                  </a>
                </div>
              </div>
            </div>
            {/* End Testimoni item 2 */}
            {/* Testimoni item 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Mereka membantu kami mengubah visi kami menjadi realitas.
                  Terima kasih banyak!"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src="https://randomuser.me/api/portraits/women/54.jpg"
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Emily Johnson</p>
                    <p className="text-xs text-gray-600">COO, Startup ABC</p>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-xs font-semibold text-blue-500 hover:text-blue-700">
                    Lihat lebih banyak
                  </a>
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
                    src="https://randomuser.me/api/portraits/men/56.jpg"
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Michael Brown</p>
                    <p className="text-xs text-gray-600">
                      Manager, Company ABC
                    </p>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-xs font-semibold text-blue-500 hover:text-blue-700">
                    Lihat lebih banyak
                  </a>
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
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Sarah Johnson</p>
                    <p className="text-xs text-gray-600">
                      Marketing Manager, XYZ Inc.
                    </p>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-xs font-semibold text-blue-500 hover:text-blue-700">
                    Lihat lebih banyak
                  </a>
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
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">David Wilson</p>
                    <p className="text-xs text-gray-600">
                      Founder, Startup XYZ
                    </p>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-xs font-semibold text-blue-500 hover:text-blue-700">
                    Lihat lebih banyak
                  </a>
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
