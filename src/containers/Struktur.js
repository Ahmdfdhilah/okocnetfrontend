import React, { useState, useEffect } from "react";

const PengurusBaru = () => {
    const [employees, setEmployees] = useState([]);
    const [employees2, setEmployees2] = useState([]);
    const [employees3, setEmployees3] = useState([]);
    const [employees4, setEmployees4] = useState([]);
    const [employees5, setEmployees5] = useState([]);
    const [employees6, setEmployees6] = useState([]);

    useEffect(() => {
        fetchEmployees();
        fetchEmployees2();
        fetchEmployees3();
        fetchEmployees4();
        fetchEmployees5();
        fetchEmployees6();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/penguruses?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data karyawan');
            }
            const data = await response.json();
            // Extract the data array from the response
            const employeesData = data.data;
            console.log(employeesData)
            setEmployees(employeesData);
        } catch (error) {
            console.error('Error fetching employees:', error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setEmployees([]);
        }
    };
    const fetchEmployees2 = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/struktur-pengurus-pembinas?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data karyawan');
            }
            const data2 = await response.json();
            // Extract the data array from the response
            const employeesData2 = data2.data;
            console.log(employeesData2)
            setEmployees2(employeesData2);
        } catch (error) {
            console.error('Error fetching employees:', error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setEmployees2([]);
        }
    };
    const fetchEmployees3 = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/struktur-pengurus-kurasis?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data karyawan');
            }
            const data = await response.json();
            // Extract the data array from the response
            const employeesData = data.data;
            console.log(employeesData)
            setEmployees3(employeesData);
        } catch (error) {
            console.error('Error fetching employees:', error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setEmployees3([]);
        }
    };
    const fetchEmployees4 = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/struktur-pengurus-harians?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data karyawan');
            }
            const data = await response.json();
            // Extract the data array from the response
            const employeesData = data.data;
            console.log(employeesData)
            setEmployees4(employeesData);
        } catch (error) {
            console.error('Error fetching employees:', error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setEmployees4([]);
        }
    };
    const fetchEmployees5 = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/struktur-pengurus-direktorats?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data karyawan');
            }
            const data = await response.json();
            // Extract the data array from the response
            const employeesData = data.data;
            console.log(employeesData)
            setEmployees5(employeesData);
        } catch (error) {
            console.error('Error fetching employees:', error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setEmployees5([]);
        }
    };
    const fetchEmployees6 = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/struktur-pengurus-eksekutifs?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data karyawan');
            }
            const data = await response.json();
            // Extract the data array from the response
            const employeesData = data.data;
            console.log(employeesData)
            setEmployees6(employeesData);
        } catch (error) {
            console.error('Error fetching employees:', error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setEmployees6([]);
        }
    };

    return (
        <div>
            <div className="mt-[6rem] bg-gray-400 w-full h-[20rem] grid justify-center content-center">
                <h1 className="font-extrabold text-4xl text-center">Struktur Organisasi <br /> Ok Oce Indonesia </h1>
                <p className="text-center mt-6">These are the great people behind the success of OK OCE Indonesia </p>
            </div>
            <div className="mt-[6rem] mb-16 w-4/5 mx-auto">
                <h1 className="w-[73rem] ml-[1.5rem] mb-8 text-2xl font-bold border-b">Founder OK OCE INDONESIA</h1>
                <div className="flex justify-evenly">
                    {employees.map((employee) => (
                        <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={employee.attributes.foto_founder.data[0].attributes.url} alt={employee.attributes.nama_founder} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-">{employee.attributes.nama_founder}</h5>
                                <p className="mb-3 font-normal text-gray-600">{employee.attributes.jabatan_founder}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 mb-16 w-4/5 mx-auto">
                <h1 className="w-[73rem] ml-[1.5rem] mb-8 text-2xl font-bold border-b">Dewan Pembina</h1>
                <div className="flex justify-evenly">
                    {employees2.map((employee) => (
                        <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={employee.attributes.foto_pembina.data[0].attributes.url} alt={employee.attributes.nama_pembina} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-">{employee.attributes.nama_pembina}</h5>
                                <p className="mb-3 font-normal text-gray-600">{employee.attributes.jabatan_pembina}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 mb-16 w-4/5 mx-auto">
                <h1 className="w-[73rem] ml-[1.5rem] mb-8 text-2xl font-bold border-b">Dewan Kurasi</h1>
                <div className="flex justify-evenly">
                    {employees3.map((employee) => (
                        <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={employee.attributes.foto_dewan.data[0].attributes.url} alt={employee.attributes.nama_dewan} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-">{employee.attributes.nama_dewan}</h5>
                                <p className="mb-3 font-normal text-gray-600">{employee.attributes.jabatan_dewan}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 mb-16 w-4/5 mx-auto">
                <h1 className="w-[73rem] ml-[1.5rem] mb-8 text-2xl font-bold border-b">Pengurus Harian</h1>
                <div className="flex justify-evenly">
                    {employees4.map((employee) => (
                        <div key={employee.id} className="grid grid-cols-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:min-h-16 md:max-w-[23rem]">
                            <div className="w-40 h-full">
                                <img className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg" src={employee.attributes.foto_pengurus.data.attributes.url} alt={employee.attributes.nama_pengurus} />
                            </div>
                            <div className="flex flex-col ml-14 justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start">{employee.attributes.nama_pengurus}</h5>
                                <p className="mb-3 font-normal text-gray-600">{employee.attributes.jabatan_pengurus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 mb-16 w-4/5 mx-auto">
                <h1 className="w-[73rem] ml-[1.5rem] mb-8 text-2xl font-bold border-b">Direktorat</h1>
                <div className="grid grid-cols-2 grid-flow-row gap-6 mx-6 justify-items-stretch">
                    {employees5.map((employee) => (
                        <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={employee.attributes.foto_pengurus.data[0].attributes.url} alt={employee.attributes.nama_pengurus} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-">{employee.attributes.nama_pengurus}</h5>
                                <p className="mb-3 font-normal text-gray-600">{employee.attributes.jabatan_pengurus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 mb-16 w-4/5 mx-auto">
                <h1 className="w-[73rem] ml-[1.5rem] mb-8 text-2xl font-bold border-b">Eksekutif</h1>
                <div className="grid grid-cols-2 grid-flow-row gap-6 mx-6 justify-items-stretch">
                    {employees6.map((employee) => (
                        <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={employee.attributes.foto_pengurus.data[0].attributes.url} alt={employee.attributes.nama_pengurus} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-">{employee.attributes.nama_pengurus}</h5>
                                <p className="mb-3 font-normal text-gray-600">{employee.attributes.jabatan_pengurus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PengurusBaru;
