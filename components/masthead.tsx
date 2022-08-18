import React from "react";
import Image from "next/image";

const MastHead: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center
    justify-between flex-col relative"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full object-cover -z-10 h-screen"
      >
        <source src="/assets/masthead-bg.mp4" type="video/mp4" />
      </video>

      <div className="flex-grow-0 pt-10 transition-opacity duration-1000">
        <Image src="/assets/logo.svg" alt="logo" width={30} height={30} />
      </div>

      <div className="text-center leading-loose drop-shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-7">Margelo</h1>
        <h2 className="text-lg md:text-3xl font-bold">
          <span>App development</span>
          <span> ,done right.</span>
        </h2>
      </div>

      <div className="flex-grow-0 transition-all duration-[1s] pb-12 md:pb-14">
        <Image
          src="/assets/arrow-down.webp"
          alt="scroll down"
          width={40 * 1.5}
          height={25 * 1.5}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default MastHead;
