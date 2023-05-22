import { ReactNode, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  children?: ReactNode;
}
