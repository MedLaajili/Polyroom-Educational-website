//Blog_index, blog_details, blog_post, blog_delete

//const Blog = require('../Models/blog');

const index = (req,res)=>{
        res.render('home',{title:'Home'})
    };
/*const course = (req,res)=>{
    res.render('course',{title:'Courses'})
};
const teacher = (req,res)=>{
    res.render('teacher',{title:'Teacher'})
};*/
/* const blog_details = (req,res)=>{
    Blog.findById(req.params.id)
    .then((result)=>{
        res.render('details', {blog:result, title:'Blog Details'});
    })
    .catch((err)=>{
        console.log(err);
    });
};

const blog_create = (req,res)=>{
    res.render('create',{title:'New Blog'});
};
const blog_post = (req,res)=>{
    const blog = new Blog(req.body);

    blog.save().then((result)=>{
        res.redirect('/blogs');
    })
    .catch((err)=>{
        console.log(err);
    })
};
const blog_delete = (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:'/blogs'});
    })
    .catch((err)=>{
        console.log(err);
    });
};
*/
module.exports = {index};
