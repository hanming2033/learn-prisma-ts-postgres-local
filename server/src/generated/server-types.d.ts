/* tslint:disable */

export type DateTime = any;
/** An object with an ID */
export interface Node {
  id: string /** The id of the object. */;
}

export interface Query {
  feed: Post[];
  drafts: Post[];
  post?: Post | null;
  me?: User | null;
}

export interface Post extends Node {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  isPublished: boolean;
  title: string;
  text: string;
  author: User;
}

export interface User {
  id: string;
  email: string;
  name: string;
  posts: Post[];
}

export interface Mutation {
  signup: AuthPayload;
  login: LoginResponse;
  createDraft: Post;
  publish: Post;
  deletePost: Post;
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

export interface Product extends Node {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  name: string;
  pictureUrl: string;
  price: number;
  seller: User;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: UserWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | UserWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  email?: string | null;
  email_not?:
    | string
    | null /** All values that are not equal to given value. */;
  email_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  email_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  email_lt?: string | null /** All values less than the given value. */;
  email_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  email_gt?: string | null /** All values greater than the given value. */;
  email_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  email_contains?: string | null /** All values containing the given string. */;
  email_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  email_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  email_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  email_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  email_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  password?: string | null;
  password_not?:
    | string
    | null /** All values that are not equal to given value. */;
  password_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  password_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  password_lt?: string | null /** All values less than the given value. */;
  password_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  password_gt?: string | null /** All values greater than the given value. */;
  password_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  password_contains?:
    | string
    | null /** All values containing the given string. */;
  password_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  password_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  password_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  password_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  password_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  name?: string | null;
  name_not?: string | null /** All values that are not equal to given value. */;
  name_in?: string[] | null /** All values that are contained in given list. */;
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  name_lt?: string | null /** All values less than the given value. */;
  name_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  name_gt?: string | null /** All values greater than the given value. */;
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  name_contains?: string | null /** All values containing the given string. */;
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  name_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  posts_every?: PostWhereInput | null;
  posts_some?: PostWhereInput | null;
  posts_none?: PostWhereInput | null;
  products_every?: ProductWhereInput | null;
  products_some?: ProductWhereInput | null;
  products_none?: ProductWhereInput | null;
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: PostWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | PostWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */;
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  createdAt_lt?: DateTime | null /** All values less than the given value. */;
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  createdAt_gt?: DateTime | null /** All values greater than the given value. */;
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */;
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  updatedAt_lt?: DateTime | null /** All values less than the given value. */;
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */;
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  isPublished?: boolean | null;
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */;
  title?: string | null;
  title_not?:
    | string
    | null /** All values that are not equal to given value. */;
  title_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  title_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  title_lt?: string | null /** All values less than the given value. */;
  title_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  title_gt?: string | null /** All values greater than the given value. */;
  title_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  title_contains?: string | null /** All values containing the given string. */;
  title_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  title_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  title_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  title_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  title_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  text?: string | null;
  text_not?: string | null /** All values that are not equal to given value. */;
  text_in?: string[] | null /** All values that are contained in given list. */;
  text_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  text_lt?: string | null /** All values less than the given value. */;
  text_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  text_gt?: string | null /** All values greater than the given value. */;
  text_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  text_contains?: string | null /** All values containing the given string. */;
  text_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  text_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  text_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  text_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  text_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  author?: UserWhereInput | null;
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: ProductWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | ProductWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */;
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  createdAt_lt?: DateTime | null /** All values less than the given value. */;
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  createdAt_gt?: DateTime | null /** All values greater than the given value. */;
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */;
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  updatedAt_lt?: DateTime | null /** All values less than the given value. */;
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */;
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  name?: string | null;
  name_not?: string | null /** All values that are not equal to given value. */;
  name_in?: string[] | null /** All values that are contained in given list. */;
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  name_lt?: string | null /** All values less than the given value. */;
  name_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  name_gt?: string | null /** All values greater than the given value. */;
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  name_contains?: string | null /** All values containing the given string. */;
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  name_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  pictureUrl?: string | null;
  pictureUrl_not?:
    | string
    | null /** All values that are not equal to given value. */;
  pictureUrl_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  pictureUrl_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  pictureUrl_lt?: string | null /** All values less than the given value. */;
  pictureUrl_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  pictureUrl_gt?: string | null /** All values greater than the given value. */;
  pictureUrl_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  pictureUrl_contains?:
    | string
    | null /** All values containing the given string. */;
  pictureUrl_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  pictureUrl_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  pictureUrl_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  pictureUrl_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  pictureUrl_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  price?: number | null;
  price_not?:
    | number
    | null /** All values that are not equal to given value. */;
  price_in?:
    | number[]
    | null /** All values that are contained in given list. */;
  price_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */;
  price_lt?: number | null /** All values less than the given value. */;
  price_lte?:
    | number
    | null /** All values less than or equal the given value. */;
  price_gt?: number | null /** All values greater than the given value. */;
  price_gte?:
    | number
    | null /** All values greater than or equal the given value. */;
  seller?: UserWhereInput | null;
}
export interface PostQueryArgs {
  id: string;
}
export interface AuthorPostArgs {
  where?: UserWhereInput | null;
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
export interface CreateDraftMutationArgs {
  title: string;
  text: string;
}
export interface PublishMutationArgs {
  id: string;
}
export interface DeletePostMutationArgs {
  id: string;
}
export interface SellerProductArgs {
  where?: UserWhereInput | null;
}
