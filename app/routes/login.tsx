import { useCallback, useEffect } from "react";
import { useFetcher } from "react-router";
import { z } from "zod";
import {
  LoginForm,
  LoginFormSchema,
  type LoginFormValues,
} from "~/components/forms/login";
import type { Route } from "./+types/login";

const ActionResult = z.object({
  success: z.boolean(),
});
type ActionResult = z.infer<typeof ActionResult>;

export async function action({
  request,
}: Route.ActionArgs): Promise<Response | ActionResult> {
  const formData = await request.formData();

  const result = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return new Response(JSON.stringify(result.error), {
      status: 422,
      headers: { "Content-Type": "application/json" },
    });
  }

  return { success: true };
}

export default function Page() {
  const fetcher = useFetcher();

  const onSubmit = useCallback(
    (v: LoginFormValues) =>
      fetcher.submit(v, {
        method: "post",
        encType: "application/x-www-form-urlencoded",
      }),
    [fetcher],
  );

  useEffect(() => {
    const result = ActionResult.safeParse(fetcher.data);
    if (result.success) {
      if (result.data.success) {
        alert("Login successful!");
      } else {
        alert("Login failed. Please check your credentials and try again.");
      }
    }
  }, [fetcher.data]);

  return <LoginForm onSubmit={onSubmit} />;
}
