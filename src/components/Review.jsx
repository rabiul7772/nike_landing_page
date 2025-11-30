import { star } from '../assets/icons';

const Review = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer photo"
        height={150}
        width={150}
        className="object-cover rounded-full"
      />
      <p className="info-text text-center mt-6 max-w-sm">{feedback}</p>
      <div className="flex gap-2 m-2">
        <img src={star} height={24} width={24} alt="star" />{' '}
        <span className="text-slate-gray text-xl">({rating})</span>
      </div>
      <h3 className="text-3xl font-semibold">{customerName}</h3>
    </div>
  );
};

export default Review;
