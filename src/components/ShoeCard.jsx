import { shoes } from '../constants';

const ShoeCard = ({ bigShoeImage, setBigShoeImage }) => {
  return (
    <div className="flex gap-8 self-center mb-4">
      {shoes.map(shoe => (
        <div
          key={shoe.thumbnail}
          className={` ${
            bigShoeImage === shoe.bigShoe
              ? 'border-coral-red'
              : 'border-gray-300'
          } border-2  rounded-2xl object-cover `}
          onClick={() => setBigShoeImage(shoe.bigShoe)}
        >
          <img src={shoe.thumbnail} alt="shoe" />
        </div>
      ))}
    </div>
  );
};

export default ShoeCard;
