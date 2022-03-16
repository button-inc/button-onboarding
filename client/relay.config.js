module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./src",
  schema: "../schema/schema.graphql",
  language: "typescript",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
} 
