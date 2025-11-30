import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';

const SpecialOffer = () => {
  return (
    <section
      id="special-offer"
      className="border-2 border-pink-500 w-full flex flex-col md:flex-row-reverse gap-8 justify-between items-center"
    >
      <div className=" border-2 border-blue-500 w-full md:w-1/2 flex flex-col  justify-center items-start gap-6 space-y-2 ">
        <h2 className="md:text-5xl text-5xl font-semibold">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="text-xl text-slate-gray">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <span className="text-xl text-slate-gray  md:mt-4">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </span>
        <div className="flex gap-6 justify-center items-center">
          <button className="flex bg-coral-red px-4 md:px-6 py-2 gap-3 mt-4 text-lg rounded-3xl text-white cursor-pointer">
            Shop now{' '}
            <img src={arrowRight} alt="arrow right" height={20} width={20} />
          </button>
          <button className="flex bg-white px-4 md:px-6 md:py-2 py-1.5 gap-3 mt-4 text-lg rounded-3xl text-slate-gray border-2 border-slate-gray cursor-pointer">
            Learn more
          </button>
        </div>
      </div>

      <div className="border-2 border-green-500 md:w-1/2 w-full ">
        <img
          src={offer}
          alt="shoe"
          className="w-full h-auto object-cover md:p-12"
        />
      </div>
    </section>
  );
};

export default SpecialOffer;
