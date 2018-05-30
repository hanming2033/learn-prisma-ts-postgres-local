// add new global state step 4: add queries, mutations and subscriptions

import gql from 'graphql-tag'

export const GET_SIGN_UP_INPUTS = gql`
  query GetSignUpInputs {
    forms @client {
      __typename
      input_Signup_Name
      input_Signup_Email
      input_Signup_Password
    }
  }
`
export const GET_LOGIN_INPUTS = gql`
  query GetLoginInputs {
    forms @client {
      __typename
      input_Login_Email
      input_Login_Password
    }
  }
`
