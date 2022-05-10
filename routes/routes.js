const express = require('express');
const router = express.Router();
//const Blog = require('../Models/blog');
const Controller = require('../Controllers/Controller');

//Authetification
router.get('/signup',Controller.signup_get);
router.post('/signup',Controller.signup_post)
router.get('/login',Controller.login_get)
router.post('/login',Controller.login_post)
// Blog routes
router.get('/home',Controller.index);
//router.get('/teacher',Controller.teacher);
//router.get('/course',Controller.course);
//router.get('/create',BlogController.blog_create);
//router.post('/',BlogController.blog_post);
// Display one blog
//router.get('/:id',BlogController.blog_details);
//Delete a blog
//router.delete('/:id',BlogController.blog_delete);

module.exports = router;