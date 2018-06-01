import * as React from 'react'
import { RefreshTokenMutation, RefreshTokenMutationVariables } from '../../data/graphql-types'
import { Mutation, MutationResult, MutationFn } from 'react-apollo'
import { REFRESH_TOKEN } from '../../data/actions/Mutations'
import { AUTH_TOKEN } from '../../data/setup/constants'
import { RouteComponentProps } from 'react-router'
import * as H from 'history'
interface ICheckTokenProps {}

class WithRefreshTokenMutation extends Mutation<RefreshTokenMutation, RefreshTokenMutationVariables> {}

// outsource the freshToken function
const refresh = async (
  refreshToken: MutationFn<RefreshTokenMutation, RefreshTokenMutationVariables>,
  mtnRes: MutationResult<RefreshTokenMutation>,
  history: H.History
) => {
  // first try to get from localstorage
  const localToken = await localStorage.getItem(AUTH_TOKEN)
  // if no token in localstorage, push to signup page
  if (!localToken) {
    history.push('/signup')
    return
  }
  // if there is token, try to refresh token
  const res = await refreshToken({
    variables: {
      token: localToken
    }
  })
  console.log(res)

  return <p>Loading...</p>
}
// TODO: change to stateful and use componentDidMount
// TODO: https://www.youtube.com/watch?v=U-7B_cItfH8&list=PLN3n1USn4xlmqhVdKMurNREwtiUpq-SFy&index=7 15:10
const CheckToken: React.SFC<ICheckTokenProps & RouteComponentProps<{}>> = props => {
  return (
    <WithRefreshTokenMutation mutation={REFRESH_TOKEN}>
      {(refreshToken, mtnRes) => {
        refresh(refreshToken, mtnRes, props.history)
        return <h1>hihi</h1>
      }}
    </WithRefreshTokenMutation>
  )
}

export default CheckToken
