import React from "react";
import Top from "../asset/img/7top-rb.webp";
import FloatingMenu from "../components/FloatingMenu";

const Permodalan = () => {
    return (
        <>
            <div className="pl-40 bg-white max-md:pl-5 mobile:pt-20 lg:pt-60">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet={Top}
                            alt=""
                            className="grow shrink-0 max-w-full aspect-[0.79] w-[271px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch p-8 my-auto w-full text-white bg-sky-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <div className="text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                                Permodalan
                            </div>
                            <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                                Peserta akan didampingi untuk mendapatkan akses permodalan sesuai dengan kebutuhan usahanya.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center px-16 pt-20 pb-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                    <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                        Permodalan
                    </div>
                    <div className="mt-8 text-lg leading-7 text-center text-black max-md:max-w-full">
                        Melalui OK OCE, usaha sobat akan mendapatkan fasilitas dari para pendamping dalam hal permodalan yang berguna untuk menunjang kebutuhan bisnis sobat.
                        Fasilitas tersebut dapat diakses melalui sistem OK OCE Indonesia.
                    </div>
                </div>
            </div>
            <FloatingMenu />
        </>
    );
}

export default Permodalan;