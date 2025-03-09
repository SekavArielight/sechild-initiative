import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <header
      className="relative flex flex-col items-center justify-center h-screen text-center sm:px-32 sm:py-5 max-w-screen-2xl mx-auto"
      style={{
        backgroundImage: "url('/src/assets/images/hero-image-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <h1 className="sm:text-7xl text-[#fff] z-50">Empowering Every Child, Embracing Every Ability</h1>
      <h3 className="sm:text-[17px] text-[#fff]/80 z-50 my-12">
        At SECHILD, we are committed to creating a world where every child with
        special needs has access to education, healthcare, and equal
        opportunities. Together, we can make a difference!
      </h3>

      <div>
        <Button title="Find Out More"/>
        <Button title="Donate Now"/>
      </div>
    </header>
  );
};

export default Hero;
