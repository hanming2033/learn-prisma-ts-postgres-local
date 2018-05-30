const typeDefs = `
type Query {
  forms: forms!
  user: user!
}

type forms {
  inputDescCreateLink: String!
  inputUrlCreateLink: String!
  inputEmailLogin: String!
  inputPasswordLogin: String!
  inputNameLogin: String!
  inputSearch: String!
}

type user {
  loginStatus: Boolean!
}

`
export default typeDefs
