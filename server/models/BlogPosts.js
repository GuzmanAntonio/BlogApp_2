const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BlogRoutes = require('../routes/BlogRoutes')

const BlogPosts = new Schema({
  name: {type: String, required: true},
  comment: {type: String, required: true},
  image: {type: String, required: true},
  location: {type: String, required: true},
  created: {type: Date, required: true}
})

BlogPosts.methods.setBlogPostData = function (requestBody) {
  this.name = requestBody.name || this.name
  this.comment = requestBody.comment || this.comment
  this.image = requestBody.image || this.image
  this.location = requestBody.location || this.location
}

BlogPosts.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('BlogPosts', BlogPosts)
