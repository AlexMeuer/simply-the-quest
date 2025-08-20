import { RegistrationForm } from "~/components/forms/register";

export default function Page() {
  return (
    <RegistrationForm onSubmit={async (v) => console.log("Register", v)} />
  );
}
