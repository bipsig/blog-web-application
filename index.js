import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { blogsData } from "./data.js";

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static("public"))
app.use (bodyParser.urlencoded ({ extended: true }))



var blogs = blogsData
var currentId = 11;

const getDate = () => {
    const date = new Date();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const ans = months [date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

    return ans;
}

const updateBlog = (id, updatedBlog) => {
    const index = blogs.findIndex (blog => blog.id == id);
    // console.log ("Index: " + index);

    if (index != -1) {
        blogs [index] = { ...blogs [index], ...updatedBlog}
    }

    // console.log (blogs);
}

app.get('/', (req, res) => {
    console.log (blogs);
    res.render("index.ejs", {
        blogs: blogs
    });
})

app.get ('/blog:id', (req, res) => {
    const blogId = req.params.id;
    const blog = blogs.find (b => b.id == blogId);

    if (blog) {
        res.render ("blog-details.ejs", {
            blog: blog
        })
    }
    else {
        res.render ("404.ejs");
    }
})

app.get ('/create-blog', (req, res) => {
    res.render ("create-blog.ejs");
})

app.post ('/create-blog', (req, res) => {
    // console.log ("Title: " + req.body.title);
    // console.log ("Author: " + req.body.author);
    // console.log ("Summary: " + req.body.summary);
    // console.log ("Content: " + req.body.content);

    const blogDate = getDate ();
    // console.log ("Date" + blogDate);

    var newBlog = {id: currentId, updated: false, title: req.body.title, summary: req.body.summary, author: req.body.author, date: blogDate, content: req.body.content};
    currentId++;

    blogs.push (newBlog);

    res.redirect ('/');
})

app.post ('/delete-blog:id', (req, res) => {
    const blogId = req.params.id;
    // console.log (blogId);

    // console.log ("Before:");
    // console.log (blogs);
    blogs = blogs.filter (blog => blog.id != blogId);
    // console.log ("After:");
    // console.log (blogs);

    res.redirect ('/');
})

app.get ('/update-blog:id', (req, res) => {
    const blogId = req.params.id;
    const blog = blogs.find (blog => blog.id == blogId);
    // console.log (blog);
    res.render ("update-blog.ejs", {
        blog: blog
    });
})

app.post ('/update-blog:id', (req, res) => {
    const blogId = req.params.id;
    const blogDate = getDate ();

    const updatedBlog = {updated: true, title: req.body.title, summary: req.body.summary, author: req.body.author, date: blogDate,content: req.body.content}
    // console.log (updatedBlog);

    updateBlog (blogId, updatedBlog);

    res.redirect ('/');
})

app.all('*', (req, res) => {
    res.render("404.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port} successfully`);
})