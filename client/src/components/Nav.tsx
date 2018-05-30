import * as React from 'react'
import { NavLink } from 'react-router-dom'

interface INavProps {}

const Nav: React.SFC<INavProps> = props => {
  return (
    <>
      <NavLink exact activeStyle={{ color: '#fa923f' }} to="/signup">
        Signup
      </NavLink>
      <div style={{ width: '20px', display: 'inline-block' }} />
      <NavLink exact activeStyle={{ color: '#fa923f' }} to="/login">
        Login
      </NavLink>
      <br />
      <br />
    </>
  )
}

export default Nav
