import { star } from '../assets/icons';
import { products } from '../constants';

const PopularProducts = () => {
  return (
    <section id="popular-products">
      <div className="border-2 border-green-500 w-full text-center space-y-8">
        <h2 className="text-5xl font-semibold p-2">
          Our <span className="text-coral-red">Popular </span>Products
        </h2>
        <p className="text-slate-gray text-lg mt-4">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>

        <div className=" border-2 border-pink-500 w-full grid place-items-center grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 ">
          {products.map(prod => (
            <div
              key={prod.name}
              className="text-left text-lg md:text-2xl w-full md:w-[220px] lg:w-[260px]"
            >
              <img
                src={prod.imgURL}
                alt="product"
                className=" w-full h-auto object-cover"
              />
              <p className="flex gap-2 mt-1">
                <img src={star} alt="star" />{' '}
                <span className="text-slate-gray">(4.5)</span>
              </p>
              <span className="block font-medium">{prod.name}</span>
              <span className="text-coral-red font-semibold">{prod.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
