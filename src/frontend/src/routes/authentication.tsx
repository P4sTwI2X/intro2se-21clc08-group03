import { redirect, Params } from "react-router-dom";

export async function actionLogin({ request, params }: { request: Request; params: Params }) {
  const formData = await request.formData();
  // Login here
  return redirect("/");
}

export async function actionSignUp({ request, params }: { request: Request; params: Params }) {
  const formData = await request.formData();
  // Sign up here
  return redirect("/");
}
