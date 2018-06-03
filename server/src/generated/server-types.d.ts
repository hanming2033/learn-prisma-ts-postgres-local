/* tslint:disable */

export interface Query {
  me?: User | null;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Mutation {
  signup: AuthPayload;
  login: LoginResponse;
}

export interface AuthPayload {
  token: string;
  user: User;
}

export interface LoginResponse {
  payload?: AuthPayload | null;
  error?: Error | null;
}

export interface Error {
  field: string;
  msg: string;
}
export interface SignupMutationArgs {
  email: string;
  password: string;
  name: string;
}
export interface LoginMutationArgs {
  email: string;
  password: string;
}
