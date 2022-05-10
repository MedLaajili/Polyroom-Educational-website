//Blog_index, blog_details, blog_post, blog_delete

const User = require("../models/user");

//const Blog = require('../Models/blog');

//Authentification part
signup_get=(req,res)=>{
    res.render('signup',{title:'Sign Up'})
};

signup_post= async(req,res)=>{
    const {email,password}=req.body;

    try{
        const user = await User.create({email,password});
        res.status(201).json(user);
    }
    catch(err){
        console.log(err);
        res.status(400).send('error,user not created');
    }
};

login_get=(req,res)=>{
    res.render('login',{title:'Login'})
};

login_post=(req,res)=>{
    res.send('logged in')
};
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
module.exports = {index,signup_get,login_get,signup_post,login_post};
