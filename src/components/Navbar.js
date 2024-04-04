/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [programDropdownVisible, setProgramDropdownVisible] = useState(false); /*Menu Program*/


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
    return (
        <>
            <nav className="border-b border-gray">
                <div className="bg-white fixed top-0 z-50 w-full flex items-center justify-between mx-auto p-2 max-h-24">
                    <a href="#" className="flex items-center">
                        <img src="https://okoce.net/wp-content/uploads/2021/03/logo-okoce-01.png" className="h-[120px]" alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-small p-4 md:p-0 mt-4 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
                            <li onMouseEnter={handleDropdownShow} onMouseLeave={handleDropdownHide}>
                                <button id="dropdownNavbarLink" className="uppercase flex items-center justify-between w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">Tentang Kami</button>

                                {/*Dropdown menu */}
                                <div className={"absolute z-100 font-normal divide-y divide-gray-100 rounded-lg top-[60px] w-44 dark:bg-white dark:divide-gray-600 " + (dropdownVisible ? '' : 'hidden')}>
                                    <ul className="py-2 text-sm text-black dark:text-black" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="https://www.google.com" class="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Visi dan Misi</a>
                                        </li>
                                        <li>
                                            <a href="#" class="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nilai Inti dan 7 Top</a>
                                        </li>
                                        <li>
                                            <a href="#" class="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Struktur Pengurus</a>
                                        </li>
                                        <li>
                                            <a href="#" class="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logo dan Sejarah</a>
                                        </li>
                                        <li>
                                            <a href="#" class="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Penggerak</a>
                                        </li>
                                        <li>
                                            <a href="#" class="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Anniversary</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" class="uppercase block py-2 px-3 text-gray-900 rounded hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">7 Top</a>
                            </li>
                            <li>
                                <a href="#" class="uppercase block py-2 px-3 text-gray-900 rounded hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">Etalase</a>
                            </li>
                            <li>
                                <a href="#" class="uppercase block py-2 px-3 text-gray-900 rounded hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">Peluang</a>
                            </li>
                            <li>
                                <a href="#" class="uppercase block py-2 px-3 text-gray-900 rounded hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">Event</a>
                            </li> 
                            <li onMouseEnter={handleProgramDropdownShow} onMouseLeave={handleProgramDropdownHide}>
                                <button id="dropdownProgramNavbarLink" className="uppercase flex items-center justify-between w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">Program</button>

                                {/*Dropdown menu */}
                                <div className={"absolute z-100 font-normal divide-y divide-gray-100 rounded-lg top-[60px] w-44 dark:bg-white dark:divide-gray-600 " + (programDropdownVisible ? '' : 'hidden')}>
                                    <ul className="py-2 text-sm text-black dark:text-black" aria-labelledby="dropdownProgramNavbarLink">
                                        <li>
                                            <a href="#" className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Brand Lokal OK</a>
                                        </li>
                                        <li>
                                            <a href="#" className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Modal Berkah</a>
                                        </li>
                                        <li>
                                            <a href="#" className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Emak Kece</a>
                                        </li>
                                        <li>
                                            <a href="#" className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Masjid Pemberdaya</a>
                                        </li>
                                        <li>
                                            <a href="#" className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Desapreneur</a>
                                        </li>
                                        <li>
                                            <a href="#" className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">The Mentor</a>
                                        </li>
                                        <li>
                                            <a href="#" className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Master Mentor</a>
                                        </li>
                                        <li>
                                            <a href="#" className="camelcase block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Digitalisasi</a>
                                        </li>
                                        {/* Add more submenu items here */}
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" class="uppercase block py-2 px-3 text-gray-900 rounded hover:bg-red-600 rounded-lg md:hover:bg-red-600 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-white dark:focus:text-black dark:hover:bg-red-600 md:dark:hover:bg-red-600">Informasi</a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" class="text-white bg-blue-700 mr-8 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Masuk</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar;