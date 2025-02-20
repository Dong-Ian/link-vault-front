import { CreateReferenceFunctionProps } from "../types/home.type";

export default async function createReference({
  name,
  url,
  description,
  category,
}: CreateReferenceFunctionProps) {
  const result = await fetch(`${process.env.REACT_APP_API}/reference/create`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      referenceName: name,
      referenceUrl: url,
      referenceDescription: description,
      referenceCategory: category,
    }),
  });

  const res = await result.json();
  console.log(res);
  return res;
}
