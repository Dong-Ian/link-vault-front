import { GetListFunctionProps } from "../type/main.type";

export default async function GetListFunction({
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
