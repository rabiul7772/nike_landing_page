import Review from '../components/Review';
import { reviews } from '../constants';

const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className=" max-container">
      <h2 className="text-center text-5xl font-semibold">
        What our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="text-center mx-auto info-text mt-4 md:max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className=" flex flex-col md:flex-row justify-evenly items-center w-full md:mt-16 mt-12 gap-16">
        {reviews.map(rev => (
          <Review key={rev.customerName} {...rev} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
