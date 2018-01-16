import React from 'react'
import NavItem from './NavItem'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#00B16A',
    paddingTop: '15',
    padding: '10',
    flexDirection: 'row',
    borderBottom: '3px solid #1E824C'
  }
}

const Header = () => {
  return (
    <header>
      <nav style={styles.container}>
        <NavItem to='/' >Home</NavItem>
        <NavItem to='/about' >About</NavItem>
        <NavItem to='/comments' >Comments</NavItem>
        <NavItem to='/add-comment' > Add Comments </NavItem>
      </nav>
    </header>
  )
}

export default Header
