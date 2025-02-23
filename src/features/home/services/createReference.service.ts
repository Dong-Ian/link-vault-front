import { CreateReferenceFunctionProps } from "../types/home.type";

export default async function createReference({
  url,
}: CreateReferenceFunctionProps) {
  const result = await fetch(`${process.env.REACT_APP_API}/reference/create`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      referenceUrl: url,
    }),
  });

  const res = await result.json();
  console.log(res);
  return res;
}
