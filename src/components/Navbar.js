/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import LogoOkOce from "@img/logo-okoce.webp";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [programDropdownVisible, setProgramDropdownVisible] =
    useState(false); /*Menu Program*/
  const [EtalaseDropdownVisible, setEtalaseDropdownVisible] =
    useState(false); /*Menu Etalase*/
  const [PeluangDropdownVisible, setPeluangDropdownVisible] =
    useState(false); /*Menu Peluang*/
  const [EventDropdownVisible, setEventDropdownVisible] =
    useState(false); /*Menu Event*/
  const [InformasiDropdownVisible, setInformasiDropdownVisible] =
    useState(false); /*Menu Informasi*/
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDropdownShow = () => {
    setDropdownVisible(true);
  };

  const handleDropdownHide = () => {
    setDropdownVisible(false);
  };
  /*Bawah Menu Program*/
  const handleProgramDropdownShow = () => {
    setProgramDropdownVisible(true);
  };

  const handleProgramDropdownHide = () => {
    setProgramDropdownVisible(false);
  };
  /*Atas Menu Program*/

  /*Bawah Menu Etalase*/
  const handleEtalaseDropdownShow = () => {
    setEtalaseDropdownVisible(true);
  };

  const handleEtalaseDropdownHide = () => {
    setEtalaseDropdownVisible(false);
  };
  /*Atas Menu Etalase*/

  /*Bawah Menu Peluang*/
  const handlePeluangDropdownShow = () => {
    setPeluangDropdownVisible(true);
  };

  const handlePeluangDropdownHide = () => {
    setPeluangDropdownVisible(false);
  };
  /*Atas Menu Peluang*/

  /*Bawah Menu Event*/
  const handleEventDropdownShow = () => {
    setEventDropdownVisible(true);
  };

  const handleEventDropdownHide = () => {
    setEventDropdownVisible(false);
  };
  /*Atas Menu Event*/

  /*Bawah Menu Informasi*/
  const handleInformasiDropdownShow = () => {
    setInformasiDropdownVisible(true);
  };

  const handleInformasiDropdownHide = () => {
    setInformasiDropdownVisible(false);
  };
  /*Atas Menu Informasi*/

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <nav class="border-b border-gray font-jost">
        {/* {Navbar Mobile} */}
        <div class="fixed w-svw bg-white top-0 z-50 flex items-center justify-between mx-auto p-2 max-h-24 shadow-lg">
          <a href="/" class="ml-8 ">
            <img src={LogoOkOce} class="h-[5rem]" alt="Ok Oce Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            class="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded={isDropdownVisible ? "true" : "false"}
            onClick={toggleDropdown}>
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            class={
              "absolute top-[4rem] left-0 w-full md:hidden" +
              (isDropdownVisible ? "" : " hidden")
            }
            id="navbar-multi-level">
            <ul class="flex flex-col font-small p-4 md:p-0 mt-4 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
              <li
                onMouseEnter={handleDropdownShow}
                onMouseLeave={handleDropdownHide}>
                <button
                  id="dropdownNavbarLink"
                  class="uppercase flex items-center justify-between w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                  Tentang Kami
                </button>

                {/*Dropdown menu */}
                <div
                  className={
                    "absolute z-100 font-normal drop-shadow-2xl divide-y divide-gray-100 rounded-lg top-[4.5rem] w-44 bg-white " +
                    (dropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="/sejarah"
                        class="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Sejarah
                      </a>
                    </li>
                    <li>
                      <a
                        href="/visimisi"
                        class="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Visi dan Misi
                      </a>
                    </li>
                    <li>
                      <a
                        href="/nilaiinti"
                        class="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Nilai Inti
                      </a>
                    </li>
                    <li>
                      <a
                        href="/struktur"
                        class="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Struktur Pengurus
                      </a>
                    </li>
                    <li>
                      <a
                        href="/penggerak"
                        class="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Penggerak
                      </a>
                    </li>
                    <li>
                      <a
                        href="/anniversary"
                        class="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Anniversary
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="/7top"
                  class="uppercase block py-2 px-3 text-gray-900 rounded hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">
                  7 Top
                </a>
              </li>
              <li
                onMouseEnter={handleEtalaseDropdownShow}
                onMouseLeave={handleEtalaseDropdownHide}>
                <button
                  id="dropdownEtalaseNavbarLink"
                  className="uppercase flex items-center justify-between w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">
                  Etalase
                </button>

                {/*Dropdown menu */}
                <div
                  class={
                    "absolute z-100 font-normal drop-shadow-2xl divide-y divide-gray-100 rounded-lg top-[9.5rem] w-44 bg-white " +
                    (EtalaseDropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownEtalaseNavbarLink">
                    <li>
                      <a
                        href="/merchandise"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Merchendise
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                onMouseEnter={handlePeluangDropdownShow}
                onMouseLeave={handlePeluangDropdownHide}>
                <button
                  id="dropdownPeluangNavbarLink"
                  className="uppercase flex items-center justify-between w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">
                  Peluang
                </button>
                {/*Dropdown menu */}
                <div
                  class={
                    "absolute z-100 font-normal drop-shadow-2xl divide-y divide-gray-100 rounded-lg top-[12rem] w-44 bg-white divide-gray-500 " +
                    (PeluangDropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownPeluangNavbarLink">
                    <li>
                      <a
                        href="/peluangusaha"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Peluang Usaha
                      </a>
                    </li>
                    <li>
                      <a
                        href="/peluangkerja"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Peluang Kerja
                      </a>
                    </li>
                    <li>
                      <a
                        href="/magang"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Magang
                      </a>
                    </li>
                    <li>
                      <a
                        href="/trainer"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Trainer
                      </a>
                    </li>
                    <li>
                      <a
                        href="/mentor"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Mentor
                      </a>
                    </li>
                    <li>
                      <a
                        href="/mitrakerjasama"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Mitra Kerjasama
                      </a>
                    </li>
                    <li>
                      <a
                        href="/donasi"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Donasi
                      </a>
                    </li>
                    {/* Add more submenu items here */}
                  </ul>
                </div>
              </li>

              <li
                onMouseEnter={handleEventDropdownShow}
                onMouseLeave={handleEventDropdownHide}>
                <button
                  id="dropdownEventNavbarLink"
                  className="uppercase flex items-center justify-between w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:w-auto">
                  Event
                </button>
                {/*Dropdown menu */}
                <div
                  class={
                    "absolute z-100 font-normal drop-shadow-2xl divide-y divide-gray-100 rounded-lg top-[14.5rem] w-44 bg-white divide-gray-500 " +
                    (EventDropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownEventNavbarLink">
                    <li>
                      <a
                        href="/event"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Daftar event
                      </a>
                    </li>
                    <li>
                      <a
                        href="/daftarberita"
                        className="ccamelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Daftar Berita
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                onMouseEnter={handleProgramDropdownShow}
                onMouseLeave={handleProgramDropdownHide}>
                <button
                  id="dropdownProgramNavbarLink"
                  className="uppercase flex items-center justify-between w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                  Program
                </button>

                {/*Dropdown menu */}
                <div
                  class={
                    "absolute z-100 font-normal drop-shadow-2xl divide-y divide-gray-100 rounded-lg top-[17rem] w-44 bg-white divide-gray-500 " +
                    (programDropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownProgramNavbarLink">
                    <li>
                      <a
                        href="/lokalbrand"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Brand Lokal OK
                      </a>
                    </li>
                    <li>
                      <a
                        href="/modalberkah"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Modal Berkah
                      </a>
                    </li>
                    <li>
                      <a
                        href="/emakkece"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Emak Kece
                      </a>
                    </li>
                    <li>
                      <a
                        href="/masjidpemberdaya"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Masjid Pemberdaya
                      </a>
                    </li>
                    <li>
                      <a
                        href="/desapreneur"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Desapreneur
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Thementor"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        The Mentor
                      </a>
                    </li>
                    <li>
                      <a
                        href="/mastermentor"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Master Mentor
                      </a>
                    </li>
                    <li>
                      <a
                        href="/digitalisasi"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Digitalisasi
                      </a>
                    </li>
                    {/* Add more submenu items here */}
                  </ul>
                </div>
              </li>

              <li
                onMouseEnter={handleInformasiDropdownShow}
                onMouseLeave={handleInformasiDropdownHide}>
                <button
                  id="dropdownInformasiNavbarLink"
                  className="uppercase flex items-center justify-between w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">
                  Informasi
                </button>
                {/*Dropdown menu */}
                <div
                  class={
                    "absolute z-100 font-normal drop-shadow-2xl divide-y divide-gray-100 rounded-lg top-[19.5rem] w-44 bg-white divide-gray-500 " +
                    (InformasiDropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownEventNavbarLink">
                    <li>
                      <a
                        href="/faq"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/testimoni"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 hover:text-black">
                        Testimoni Pengguna
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <button
                type="button"
                class="w-full text-white bg-blue-700 mr-6 mb-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Masuk
              </button>
              <button
                type="button"
                class="w-full text-white bg-blue-700 mr-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Daftar
              </button>
            </ul>
          </div>

          {/* {Navbar Laptop} */}
          <div class="w-11/12 hidden flex justify-center lg:inline-flex lg:flex-row lg:items-center">
            <ul class="flex flex-col text-base bg-gray-50 md:items-center md:space-x-6 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700 tracking-wide">
              <li
                onMouseEnter={handleDropdownShow}
                onMouseLeave={handleDropdownHide}>
                <button
                  id="dropdownNavbarLink"
                  class="uppercase w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:w-auto text-black md:hover:text-white focus:text-black hover:bg-red-600 md:hover:bg-red-600">
                  Tentang Kami
                </button>

                {/*Dropdown menu */}
                <div
                  className={
                    "absolute z-100 font-normal divide-y rounded-lg top-[4.3rem] w-44 drop-shadow-lg bg-white divide-gray-600 " +
                    (dropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link
                        to="/sejarah"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black hover:text-white focus:text-black">
                        Sejarah
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/visimisi"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black hover:text-white focus:text-black">
                        Visi dan Misi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/nilaiinti"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black hover:text-white focus:text-black">
                        Nilai Inti
                      </Link>
                    </li>
                    <Link
                      to="/struktur"
                      className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black hover:text-white focus:text-black">
                      Struktur Pengurus
                    </Link>
                    <li>
                      <Link
                        to="/penggerak"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black hover:text-white focus:text-black">
                        Penggerak
                      </Link>
                    </li>
                    <Link
                      to="/anniversary"
                      className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black hover:text-white focus:text-black">
                      Anniversary
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="/7top"
                  class="uppercase block py-2 px-3 rounded hover:bg-red-600 rounded-lg md:border-0 md:w-auto text-black hover:text-white focus:text-black hover:bg-red-600">
                  7 Top
                </a>
              </li>

              <li
                onMouseEnter={handleEtalaseDropdownShow}
                onMouseLeave={handleEtalaseDropdownHide}>
                <button
                  id="dropdownEtalaseNavbarLink"
                  className="uppercase w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:w-auto text-black md:hover:text-white focus:text-black hover:bg-red-600 md:hover:bg-red-600">
                  Etalase
                </button>

                {/*Dropdown menu */}
                <div
                  class={
                    "absolute z-100 font-normal divide-y divide-gray-100 rounded-lg top-[4.3rem] w-44 drop-shadow-lg bg-white divide-gray-600 " +
                    (EtalaseDropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownEtalaseNavbarLink">
                    <li>
                      <a
                        href="/merchendise"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Merchendise
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                onMouseEnter={handlePeluangDropdownShow}
                onMouseLeave={handlePeluangDropdownHide}>
                <button
                  id="dropdownPeluangNavbarLink"
                  className="uppercase w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:w-auto text-black md:hover:text-white focus:text-black hover:bg-red-600 md:hover:bg-red-600">
                  Peluang
                </button>
                {/*Dropdown menu */}
                <div
                  class={
                    "absolute z-100 font-normal divide-y divide-gray-100 rounded-lg top-[4.3rem] w-44 drop-shadow-lg bg-white divide-gray-600 " +
                    (PeluangDropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownPeluangNavbarLink">
                    <li>
                      <a
                        href="/peluangusaha"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Peluang Usaha
                      </a>
                    </li>
                    <li>
                      <a
                        href="/peluangkerja"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Peluang Kerja
                      </a>
                    </li>
                    <li>
                      <a
                        href="/magang"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Magang
                      </a>
                    </li>
                    <li>
                      <a
                        href="/trainer"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Trainer
                      </a>
                    </li>
                    <li>
                      <a
                        href="/mentor"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Mentor
                      </a>
                    </li>
                    <li>
                      <a
                        href="/mitrakerjasama"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Mitra Kerjasama
                      </a>
                    </li>
                    <li>
                      <a
                        href="/donasi"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Donasi
                      </a>
                    </li>
                    {/* Add more submenu items here */}
                  </ul>
                </div>
              </li>

              <li
                onMouseEnter={handleEventDropdownShow}
                onMouseLeave={handleEventDropdownHide}>
                <button
                  id="dropdownEventNavbarLink"
                  className="uppercase w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:w-auto text-black md:hover:text-white focus:text-black hover:bg-red-600 md:hover:bg-red-600">
                  Event
                </button>
                {/*Dropdown menu */}
                <div
                  class={
                    "absolute z-100 font-normal divide-y divide-gray-100 rounded-lg top-[4.3rem] w-44 drop-shadow-lg bg-white divide-gray-600 " +
                    (EventDropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownEventNavbarLink">
                    <li>
                      <a
                        href="/event"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Daftar Event
                      </a>
                    </li>
                    <li>
                      <a
                        href="/daftarberita"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Daftar Berita
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                onMouseEnter={handleProgramDropdownShow}
                onMouseLeave={handleProgramDropdownHide}>
                <button
                  id="dropdownProgramNavbarLink"
                  className="uppercase w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:w-auto text-black md:hover:text-white focus:text-black hover:bg-red-600 md:hover:bg-red-600">
                  Program
                </button>

                {/*Dropdown menu */}
                <div
                  class={
                    "absolute z-100 font-normal divide-y divide-gray-100 rounded-lg top-[4.3rem] w-44 drop-shadow-lg bg-white divide-gray-600 " +
                    (programDropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownProgramNavbarLink">
                    <li>
                      <a
                        href="/lokalbrand"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Brand Lokal OK
                      </a>
                    </li>
                    <li>
                      <a
                        href="/modalberkah"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Modal Berkah
                      </a>
                    </li>
                    <li>
                      <a
                        href="/emakkece"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Emak Kece
                      </a>
                    </li>
                    <li>
                      <a
                        href="/masjidpemberdaya"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Masjid Pemberdaya
                      </a>
                    </li>
                    <li>
                      <a
                        href="/desapreneur"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Desapreneur
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Thementor"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        The Mentor
                      </a>
                    </li>
                    <li>
                      <a
                        href="/mastermentor"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Master Mentor
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Digitalisasi
                      </a>
                    </li>
                    {/* Add more submenu items here */}
                  </ul>
                </div>
              </li>

              <li
                onMouseEnter={handleInformasiDropdownShow}
                onMouseLeave={handleInformasiDropdownHide}>
                <button
                  id="dropdownInformasiNavbarLink"
                  className="uppercase w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:w-auto text-black md:hover:text-white focus:text-black hover:bg-red-600 md:hover:bg-red-600">
                  Informasi
                </button>
                {/*Dropdown menu */}
                <div
                  class={
                    "absolute z-100 font-normal divide-y divide-gray-100 rounded-lg top-[4.3rem] w-44 drop-shadow-lg bg-white divide-gray-600 " +
                    (InformasiDropdownVisible ? "" : "hidden")
                  }>
                  <ul
                    className="py-2 text-sm text-black dark:text-black"
                    aria-labelledby="dropdownEventNavbarLink">
                    <li>
                      <a
                        href="/faq"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/testimoni"
                        className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Testimoni Pengguna
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="ml-[3rem]">
              <a
                class="text-white mr-6 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                href="https://www.ecsys.okoce.net/">
                Masuk
              </a>
              <a
                class="text-white bg-blue-700 mr-6 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 text-center bg-red-600 hover:bg-blue-700 dark:focus:ring-blue-800"
                href="https://www.ecsys.okoce.net/register">
                Daftar
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
