import { GetListFunctionProps } from "../types/main.type";

export default async function getList({
  accessToken,
  category,
  page,
  pageSize,
}: GetListFunctionProps) {
  const result = await fetch(`${process.env.REACT_APP_API}/reference/list`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      category: category,
      page: page,
      pageSize: pageSize,
    }),
  });

  const res = await result.json();
  console.log(res);
  return res;
}
