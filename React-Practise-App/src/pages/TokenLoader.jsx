import { redirect } from "react-router-dom";

export function tokenLoader() {
  return generateToken();
}
export function generateToken() {
  return Math.random().toString(36).substr(2);
}

export function checkLoginLoader() {
  const token = generateToken();
  if (!token) {
    return redirect("login");
  }
}
