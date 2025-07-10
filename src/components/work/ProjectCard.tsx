import { ArrowUpRight } from "lucide-react";
import { ProjectCardProps } from "../../types/work/projectCard";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes,
}: ProjectCardProps) => {
  return (
    <div
      className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors duration-200 ${classes}`}
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, index) => (
              <span
                key={index}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="size-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 active:scale-90 duration-200">
          <span aria-hidden="true">
            <ArrowUpRight />
          </span>
        </div>

        <a href={projectLink} target="_blank" className="absolute inset-0 "></a>
      </div>
    </div>
  );
};

export default ProjectCard;
