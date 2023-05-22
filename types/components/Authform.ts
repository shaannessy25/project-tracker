type Mode = "register" | "signin";

export interface AuthFormProps {
  mode: Mode;
}

export interface FormState {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface Content {
  header: string;
  subheader: string;
  linkUrl: string;
  linkText: string;
  buttonText: string;
}
