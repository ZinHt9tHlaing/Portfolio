import { ButtonPrimaryProps } from "../../types/buttons/buttonType";

const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  download = false,
}: ButtonPrimaryProps) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        download={download}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`btn btn-primary ${classes}`}
      >
        {label}
        {icon && <span className="material-symbols-rounded">{icon}</span>}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon && <span className="material-symbols-rounded">{icon}</span>}
      </button>
    );
  }
};

export { ButtonPrimary };
