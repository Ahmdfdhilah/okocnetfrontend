import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seven from "../asset/img/7 Top.png"

const Seventop = () => {
    return (
        <>
            <Navbar />
            <div class="flex justify-center mt-[10rem] mb-20">
                <img src={Seven} class="size-1/2" alt="7 Top Ok Oce" />
            </div>
            <Footer />
        </>
    );
}

export default Seventop;