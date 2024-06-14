import React from "react";
import Top from "@img/7top-rb.webp";
import Banner from "@img/TERSEDIA BANNER IKLAN 1280 x 327 px.png";
import PasarOk from "@img/pasar-ok-oce-1-768x160.webp";
import OcPay from "@img/oc-pay-1-768x160.webp";
import FloatingMenu from "../components/FloatingMenu";

const Pemasaran = () => {
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
                                Pemasaran
                            </div>
                            <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                                Peserta akan mengikuti proses kurasi dan akan diberikan akses pemasaran dan penjualan yang lebih luas, baik online maupun offline.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center px-16 pt-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                    <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                        Pemasaran
                    </div>
                    <div className="mt-8 text-lg leading-7 text-center text-black max-md:max-w-full">
                        Melalui OK OCE, usaha sobat akan mendapatkan fasilitas dari para pendamping dalam hal pemasaran yang akan sangat berguna untuk
                        anda mengembangkan popularitas dan omzet bisnis. Fasilitas tersebut dapat diakses melalui sistem OK OCE Indonesia.
                    </div>
                    <div className="w-full my-20">
                        <img className="h-auto mx-auto mobile:w-full lg:w-full" src={Banner} alt=""></img>
                        <div className="relative py-20 w-full mt-10 justify-center items-center mobile:flex-col mobile:space-x-0  lg:space-x-8 lg:flex-row">
                            <div className="absolute group mobile:top-0 mobile:w-full lg:left-0 lg:w-[50%] lg:mt-[3.4rem]">
                                <a href="https://play.google.com/store/apps/details?id=com.dmsum.mentimunwarung.pasarokoce">
                                    <img className="w-4/5 mx-auto transition-all group-hover:w-10/12" src={PasarOk} alt="">
                                    </img>
                                </a>
                            </div>
                            <div className="absolute group mobile:bottom-4 mobile:w-full lg:right-0 lg:w-[50%]">
                                <a href="https://play.google.com/store/apps/details?id=com.finnet.ocpay">
                                    <img className="w-4/5 mx-auto transition-all group-hover:w-10/12" src={OcPay} alt="">
                                    </img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FloatingMenu />
        </>
    );
}

export default Pemasaran;