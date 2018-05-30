import * as React from 'react'
import { Query, QueryResult, Mutation } from 'react-apollo'
import { GetSignUpInputsQuery, SignupUserMutation } from '../data/graphql-types'
import { GET_SIGN_UP_INPUTS } from '../data/actions/Queries'
import { SIGNUP_USER } from '../data/actions/Mutations'

interface ISignupProps {}

class WithSignUpInputQuery extends Query<GetSignUpInputsQuery> {}
class WithSignUpMutation extends Mutation<SignupUserMutation> {}

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

const Signup: React.SFC<ISignupProps> = props => {
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
                <form
                  onSubmit={(e: React.SyntheticEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    signup({ variables: { email, name, password } })
                  }}
                >
                  <input type="text" value={name} onChange={e => handleInputChange(e, 'input_Signup_Name', qryRes)} placeholder="Name" />
                  <br />
                  <input type="text" value={email} onChange={e => handleInputChange(e, 'input_Signup_Email', qryRes)} placeholder="Email" />
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
              )
            }}
          </WithSignUpMutation>
        )
      }}
    </WithSignUpInputQuery>
  )
}

export default Signup

// TODO: https://www.youtube.com/watch?v=bXpuqDOYHGk&list=PLN3n1USn4xlmqhVdKMurNREwtiUpq-SFy&index=4
