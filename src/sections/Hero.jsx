import { useState } from 'react';
import { arrowRight } from '../assets/icons';
import { bigShoe2 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { statistics } from '../constants';

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe2);

  return (
    <section
      id="hero"
      className="border-2 border-pink-500  w-full flex flex-col md:gap-16 gap-12 md:flex-row min-h-[85vh] justify-center md:p-6 p-8"
    >
      {/* hero left side */}
      <div className="border-2 border-pink-500 md:w-2/5 w-full flex flex-col gap-6 justify-center items-start ">
        <h3 className="text-xl text-coral-red">Our Summer collections</h3>
        <div className=" flex flex-col gap-6 mt-4 ">
          <h1 className="text-6xl  md:text-8xl font-bold mb-4 relative  z-10">
            <span className="whitespace-nowrap text-black  bg-white pr-10 ">
              The New Arrival
            </span>{' '}
            <br />
            <span className="">
              <span className="text-coral-red ">Nike</span> Shoes
            </span>
          </h1>
          <p className="text-slate-gray text-lg md:text-xl max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
        </div>

        <button className="flex bg-coral-red px-4 md:px-6 py-2 gap-3 mt-4 text-lg rounded-3xl text-white">
          Shop now{' '}
          <img src={arrowRight} alt="arrow right" height={20} width={20} />
        </button>

        <div className="flex gap-6 mt-6">
          {statistics.map(stat => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-bold text-4xl">{stat.value}</span>
              <span className="text-lg text-slate-gray">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* hero right side */}
      <div className="border-2 border-green-500 w-full min-h-full  bg-primary  flex flex-col justify-center items-start">
        <div className="self-center">
          <img
            src={bigShoeImage}
            alt="show"
            height={500}
            width={500}
            className="object-cover"
          />
        </div>
        <ShoeCard
          bigShoeImage={bigShoeImage}
          setBigShoeImage={setBigShoeImage}
        />
      </div>
    </section>
  );
};

export default Hero;
