const express = require('express')
const Router = express.Router()
const BlogPosts = require('../models/BlogPosts')

Router.route('/')
  .get((req, res) => {
    BlogPosts.find((err, blogPosts) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({response: 'SUCCESS', data: blogPosts})
      }
    })
  })
  .post((req, res) => {
    const blogPost = new BlogPosts()
    blogPost.setBlogPostData(req.body)
    blogPost.setDate()
    blogPost.save((err, savedBlogPost) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESSFUL POST', data: savedBlogPost})
      }
    })
  })

Router.route('/:blogPostId')
  .get((req, res) => {
    const blogPostId = req.params.blogPostId
    BlogPosts.findById({_id: blogPostId}, (err, blogPost) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESSFUL GET', blogPost})
      }
    })
  })
  .delete((req, res) => {
    const deleteBlogPost = req.params.deleteBlogPost
    BlogPosts.remove({_id: deleteBlogPost}, (err, blogPost) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESSFUL DELETE', blogPost})
      }
    })
  })
  .put((req, res) => {
    const blogPostId = req.params.blogPostId
    BlogPosts.findById({_id: blogPostId}, (err, blogPost) => {
      if (err) {
        res.json({error: err})
      } else {
        blogPost.setBlogPostData(req.body)
        blogPost.save((err, updatedBlogPost) => {
          if (err) {
            res.json({error: err})
          } else {
            res.json({msg: 'SUCCESSFUL EDIT', data: updatedBlogPost})
          }
        })
      }
    })
  })

module.exports = Router
