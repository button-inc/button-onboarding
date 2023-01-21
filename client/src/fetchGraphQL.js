async function fetchGraphQL(text, variables) {
  const GRAPHILESVR = process.env.GRAPHILESVR;
console.log(text, "00000000", variables)
  const response = await fetch(GRAPHILESVR, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
