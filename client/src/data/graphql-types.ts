/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface SignupUserMutationVariables {
  email: string,
  name: string,
  password: string,
};

export interface SignupUserMutation {
  signup:  {
    __typename: "AuthPayload",
    token: string,
  },
};

export interface LoginUserMutationVariables {
  email: string,
  password: string,
};

export interface LoginUserMutation {
  login:  {
    __typename: "LoginResponse",
    payload:  {
      __typename: "AuthPayload",
      token: string,
    } | null,
    error:  {
      __typename: "Error",
      field: string,
      msg: string,
    } | null,
  },
};

export interface GetSignUpInputsQuery {
  forms:  {
    __typename: "forms",
    input_Signup_Name: string,
    input_Signup_Email: string,
    input_Signup_Password: string,
  },
};

export interface GetLoginInputsQuery {
  forms:  {
    __typename: "forms",
    input_Login_Email: string,
    input_Login_Password: string,
  },
};
