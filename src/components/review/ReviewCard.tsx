import { Star } from "lucide-react";
import { ReviewCardProps } from "../../types/review/review";

// const ratings = new Array(5).fill({
//   icon: "star",
//   style: { fontVariationSettings: `"FILL" 1` },
// });

const ReviewCard = ({
  content,
  name,
  imgSrc,
  company,
  rating,
}: ReviewCardProps) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-yellow-300 text-yellow-300" : "text-gray-500"
            }`}
          />
        ))}
      </div>

      <p className="text-zinc-400 mb-8">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            className="img-cover"
          />
        </figure>

        <div>
          <p>{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
