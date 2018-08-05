import React from 'react'
import Auxc from '../../hoc/Auxc'
import classes from './Layout.css'
const Layout = (props) => {
  return (
    <Auxc>
      <div>
        navbar, SideDrawer, backdrop
      </div>
      <main
        className={classes.Content}
      >
        {props.children}
      </main>
    </Auxc>
  )
}

export default Layout
