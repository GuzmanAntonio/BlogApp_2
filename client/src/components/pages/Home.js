import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const styles = {
  container: {
    backgroundColor: '#A2DED0'
  }
}

const Home = () => {
  return (
    <Card>
      <div style={styles.container}>
        <Typography type='display1' gutterBottom >
          <h3>Home</h3>
        </Typography>
      </div>
    </Card>
  )
}

export default Home
