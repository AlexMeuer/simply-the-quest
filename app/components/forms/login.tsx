import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Stack } from "~/styled-system/jsx";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Field } from "../ui/field";

export const LoginFormSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(1, "Display name is required")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be at most 50 characters long"),
  email: z.email(),
  password: z
    .string()
    .trim()
    .min(8, "Must be at least 8 characters long")
    .max(128, "Must be at most 128 characters long")
    .refine(
      (val) =>
        /[A-Z]/.test(val) &&
        /[a-z]/.test(val) &&
        /\d/.test(val) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(val),
      {
        message:
          "Must contain at least one uppercase letter, lowercase letter, number, and special character",
      },
    ),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;

export type LoginFormProps = {
  onSubmit: (values: LoginFormValues) => Promise<void>;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
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
    async (v: LoginFormValues) => {
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
          <Card.Title>Login</Card.Title>
          <Card.Description>Log in to Simply the Quest!</Card.Description>
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
            Log in
          </Button>
        </Card.Footer>
      </Card.Root>
    </form>
  );
};
