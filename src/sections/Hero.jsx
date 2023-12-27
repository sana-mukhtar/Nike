import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
// import { ShoeCard } from "../components/ShoeCard";


const Hero = () => {
  return (
    <section
      id="home"
      className="w-full  p-2 flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-monsterrat">
          Our Winter Collection
        </p>
        <h1
          className="mt-10 text-8xl font-palanquin max-sm:text-[72px]
        mx-sm:leading-[82] font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival{" "}
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm">
          The Nike EKIDEN PACK once again celebrates the spirit of this event
          with shoes to support its runners.
        </p>
        <Button label="Shop Now" iconURL={arrowRight}></Button>

        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-hero bg-center">
        <img
          src={bigShoe1}
          alt="shoe image"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

      
      </div>
    </section>
  );
};

export default Hero;
