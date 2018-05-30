/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface CreatePostMutationVariables {
  description: string,
  url: string,
};

export interface CreatePostMutation {
  post:  {
    __typename: "Link",
    id: string,
    createdAt: string,
    url: string,
    description: string,
    postedBy:  {
      __typename: "User",
      id: string,
      name: string,
    } | null,
    votes:  Array< {
      __typename: "Vote",
      id: string,
      user:  {
        __typename: "User",
        id: string,
      },
    } > | null,
  },
};

export interface SignupMutationMutationVariables {
  email: string,
  password: string,
  name: string,
};

export interface SignupMutationMutation {
  signup:  {
    __typename: "AuthPayload",
    token: string | null,
  } | null,
};

export interface LoginMutationMutationVariables {
  email: string,
  password: string,
};

export interface LoginMutationMutation {
  login:  {
    __typename: "AuthPayload",
    token: string | null,
  } | null,
};

export interface VoteUpMutationVariables {
  linkId: string,
};

export interface VoteUpMutation {
  vote:  {
    __typename: "Vote",
    id: string,
    link:  {
      __typename: "Link",
      votes:  Array< {
        __typename: "Vote",
        id: string,
        user:  {
          __typename: "User",
          id: string,
        },
      } > | null,
    },
    user:  {
      __typename: "User",
      id: string,
    },
  } | null,
};

export interface SearchFeedQueryVariables {
  filter: string,
};

export interface SearchFeedQuery {
  feed:  {
    __typename: "Feed",
    links:  Array< {
      __typename: "Link",
      id: string,
      url: string,
      description: string,
      createdAt: string,
      postedBy:  {
        __typename: "User",
        id: string,
        name: string,
      } | null,
      votes:  Array< {
        __typename: "Vote",
        id: string,
        user:  {
          __typename: "User",
          id: string,
        },
      } > | null,
    } >,
  },
};

export interface GetSearchDetailsQuery {
  forms:  {
    __typename: "forms",
    inputSearch: string,
  },
};

export interface GetFormsLocalQuery {
  forms:  {
    __typename: "forms",
    inputDescCreateLink: string,
    inputUrlCreateLink: string,
  },
};

export interface GetFeedQuery {
  feed:  {
    __typename: "Feed",
    links:  Array< {
      __typename: "Link",
      id: string,
      createdAt: string,
      url: string,
      description: string,
      postedBy:  {
        __typename: "User",
        id: string,
        name: string,
      } | null,
      votes:  Array< {
        __typename: "Vote",
        id: string,
        user:  {
          __typename: "User",
          id: string,
        },
      } > | null,
    } >,
  },
};

export interface getLoginDataQuery {
  user:  {
    __typename: "user",
    loginStatus: boolean,
  },
  forms:  {
    __typename: "forms",
    inputEmailLogin: string,
    inputPasswordLogin: string,
    inputNameLogin: string,
  },
};

export interface OnNewLinkAddedSubscription {
  newLink:  {
    __typename: "LinkSubscriptionPayload",
    node:  {
      __typename: "Link",
      id: string,
      url: string,
      description: string,
      createdAt: string,
      postedBy:  {
        __typename: "User",
        id: string,
        name: string,
      } | null,
      votes:  Array< {
        __typename: "Vote",
        id: string,
        user:  {
          __typename: "User",
          id: string,
        },
      } > | null,
    } | null,
  } | null,
};

export interface OnNewVoteAddedSubSubscription {
  newVote:  {
    __typename: "VoteSubscriptionPayload",
    node:  {
      __typename: "Vote",
      id: string,
      link:  {
        __typename: "Link",
        id: string,
        url: string,
        description: string,
        createdAt: string,
        postedBy:  {
          __typename: "User",
          id: string,
          name: string,
        } | null,
        votes:  Array< {
          __typename: "Vote",
          id: string,
          user:  {
            __typename: "User",
            id: string,
          },
        } > | null,
      },
      user:  {
        __typename: "User",
        id: string,
      },
    } | null,
  } | null,
};
