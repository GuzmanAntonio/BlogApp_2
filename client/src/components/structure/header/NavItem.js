import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const styles = {
  container: {
  },
  nav: {
    textDecoration: 'none',
    color: 'white'
  },
  active: {
    color: 'red'
  }
}

const NavItem = ({to, children, exact}) =>
  <div>
    <NavLink style={styles.nav} activeStyle={styles.active} exact={exact} to={to} >{children}</NavLink>
  </div>

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  childern: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired
}

NavItem.defaultProps = {exact: false}

export default NavItem
