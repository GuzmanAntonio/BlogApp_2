import React, {Component} from 'react'
import AddCommentForm from './AddCommentForm'
import $ from 'jquery'

class AddCommentContainer extends Component {
  state = {
    name: undefined,
    comment: undefined,
    image: undefined,
    location: undefined
  }

  onChangeHandler = (e) => this.setState({ [e.targetid]: e.target.value })

  submitCommentToServer = () => {
    const {name, comment, image, location} = this.state
    const newBlogPost = {name, comment, image, location}
    $.ajax({
      url: '/api/blogPosts',
      method: 'POST',
      data: newBlogPost
    }).done((response) => {
      console.log(response, 'hey')
    })
  }

  render () {
    return <AddCommentForm
      {...this.state}
      onChangeHandler={this.onChangeHandler}
      submitCommentToServer={this.submitCommentToServer}
    />
  }
}

export default AddCommentContainer
