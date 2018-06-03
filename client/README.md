Below is what is inside graphql schema

type Query {
me: User
}

type Mutation {
signup(email: String!, password: String!, name: String!): AuthPayload!
login(email: String!, password: String!): LoginResponse!
}

type Error {
field: String!
msg: String!
}

type LoginResponse {
payload: AuthPayload
error: Error
}

type AuthPayload {
token: String!
user: User!
}

type User {
id: ID!
email: String!
name: String!
}
