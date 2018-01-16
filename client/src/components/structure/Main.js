import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Comments from '../pages/Comments'
import AddCommentContainer from '../pages/comments/AddCommentContainer'
import {Route} from 'react-router-dom'

const styles = {
  container: {
    textAlign: 'center',
    padding: '20',
    backgroundColor: '#ECECEC',
    // background-color: #ececec;
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-thread-light.png")'
  }
}

const Main = () =>
  <main style={styles.container}>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/comments' component={Comments} />
    <Route path='/add-comment' component={AddCommentContainer} />
  </main>

export default Main
