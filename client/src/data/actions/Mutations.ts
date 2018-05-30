// add new global state step 4: add queries, mutations and subscriptions

import gql from 'graphql-tag'

export const SIGNUP_USER = gql`
  mutation SignupUser($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      token
    }
  }
`
