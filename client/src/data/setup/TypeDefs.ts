// add new global state step 3: copy clientSchema.graphql into here
// this enables apollo dev tool to have the schma. not critical

const typeDefs = `
  type Query {
    forms: forms!
  }

  type forms {
    input_Signup_Name: String!
    input_Signup_Email: String!
    input_Signup_Password: String!
    input_Login_Email: String!
    input_Login_Password: String!
  }

`
export default typeDefs
