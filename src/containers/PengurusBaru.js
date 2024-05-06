/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { createClient } from "contentful";

const PengurusBaru = () => {
    const [data, setData] = useState([]);

    const client = createClient({ space: "2beswx1l6yb1", accessToken: "elOhlSdIzcP86jlkhsqov2nfVBClkhEnVwwlgx_h5ps" })

    useEffect(() => {
        const getAllEntries = async () => {
            try {
                await client.getEntries().then((entries) => {
                    console.log(entries);
                    setData(entries)
                })
            } catch (error) {
                console.log(error);
            }
        }
        getAllEntries()
    }, []);

    return (
        <>
            {data?.items?.map((post) =>
                <div className="mt-[10rem]" key={post.sys.id}>
                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={post.fields.fotoPengurus.fields.file.url} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.fields.namaPengurus}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.fields.jabatanPengurus}</p>
                        </div>
                    </a>
                </div>
            )}
        </>
    );
};

export default PengurusBaru;