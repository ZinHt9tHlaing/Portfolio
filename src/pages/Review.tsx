import { useGSAP } from "@gsap/react";
import ReviewCard from "../components/review/ReviewCard";
import { reviews } from "../data/review";
import gsap from "gsap";

const Review = () => {
   useGSAP(() => {
     gsap.to(".scrub-slide", {
       scrollTrigger: {
         trigger: ".scrub-slide",
         start: "-200% 80%",
         end: "400% 80%",
         scrub: true,
       },
       x: "-1000",
     });
   });

  return (
    <section id="reviews" className="section overflow-x-scroll">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What our customers say</h2>
        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
