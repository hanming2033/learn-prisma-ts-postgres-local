// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    feed: Array<IPost>;
    drafts: Array<IPost>;
    post: IPost | null;
    me: IUser | null;
  }

  interface IPostOnQueryArguments {
    id: string;
  }

  interface IPost {
    __typename: 'Post';
    id: string;
    createdAt: any;
    updatedAt: any;
    isPublished: boolean;
    title: string;
    text: string;
    author: IUser;
  }

  interface IUser {
    __typename: 'User';
    id: string;
    email: string;
    name: string;
    posts: Array<IPost>;
  }

  interface IMutation {
    __typename: 'Mutation';
    signup: IAuthPayload;
    login: ILoginResponse;
    createDraft: IPost;
    publish: IPost;
    deletePost: IPost;
  }

  interface ISignupOnMutationArguments {
    email: string;
    password: string;
    name: string;
  }

  interface ILoginOnMutationArguments {
    email: string;
    password: string;
  }

  interface ICreateDraftOnMutationArguments {
    title: string;
    text: string;
  }

  interface IPublishOnMutationArguments {
    id: string;
  }

  interface IDeletePostOnMutationArguments {
    id: string;
  }

  interface IAuthPayload {
    __typename: 'AuthPayload';
    token: string;
    user: IUser;
  }

  interface ILoginResponse {
    __typename: 'LoginResponse';
    payload: IAuthPayload | null;
    error: IError | null;
  }

  interface IError {
    __typename: 'Error';
    field: string;
    msg: string;
  }
}

// tslint:enable
