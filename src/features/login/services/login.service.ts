import { LoginFunctionProps } from "../types/login.type";

export default async function login({
  email,
  name,
  image,
}: LoginFunctionProps) {
  const result = await fetch(`${process.env.REACT_APP_API}/user/google/oauth`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      name: name,
      image: image,
      signonType: "GOOGLE",
    }),
  });

  const res = await result.json();

  return res;
}
