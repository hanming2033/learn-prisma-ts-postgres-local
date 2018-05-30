import * as React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Nav from './Nav'

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
