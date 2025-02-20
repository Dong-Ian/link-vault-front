import { GetListFunctionProps } from "../types/storage.type";

export default async function getList() {
  //   {
  //   category,
  //   page,
  //   pageSize,
  // }: GetListFunctionProps
  const result = await fetch(`${process.env.REACT_APP_API}/reference/list`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      category: "default",
      page: 1,
      pageSize: 10,
    }),
  });

  const res = await result.json();
  console.log(res);
  return res;
}
