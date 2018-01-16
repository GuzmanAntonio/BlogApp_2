import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const styles = {
  container: {
    backgroundColor: '#A2DED0'
  }
}

const Comments = () => {
  return (
    <Card>
      <div style={styles.container}>
        <Typography type='display1' gutterBottom >
          <h3>Comments</h3>
        </Typography>
      </div>
    </Card>
  )
}

export default Comments
