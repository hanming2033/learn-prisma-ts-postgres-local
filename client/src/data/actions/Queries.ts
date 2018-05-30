import gql from 'graphql-tag'

export const SEARCH_FEED = gql`
  query SearchFeed($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

export const GET_SEARCH_DETAILS = gql`
  query GetSearchDetails {
    forms @client {
      inputSearch
    }
  }
`

export const GET_FORMS_LOCAL = gql`
  query GetFormsLocal @client {
    forms {
      inputDescCreateLink
      inputUrlCreateLink
    }
  }
`

export const GET_FEED = gql`
  query GetFeed {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

export const GET_LOGIN_DATA = gql`
  query getLoginData {
    user @client {
      __typename
      loginStatus
    }
    forms @client {
      __typename
      inputEmailLogin
      inputPasswordLogin
      inputNameLogin
    }
  }
`
