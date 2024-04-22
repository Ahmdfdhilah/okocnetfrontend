/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Youtube from "../components/Youtube";

const Anniversary = () => {
    return (
        <>
            <div class="mt-[6rem] bg-gray-400 w-full h-[20rem] grid justify-center content-center">
                <h1 class="font-extrabold text-4xl text-center">Anniversary</h1>
                <p class="text-center mt-6">Gerakan Ok OCE Indonesia mengadvokasi pertumbuhan ekonomi yang didorong oleh kreativitas dan kolaborasi. <br /> Dengan mengutamakan inovasi, kerjasama antarindividu, dan keterlibatan penuh dalam berbagai sektor ekonomi, <br /> Ok OCE membuka pintu bagi kemajuan yang berkelanjutan dan inklusif bagi seluruh masyarakat Indonesia.</p>
            </div>
            <div class="flex justify-center m-12">
                <Youtube src="https://www.youtube.com/embed/avA0_NJK5mU" />
            </div>
        </>
    );
}

export default Anniversary;