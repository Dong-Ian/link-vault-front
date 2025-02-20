export default async function valid() {
  const result = await fetch(`${process.env.REACT_APP_API}/validate`, {
    method: "GET",
    credentials: "include",
  });

  const res = await result.json();

  return res;
}
