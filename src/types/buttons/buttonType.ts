import { ReactNode } from "react";

export interface ButtonOutlineProps {
  href: string;
  target: string;
  label: string;
  icon: ReactNode;
  classes?: string;
}

export interface ButtonPrimaryProps extends ButtonOutlineProps {
  download?: boolean;
}
