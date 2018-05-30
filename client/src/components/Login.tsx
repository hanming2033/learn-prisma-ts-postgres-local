import * as React from 'react'
import { Query, QueryResult } from 'react-apollo'
import { GetLoginInputsQuery } from '../data/graphql-types'
import { GET_LOGIN_INPUTS } from '../data/actions/Queries'

interface ILoginProps {}

class WithLoginInput extends Query<GetLoginInputsQuery> {}

const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>, childKey: string, qryRes: QueryResult<GetLoginInputsQuery>) => {
  if (qryRes.data) {
    const newData: GetLoginInputsQuery = {
      ...qryRes.data,
      forms: {
        ...qryRes.data.forms,
        [childKey]: e.currentTarget.value
      }
    }
    qryRes.client.writeData({ data: newData })
  }
}

const Login: React.SFC<ILoginProps> = props => {
  return (
    <WithLoginInput query={GET_LOGIN_INPUTS}>
      {qryRes => {
        if (qryRes.error || !qryRes.data) return <h1>Error...</h1>
        const {
          forms: { input_Login_Email: email, input_Login_Password: password }
        } = qryRes.data

        return (
          <>
            <input type="text" value={email} onChange={e => handleInputChange(e, 'input_Login_Email', qryRes)} placeholder="Email" />
            <br />
            <input
              type="password"
              value={password}
              onChange={e => handleInputChange(e, 'input_Login_Password', qryRes)}
              placeholder="password"
            />
          </>
        )
      }}
    </WithLoginInput>
  )
}

export default Login
