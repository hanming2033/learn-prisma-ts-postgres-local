import * as React from 'react'
import { Query, QueryResult, Mutation, FetchResult } from 'react-apollo'
import { GetSignUpInputsQuery, SignupUserMutation, SignupUserMutationVariables } from '../data/graphql-types'
import { GET_SIGN_UP_INPUTS } from '../data/actions/Queries'
import { SIGNUP_USER } from '../data/actions/Mutations'
import { AUTH_TOKEN } from '../data/setup/constants'
import { RouteComponentProps } from 'react-router'

interface ISignupProps {}
export interface ISignupState {
  isSubmitting: boolean
}

class WithSignUpInputQuery extends Query<GetSignUpInputsQuery> {}
class WithSignUpMutation extends Mutation<SignupUserMutation, SignupUserMutationVariables> {}

const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>, childKey: string, qryRes: QueryResult<GetSignUpInputsQuery>) => {
  if (qryRes.data) {
    const newData: GetSignUpInputsQuery = {
      ...qryRes.data,
      forms: {
        ...qryRes.data.forms,
        [childKey]: e.currentTarget.value
      }
    }
    qryRes.client.writeData({ data: newData })
  }
}

class Signup extends React.Component<ISignupProps & RouteComponentProps<{}>, ISignupState> {
  public state = {
    isSubmitting: false
  }

  public render() {
    return (
      <WithSignUpInputQuery query={GET_SIGN_UP_INPUTS}>
        {qryRes => {
          if (qryRes.error || !qryRes.data) return <h1>Error!!</h1>

          // deconstruct the data object
          const {
            forms: { input_Signup_Email: email, input_Signup_Name: name, input_Signup_Password: password }
          } = qryRes.data

          return (
            <WithSignUpMutation mutation={SIGNUP_USER}>
              {(signup, mtnRes) => {
                return (
                  <>
                    <form
                      onSubmit={async (e: React.SyntheticEvent<HTMLFormElement>) => {
                        e.preventDefault()
                        // clear password on submit
                        if (!qryRes.data) return
                        qryRes.client.writeData({ data: { ...qryRes.data, forms: { ...qryRes.data.forms, input_Signup_Password: '' } } })
                        // guarding the submit function so that users wont submit multiple times
                        if (this.state.isSubmitting) return
                        // setting the state to true so only first submit will trigger signup mutation
                        this.setState({ isSubmitting: true })
                        // wait for signup to return an response before setting isSubmitting to false
                        let response: FetchResult<SignupUserMutation> | void
                        try {
                          response = await signup({ variables: { email, name, password } })
                        } catch (error) {
                          console.log(error)
                          // call other function on error
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
                              input_Signup_Name: '',
                              input_Signup_Email: '',
                              input_Signup_Password: ''
                            }
                          }
                        })
                        // store the token in local storage
                        await localStorage.setItem(AUTH_TOKEN, response.data.signup.token)
                        // signup finish and push to a page
                        this.props.history.push('/')
                      }}
                    >
                      <input
                        type="text"
                        value={name}
                        onChange={e => handleInputChange(e, 'input_Signup_Name', qryRes)}
                        placeholder="Name"
                      />
                      <br />
                      <input
                        type="text"
                        value={email}
                        onChange={e => handleInputChange(e, 'input_Signup_Email', qryRes)}
                        placeholder="Email"
                      />
                      <br />
                      <input
                        type="password"
                        value={password}
                        onChange={e => handleInputChange(e, 'input_Signup_Password', qryRes)}
                        placeholder="password"
                      />
                      <br />
                      <button type="submit">Submit</button>
                    </form>
                    <button onClick={() => this.props.history.push('/login')}>Login In</button>
                    {mtnRes.loading && <p>Loading...</p>}
                    {mtnRes.error && <p>Error Please try again {mtnRes.error.message}</p>}
                  </>
                )
              }}
            </WithSignUpMutation>
          )
        }}
      </WithSignUpInputQuery>
    )
  }
}
export default Signup

// TODO: https://www.youtube.com/watch?v=bXpuqDOYHGk&list=PLN3n1USn4xlmqhVdKMurNREwtiUpq-SFy&index=4
