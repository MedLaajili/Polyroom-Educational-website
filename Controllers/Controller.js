//Blog_index, blog_details, blog_post, blog_delete

const User = require("../models/user");

//hadle errors
const handleErrors = (err)=>{
    console.log(err.message, err.code);
    let error ={email:'',password:''};

//duplicate error code
if(err.code === 11000){
    error.email = 'that email is already registered';
    return errors;
}
//validation errors
    if (err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path]=properties.message;
        })
    }
}

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
        const errors = handleErrors(err);
        res.status(400).json({errors});
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
