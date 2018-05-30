import * as React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

// TODO:https://www.youtube.com/watch?v=lDpnnTPokdA&index=3&list=PLN3n1USn4xlmqhVdKMurNREwtiUpq-SFy
