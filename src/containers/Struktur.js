import React, { useState, useEffect } from "react";
import Header from "@img/bannernilaiinti.png";
import FloatingMenu from "../components/FloatingMenu";

const PengurusBaru = () => {
    const [penguruses, setPenguruses] = useState({
        founder: [],
        pembina: [],
        kurasi: [],
        harian: [],
        direktorat: [],
        eksekutif: []
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://okocenet-72f35a89c2ef.herokuapp.com/struktur-penguruses`);
            if (!response.ok) {
                throw new Error('Gagal mengambil data pengurus');
            }
            const data = await response.json();
            filterAndSetData(data.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const filterAndSetData = (data) => {
        const filteredData = {
            founder: data.filter(item => item.tipe === 'founder'),
            pembina: data.filter(item => item.tipe === 'pembina'),
            kurasi: data.filter(item => item.tipe === 'kurasi'),
            harian: data.filter(item => item.tipe === 'harian'),
            direktorat: data.filter(item => item.tipe === 'direktorat'),
            eksekutif: data.filter(item => item.tipe === 'eksekutif')
        };
        setPenguruses(filteredData);
    };

    return (
        <>
            <div>
                <div className="mt-32">
                    <img className="w-11/12 rounded-3xl mx-auto" src={Header} alt=""></img>
                </div>
                <div className="mt-[6rem] mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-3xl mobile:text-center lg:text-start">Founder OK OCE INDONESIA</h1>
                    </div>
                    <div className="flex mx-auto mobile:w-60 mobile:flex-col mobile:gap-6 lg:flex-row lg:justify-evenly lg:w-full">
                        {penguruses.founder.map((employee) => (
                            <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                                <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://okocenet-72f35a89c2ef.herokuapp.com${employee.foto}`} alt={employee.nama} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 mobile:mx-auto lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-3xl mobile:text-center lg:text-start">Dewan Pembina</h1>
                    </div>
                    <div className="flex mx-auto mobile:w-60 mobile:flex-col mobile:gap-6 lg:flex-row lg:justify-evenly lg:w-full">
                        {penguruses.pembina.map((employee) => (
                            <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                                <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://okocenet-72f35a89c2ef.herokuapp.com${employee.foto}`} alt={employee.nama} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mobile:mx-auto lg:m-0">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 mobile:mx-auto lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-3xl mobile:text-center lg:text-start">Dewan Kurasi</h1>
                    </div>
                    <div className="flex mx-auto mobile:w-60 mobile:flex-col mobile:gap-6 lg:flex-row lg:justify-evenly lg:w-full">
                        {penguruses.kurasi.map((employee) => (
                            <div key={employee.id} className="flex items-center bg-white border border-gray-200 rounded-lg shadow mobile:flex-col md:flex-row md:max-w-xl lg:flex-row lg:grow">
                                <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://okocenet-72f35a89c2ef.herokuapp.com${employee.foto}`} alt={employee.nama} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mobile:mx-auto mobile:text-center lg:text-start lg:m-0">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 mobile:mx-auto lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-3xl mobile:text-center lg:text-start">Pengurus Harian</h1>
                    </div>
                    <div className="flex mx-auto mobile:w-60 mobile:flex-col mobile:gap-6 lg:flex-row lg:justify-evenly lg:w-full lg:gap-1">
                        {penguruses.harian.map((employee) => (
                            <div key={employee.id} className="grid items-center bg-white border border-gray-200 rounded-lg shadow mobile:grid-cols-1 md:flex-row md:min-h-16 md:max-w-[24rem] lg:grid-cols-3">
                                <div className="mobile:w-auto lg:w-40 lg:h-full">
                                    <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://okocenet-72f35a89c2ef.herokuapp.com${employee.foto}`} alt={employee.nama} />
                                </div>
                                <div className="flex flex-col justify-between p-4 leading-normal mobile:ml-0 lg:ml-14">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start mobile:mx-auto lg:text-start lg:m-0">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 text-start mobile:mx-auto mobile: lg:text-start lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-3xl mobile:text-center lg:text-start">Direktorat</h1>
                    </div>
                    <div className="grid mx-auto mobile:w-60 mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-6 lg:w-full lg:grid-cols-2 lg:grid-flow-row lg:pl-4 lg:gap-6">
                        {penguruses.direktorat.map((employee) => (
                            <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                                <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://okocenet-72f35a89c2ef.herokuapp.com${employee.foto}`} alt={employee.nama} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mobile:mx-auto mobile:text-center lg:text-start lg:m-0">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 mobile:mx-auto mobile:text-center lg:text-start lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-2xl mobile:text-center lg:text-start">Eksekutif</h1>
                    </div>
                    <div className="grid mx-auto mobile:w-60 mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-6 lg:w-full lg:grid-cols-2 lg:grid-flow-row lg:pl-4 lg:gap-6">
                        {penguruses.eksekutif.map((employee) => (
                            <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                                <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://okocenet-72f35a89c2ef.herokuapp.com${employee.foto}`} alt={employee.nama} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mobile:mx-auto mobile:text-center lg:text-start lg:m-0">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 mobile:mx-auto mobile:text-center lg:text-start lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FloatingMenu />
        </>

    );
}

export default PengurusBaru;