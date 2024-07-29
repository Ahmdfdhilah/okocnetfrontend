import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@img/headerthementor.png";
import FloatingMenu from "../components/FloatingMenu";

const Thementor = () => {
  const [thementorData, setThementorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThementorData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/thementors');
        const data = response.data.data[0]; 
        setThementorData(data);
      } catch (error) {
        setError('Error fetching data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchThementorData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!thementorData) return <div>No data available</div>;

  return (
    <>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 text-center text-white min-h-[677px] max-md:px-5">
        <img
          loading="lazy"
          src={Header}
          className="object-cover absolute inset-0 size-full"
          alt="The Mentor Header"
        />
        <div className="relative self-center mt-20 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          &quot;The Mentor&quot; Training Online Penggerak OK OCE Indonesia
        </div>
        <div className="relative mt-16 mb-8 text-lg font-normal text-gray-300 leading-7 lg:text-xl sm:px-16 lg:px-48 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          &quot;The Mentor&quot; sebelumnya disebut TOT adalah program untuk
          melatih mentor-mentor yang berkompeten dari penggerak. Yang akan
          berjalan setiap Minggu selama satu tahun.
        </div>
      </div>

      <div className="px-7 pt-6 pb-4 my-5 text-lg leading-7 mr-2 ml-2 text-center text-black max-md:px-5 max-md:max-w-full lg:w-full">
        <div className="grid mobile:grid-flow-row mobile:grid-cols-1 lg:grid-flow-col lg:mt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="w-10/12 mx-auto">
              <h1 className="font-bold mobile:text-xl lg:text-3xl">{thementorData.judul}</h1>
              {thementorData.deskripsi?.map((item, index) => (
                <p key={index} className="mt-10 text-justify text-lg mobile:mb-14">{item.str}</p>
              ))}
            </div>
          </div>

          <div className="bg-gray-300 rounded-2xl py-16 lg:col-span-4">
            <div className="">
              <h1 className="text-2xl font-bold text-center">Dokumentasi Kegiatan</h1>
            </div>
            {thementorData.dokumentasi?.map((doc, index) => (
              <div key={index} className="max-w-md mx-auto mt-10 mobile:px-4">
                <img
                  loading="lazy"
                  src={`http://localhost:3000${doc}`}
                  className="object-cover w-full max-h-48 rounded-xl"
                  alt={`dokumentasi-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FloatingMenu />
    </>
  );
};

export default Thementor;