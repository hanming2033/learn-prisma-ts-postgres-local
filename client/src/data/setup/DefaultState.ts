// this file sets the local state defaults
// add new global state step 1: create interfaces and default states

export const types = {
  FORMS: 'forms'
}

interface IState {
  forms: {
    __typename: string
    input_Signup_Name: string
    input_Signup_Email: string
    input_Signup_Password: string
    input_Login_Email: string
    input_Login_Password: string
  }
}

const defaultState: IState = {
  forms: {
    __typename: types.FORMS,
    input_Signup_Name: '',
    input_Signup_Email: '',
    input_Signup_Password: '',
    input_Login_Email: '',
    input_Login_Password: ''
  }
}

export default defaultState
