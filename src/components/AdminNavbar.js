import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import LogoOkOce from "@img/logo-okoce.webp";
import { AuthContext } from "../AuthContext";

const AdminNavbar = () => {
    const [isAdminDropdownVisible, setAdminDropdownVisible] = useState(false);
    const [activeAdminDropdown, setActiveAdminDropdown] = useState(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState(null);
    const { setIsAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    const toggleAdminDropdown = () => {
        setAdminDropdownVisible(!isAdminDropdownVisible);
    };

    const handleAdminDropdownClick = (index) => {
        setActiveAdminDropdown(activeAdminDropdown === index ? null : index);
        setActiveSubDropdown(null);
    };

    const handleSubDropdownClick = (index) => {
        setActiveSubDropdown(activeSubDropdown === index ? null : index);
    };

    const adminMenuItems = [
        {
            name: "TENTANG KAMI",
            subMenu: [
                {
                    name: "PENGGERAK",
                    link: "/admin/penggerak-okoce",
                },
                {
                    name: "STRUKTUR",
                    link: "/admin/struktur",
                },
            ],
        },
        {
            name: "ETALASE",
            subMenu: [
                {
                    name: "MERCHANDISE",
                    link: "/admin/merchandise",
                },
            ],
        },
        {
            name: "PELUANG",
            subMenu: [
                {
                    name: "PELUANG KERJA",
                    link: "/admin/peluang-kerja",
                },
                {
                    name: "MAGANG",
                    link: "/admin/magang",
                },
                {
                    name: "PELUANG USAHA",
                    link: "/admin/peluang-usaha",
                },
                {
                    name: "DONASI",
                    link: "/admin/donasi",
                },
            ],
        },
        {
            name: "EVENTS",
            subMenu: [
                {
                    name: "EVENT",
                    link: "/admin/event",
                },
                {
                    name: "BERITA",
                    link: "/admin/berita",
                },
            ],
        },
        {
            name: "PROGRAM",
            subMenu: [
                {
                    name: "BRAND LOKAL",
                    link: "/admin/brand-lokal",
                },
            ],
        },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("consentGiven");
        setIsAuthenticated(false);
        window.location.reload();
        navigate("/");
    };

    return (
        <nav className="border-b border-gray-300 font-jost">
            <div className="fixed w-svw bg-white top-0 z-50 flex items-center justify-between mx-auto p-2 max-h-24 shadow-lg">
                <a href="/" className="ml-4">
                    <img src={LogoOkOce} className="h-20" alt="Ok Oce Logo" />
                </a>
                <button
                    type="button"
                    className="inline-flex items-center mr-8 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-expanded={isAdminDropdownVisible ? "true" : "false"}
                    onClick={toggleAdminDropdown}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className={`absolute top-24 left-0 w-full bg-gray-50  ${isAdminDropdownVisible ? "block" : "hidden"}`}>
                    <ul className="flex flex-col p-4 space-y-2">
                        {adminMenuItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleAdminDropdownClick(index)}
                                    className="flex justify-between items-center w-full py-2 px-3 text-black hover:bg-red-600 rounded-lg"
                                >
                                    {item.name}
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 7l3-3 3 3M7 13l3 3 3-3"
                                        />
                                    </svg>
                                </button>
                                <div className={`${activeAdminDropdown === index ? "" : "hidden"} pl-4`}>
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <div key={subIndex}>
                                            <button
                                                onClick={() => handleSubDropdownClick(subIndex)}
                                                className="flex justify-between items-center w-full py-2 px-3 text-black hover:bg-gray-200 rounded-lg"
                                            >
                                                {subItem.name}
                                                <svg
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M7 7l3-3 3 3M7 13l3 3 3-3"
                                                    />
                                                </svg>
                                            </button>
                                            <div className={`${activeSubDropdown === subIndex ? "" : "hidden"} pl-4`}>
                                                <Link to={`${subItem.link}/create`} className="block py-1 px-3 text-black hover:bg-gray-200 rounded-lg">
                                                    Create
                                                </Link>
                                                <Link to={subItem.link} className="block py-1 px-3 text-black hover:bg-gray-200 rounded-lg">
                                                    View
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        ))}
                        <div className="px-4 py-2">
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="w-full text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                            >
                                Keluar
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
            <div />
        </nav>
    );
};

export default AdminNavbar;