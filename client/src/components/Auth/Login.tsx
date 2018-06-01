import * as React from 'react'
import { Query, Mutation, FetchResult } from 'react-apollo'
import { GetLoginInputsQuery, LoginUserMutation, LoginUserMutationVariables } from '../../data/graphql-types'
import { GET_LOGIN_INPUTS } from '../../data/actions/Queries'
import InputEl from '../Elements/InputEl'
import { LOGIN_USER } from '../../data/actions/Mutations'
import { RouteComponentProps } from 'react-router'
import { AUTH_TOKEN } from '../../data/setup/constants'

interface ILoginProps {}
interface ILoginState {
  isSubmitting: boolean
}

class WithLoginInput extends Query<GetLoginInputsQuery> {}
class WithLoginMutation extends Mutation<LoginUserMutation, LoginUserMutationVariables> {}

class Login extends React.Component<ILoginProps & RouteComponentProps<{}>, ILoginState> {
  public state = {
    isSubmitting: false
  }

  public render() {
    return (
      <WithLoginInput query={GET_LOGIN_INPUTS}>
        {qryRes => {
          if (qryRes.error || !qryRes.data) return <h1>Error...</h1>
          const {
            forms: { input_Login_Email: email, input_Login_Password: password }
          } = qryRes.data

          return (
            <WithLoginMutation mutation={LOGIN_USER}>
              {(login, mtnRes) => {
                return (
                  <form
                    onSubmit={async e => {
                      e.preventDefault()
                      // clear password on submit
                      if (!qryRes.data) return
                      qryRes.client.writeData({ data: { ...qryRes.data, forms: { ...qryRes.data.forms, input_Login_Password: '' } } })
                      // guarding the submit function so that users wont submit multiple times
                      if (this.state.isSubmitting) return
                      // setting the state to true so only first submit will trigger Login mutation
                      this.setState({ isSubmitting: true })
                      // wait for Login to return an response before setting isSubmitting to false
                      let response: FetchResult<LoginUserMutation> | void
                      try {
                        response = await login({ variables: { email, password } })
                      } catch (error) {
                        console.log(error)
                        // do somthing with error
                      }
                      // setting state iSubmitting to false because a reponse has been returned: pass or fail
                      this.setState({ isSubmitting: false })
                      // reset state using default state
                      if (!response || !response.data) return
                      qryRes.client.writeData({
                        data: {
                          ...qryRes.data,
                          forms: {
                            ...qryRes.data.forms,
                            input_Login_Email: '',
                            input_Login_Password: ''
                          }
                        }
                      })
                      // store the token in local storage
                      await localStorage.setItem(AUTH_TOKEN, response.data.login.token)
                      // signup finish and push to a page
                      this.props.history.push('/')
                    }}
                  >
                    <InputEl value={email} placeholder="Email" keyName="input_Login_Email" qryRes={qryRes} />
                    <br />
                    <InputEl type="password" value={password} placeholder="Password" keyName="input_Login_Password" qryRes={qryRes} />
                    <br />
                    <button>Login</button>
                    {mtnRes.loading && <p>Loading...</p>}
                    {mtnRes.error && <p>Error Please try again {mtnRes.error.message}</p>}
                  </form>
                )
              }}
            </WithLoginMutation>
          )
        }}
      </WithLoginInput>
    )
  }
}

export default Login
