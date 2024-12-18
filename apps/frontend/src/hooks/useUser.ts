import { useSession } from "vinxi/http";
import { UserSession } from "~/types/user";

export async function getUser(): Promise<UserSession | null> {
  const session = await useSession<UserSession>({
    password: import.meta.env.VITE_SESSION_SECRET,
  });
  const result = UserSession.safeParse(session.data);
  if (result.success) {
    return result.data;
  }
  return null;
}
