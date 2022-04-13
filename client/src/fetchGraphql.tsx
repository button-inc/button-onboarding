async function fetchGraphQL(text: any, variables: any) {
  const response = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });
  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
