"use server";
import { getSession } from "@/utils/auth";

export async function auth(formData: FormData) {
  const session = await getSession();
  const shouldAuthenticate =
    formData.get("password") == process.env.IRON_SESSION_PASSWORD;

  session.isAuthenticated = shouldAuthenticate;
  console.log(session.isAuthenticated);

  await session.save();
}
