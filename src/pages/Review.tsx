import ReviewCard from "../components/review/ReviewCard";
import { reviews } from "../data/review";

const Review = () => {
  return (
    <section id="reviews" className="section overflow-x-scroll">
      <div className="container">
        <h2 className="headline-2 mb-8">What our customers say</h2>
        <div className="flex items-stretch gap-3 w-fit">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
