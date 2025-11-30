import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" w-full flex flex-col md:flex-row gap-8 justify-between items-center "
    >
      <div className="  w-full md:w-1/2 flex flex-col  justify-center items-start gap-6 space-y-2 ">
        <h2 className="md:text-5xl text-5xl font-semibold">
          We Provide You <span className="text-coral-red">Super Quality</span>{' '}
          Shoes
        </h2>
        <p className="text-xl text-slate-gray">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <span className="text-xl text-slate-gray  md:mt-4">
          Our dedication to detail and excellence ensures your satisfaction
        </span>
        <button className="px-6 py-3 rounded-4xl bg-coral-red text-white md:mt-8  text-xl cursor-pointer">
          View details
        </button>
      </div>

      <div className=" md:w-1/2 w-full ">
        <img
          src={shoe8}
          alt="shoe"
          className="w-full h-auto object-cover md:p-12"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
