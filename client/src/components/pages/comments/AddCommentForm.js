import React from 'react'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'

const styles = {
  container: {
    marginTop: 30
  },
  formContainer: {
    padding: 20
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 5
  }
}

const AddCommentForm = ({ onChangeHandler, submitCommentToServer, name, comment, image, location }) =>
  <div style={styles.container}>
    <Card>
      <form style={styles.formContainer} >
        <Typography type='display1' gutterBottom >Create Blog Post</Typography>
        <div>
          <TextField label='Add Name' onChange={onChangeHandler} id={'name'} />
        </div>
        <div>
          <TextField label='Add Comment' onChange={onChangeHandler} id={'comment'} />
        </div>
        <div>
          <TextField label='Add Image' onChange={onChangeHandler} id={'image'} />
        </div>
        <div>
          <TextField label='Add Location' onChange={onChangeHandler} id={'location'} />
        </div>
        <Button raised /*disabled={!name || !comment || !image || !location}*/ style={styles.buttonContainer} onClick={submitCommentToServer} >
            SUBMIT
        </Button>
      </form>
    </Card>
  </div>

AddCommentForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  submitCommentToServer: PropTypes.func.isRequired
  // name: PropTypes.string.isRequired,
  // comment: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  // location: PropTypes.string.isRequired
}

export default AddCommentForm
