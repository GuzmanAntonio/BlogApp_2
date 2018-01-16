import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const styles = {
  container: {
    backgroundColor: '#F1A9A0'
  }
}

const About = () => {
  return (
    <Card>
      <div style={styles.container}>
        <Typography type='display1' gutterBottom >
          <h3>About</h3>
        </Typography>
      </div>
    </Card>
  )
}

export default About
