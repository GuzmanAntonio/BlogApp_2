import React, {Component} from 'react'
import $ from 'jquery'
import CommentsList from './CommentsList'

class CommentsContainer extends Component {
  state = {
    comments: undefined
  }

  componentDidMount () {
    this.loadCommentsFromServer()
  }

  loadCommentsFromServer = () => {
    $.ajax({
      url: '/api/blogPosts',
      method: 'GET'
    }).done((response) => {
      console.log(response, 'GET')
      this.setState({blogPosts: response.data})
    })
  }

  render () {
    return (
      <div>
        {
          this.state.comments
          ? <CommentsList comments={this.state.comments} />
          : 'No Comments'
        }
      </div>
    )
  }
}

export default CommentsContainer
