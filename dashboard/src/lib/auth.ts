// src/lib/auth.ts
"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = formData.get("password");

  // Mock validation (Replace with your Go API call later)
  if (password === "admin") {
    const cookieStore = await cookies();
    cookieStore.set("ids_session", "secure_mock_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
    redirect("/");
  }
  return { error: "Invalid credentials" };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("ids_session");
  redirect("/login");
}