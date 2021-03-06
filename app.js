const express = require('express');
var morgan = require('morgan');
const mongoose = require('mongoose');
const Router = require('./routes/routes');
const { render } = require('ejs');
const cookieParser = require('cookie-parser');

// express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://laajili:test1234@nodetuto.n1hyy.mongodb.net/PolyRoomDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err));

//Register view engine
app.set('view engine','ejs');

//middleware & statis files
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cookieParser);

/*mongoose and mongo sandbox routes
app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title:'new blog',
        snippet:'about my blog',
        body:'more about my blog'
    });
    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
});
app.get('/all-blog',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
});
app.get('/single-blog',(req,res)=>{
    Blog.findById('625f5594d7655e92d8c278fe')
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
});
*/

//routes
app.get('/',(req,res)=>{
res.redirect('/signup');
});
app.get('/contact',(req,res)=>{
    res.render('contact',{title:'Contactez-nous'});
});
app.get('/teacher',(req,res)=>{
    res.render('teacher',{title:'Teacher'});
});
app.get('/course',(req,res)=>{
    res.render('course',{title:'Courses'});
});

//blog routes
app.use('/',Router);

//cookies
app.get('/set-cookies',(req,res)=>{
    //res.setHeader('Set-Cookie','newUser-true');
    res.cookie('newUser',false);
    res.cookie('isEmployee',true,{maxAge:1000*60*60*24,httpOnly: true});

    res.send('you got the cookies!');
});

app.get('/read-cookies',(req,res)=>{

});

//404 page
//app.use((req,res)=>{
//    res.status(404).render('404',{title:'Error'});
//});
