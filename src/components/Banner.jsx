import React from 'react';
import banner from "../assets/banner.jpg";

const Banner = () => {
    return (
        <div>
       <img src={banner} alt="banner image" className=" w-full h-169 object-cover" /> 
        </div>
    );
};
export default Banner;