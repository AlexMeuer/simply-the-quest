import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Stack } from "~/styled-system/jsx";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Field } from "../ui/field";
import { LoginFormSchema } from "./login";

export const RegisterFormSchema = LoginFormSchema.extend({
  displayName: z
    .string()
    .trim()
    .min(1, "Display name is required")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be at most 50 characters long"),
});

export type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

export type RegisterFormProps = {
  onSubmit: (values: RegisterFormValues) => Promise<void>;
};

export const RegistrationForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const [isProcessing, setProcessing] = useState(false);
  const doSubmit = useCallback(
    async (v: RegisterFormValues) => {
      setProcessing(true);
      try {
        return await onSubmit(v);
      } finally {
        setProcessing(false);
      }
    },
    [onSubmit],
  );

  return (
    <form onSubmit={handleSubmit(doSubmit)}>
      <Card.Root width="sm">
        <Card.Header>
          <Card.Title>Register</Card.Title>
          <Card.Description>
            Register an account for Simply the Quest!
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4">
            <Field.Root invalid={!!errors.displayName}>
              <Field.Label>Display Name</Field.Label>
              <Field.Input
                type="text"
                autoComplete="username"
                {...register("displayName")}
              />
              <Field.ErrorText>{errors.displayName?.message}</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={!!errors.email}>
              <Field.Label>Email</Field.Label>
              <Field.Input
                type="email"
                placeholder="you@example.com"
                {...register("email")}
              />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={!!errors.password}>
              <Field.Label>Password</Field.Label>
              <Field.Input type="password" {...register("password")} />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer gap="3">
          <Button disabled={isProcessing} variant="outline">
            Cancel
          </Button>
          <Button loading={isProcessing} type="submit">
            Register
          </Button>
        </Card.Footer>
      </Card.Root>
    </form>
  );
};
