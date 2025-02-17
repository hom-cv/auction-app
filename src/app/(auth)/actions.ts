"use server";

import { z } from "zod";

import { createClient } from "@/supabase/server";
import { loginFormSchema, signUpFormSchema } from "./schema";

export async function login(formData: z.infer<typeof loginFormSchema>) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    throw new Error(error.message);
  } else {
    return data;
  }
}

export async function signUp(formData: z.infer<typeof signUpFormSchema>) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
}
