export const types = {
  USER: 'user',
  FORMS: 'forms'
}

interface IState {
  user: {
    __typename: string
    loginStatus: boolean
  }

  forms: {
    __typename: string
    inputDescCreateLink: string
    inputUrlCreateLink: string
    inputEmailLogin: string
    inputPasswordLogin: string
    inputNameLogin: string
    inputSearch: string
  }
}

const defaultState: IState = {
  user: {
    __typename: types.USER,
    loginStatus: false
  },
  forms: {
    __typename: types.FORMS,
    inputDescCreateLink: '',
    inputUrlCreateLink: '',
    inputEmailLogin: '',
    inputPasswordLogin: '',
    inputNameLogin: '',
    inputSearch: ''
  }
}

export default defaultState
