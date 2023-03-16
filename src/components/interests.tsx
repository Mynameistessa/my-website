
import React from "react";
import Image from 'next/image'
import Layout from "./Layout/layout";

const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/playlist/',
    params: { id: '37i9dQZF1DX4Wsb4d7NKfP' },
    headers: {
        'X-RapidAPI-Key': '4de60a9b92msh66dea4095a28b15p1ba9fajsnefbb67e4f064',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};


const Interests: React.FC = () => {
    return (
        // <Layout>
        <div className="m-8 w-6/12 flex">
            {/* <iframe className="border-radius:12px" src="https://open.spotify.com/embed/playlist/4RPdoPE9cD2QOc1Z2n8MHH?utm_source=generator" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
            <Image
                src='/cinammon.jpg'
                alt='cinammon buns'
                width='200'
                height='100'
                className="rounded-lg"
            />
        </div>
        // </Layout>
    )
}

export default Interests;