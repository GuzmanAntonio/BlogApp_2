import React from 'react'
// import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import CommentCard from './CommentCard'

const styles = {
  container: {
    backgroundColor: '#FABE58'
  }
}

const CommentsList = ({blogPosts}) => {
  return (
    <Card>
      <div style={styles.container}>
        {
          blogPosts.map(blogPost => {
            return <CommentCard 
              name={blogPost.name}
              comment={blogPost.comment}
              image={blogPost.image}
              location={blogPosts.location}
              id={blogPost._id}
            />
          })
        }
      </div>
    </Card>
  )
}

export default CommentsList
