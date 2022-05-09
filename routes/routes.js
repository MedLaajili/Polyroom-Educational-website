const express = require('express');
const router = express.Router();
//const Blog = require('../Models/blog');
const Controller = require('../Controllers/Controller');
// Blog routes
router.get('/',Controller.index);
//router.get('/teacher',Controller.teacher);
//router.get('/course',Controller.course);
//router.get('/create',BlogController.blog_create);
//router.post('/',BlogController.blog_post);
// Display one blog
//router.get('/:id',BlogController.blog_details);
//Delete a blog
//router.delete('/:id',BlogController.blog_delete);

module.exports = router;