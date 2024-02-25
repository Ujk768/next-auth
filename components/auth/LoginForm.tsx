import { CardWrapper } from "./CardWrapper";

export function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Dont have an account yet?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
}
