import { CreateReferenceFunctionProps } from "../types/home.type";

export default async function createReference({
  accessToken,
  name,
  url,
  description,
  category,
}: CreateReferenceFunctionProps) {
  const result = await fetch(`${process.env.REACT_APP_API}/reference/list`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
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
