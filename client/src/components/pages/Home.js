import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#FDE3A7',
    flexDirection: 'column',
    width: '100vw',
    height: 'auto',
    padding: '20px'
  },
  img: {
    container: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '50%',
      height: 'auto'
    }
  }
}

const Home = () => {
  return (
    <Card>
      <div style={styles.img}>
        <Typography type='display1' gutterBottom >
          <h3>Home</h3>
          <img style={styles.img}src={'https://marketingweek.imgix.net/content/uploads/2016/04/04160044/78791213_thumbnail.jpg?auto=compress,format,&crop=faces,entropy,edges&fit=crop&q=60&w=780&h=780'} alt='' />
        </Typography>
      </div>
    </Card>
  )
}

export default Home
