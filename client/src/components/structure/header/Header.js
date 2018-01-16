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
  },
  nav: {
    fontFamily: 'Candal, sans-serif'
  }
}

const Header = () => {
  return (
    <header>
      <nav style={styles.container}>
        <div style={styles.nav}>
          <NavItem to='/' >Home</NavItem>
        </div>
        <div style={styles.nav}>
          <NavItem to='/about' >About</NavItem>
        </div>
        <div style={styles.nav}>
          <NavItem to='/comments' >Comments</NavItem>
        </div>
        <div style={styles.nav}>
          <NavItem to='/add-comment' > Add Blog Post </NavItem>
        </div>
      </nav>
    </header>
  )
}

export default Header
