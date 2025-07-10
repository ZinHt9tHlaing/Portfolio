import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonOutlineProps {
  href: string;
  target: string;
  label: string;
  icon: ReactNode;
  classes: string;
}

const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes,
}: ButtonOutlineProps) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

export { ButtonOutline };
