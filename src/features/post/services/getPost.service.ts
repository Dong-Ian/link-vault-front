import { getPostFunctionProps } from "../types/post.type";

export default async function getPost({ referenceSeq }: getPostFunctionProps) {
  const result = await fetch(`${process.env.REACT_APP_API}/reference/detail`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      referenceSeq: referenceSeq,
    }),
  });

  const res = await result.json();
  console.log(res);
  return res;
}
