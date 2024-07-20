import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static("public"))
app.use (bodyParser.urlencoded ({ extended: true }))


var blogs = [
    { id: 1, updated: false, title: 'Blog Post 1', summary: 'Summary of blog post 1', author: 'Author 1', date: '02-03-2024', content: 'Lorem ipsum dolor sit amet. A soluta mollitia et quis molestiae qui voluptatem voluptatum vel culpa explicabo et quia ratione eos libero maxime est explicabo voluptatem. Et internos tempore est consequuntur enim rem illo libero et incidunt autem. Rem voluptatem dolores et adipisci enim ex accusantium quia et repellendus facere et repudiandae magni est eveniet dolorum.Et corrupti voluptas eum repellendus neque sit aliquid omnis et iste quasi aut aperiam neque ut veritatis facere. 33 enim nihil est aspernatur consectetur vel dolor ipsa id ipsam eveniet aut dicta vero! Non consequatur rerum nam quasi neque eos galisum soluta ab iste alias in quos inventore aut omnis officia. In fuga dolores est rerum illo sit eligendi quis ut officiis blanditiis sed aliquid laborum ab sint voluptatibus.Ut sapiente accusantium et neque sunt et eveniet architecto et neque consequuntur et fugiat magni vel adipisci internos? Sed architecto dolorem et inventore vitae qui illo consequatur qui nostrum consequatur est voluptatibus sapiente et omnis explicabo vel optio reiciendis. In blanditiis quia ut officiis ducimus est fuga dicta et cumque optio. Ea laboriosam minima est quod suscipit qui iure voluptate aut dignissimos autem ut omnis dolores id omnis fugit cum ipsa nisi.' },
    { id: 2, updated: false, title: 'Blog Post 2', summary: 'Summary of blog post 2', author: 'Author 2', date: '02-03-2024', content: 'Lorem ipsum dolor sit amet. A soluta mollitia et quis molestiae qui voluptatem voluptatum vel culpa explicabo et quia ratione eos libero maxime est explicabo voluptatem. Et internos tempore est consequuntur enim rem illo libero et incidunt autem. Rem voluptatem dolores et adipisci enim ex accusantium quia et repellendus facere et repudiandae magni est eveniet dolorum.Et corrupti voluptas eum repellendus neque sit aliquid omnis et iste quasi aut aperiam neque ut veritatis facere. 33 enim nihil est aspernatur consectetur vel dolor ipsa id ipsam eveniet aut dicta vero! Non consequatur rerum nam quasi neque eos galisum soluta ab iste alias in quos inventore aut omnis officia. In fuga dolores est rerum illo sit eligendi quis ut officiis blanditiis sed aliquid laborum ab sint voluptatibus.Ut sapiente accusantium et neque sunt et eveniet architecto et neque consequuntur et fugiat magni vel adipisci internos? Sed architecto dolorem et inventore vitae qui illo consequatur qui nostrum consequatur est voluptatibus sapiente et omnis explicabo vel optio reiciendis. In blanditiis quia ut officiis ducimus est fuga dicta et cumque optio. Ea laboriosam minima est quod suscipit qui iure voluptate aut dignissimos autem ut omnis dolores id omnis fugit cum ipsa nisi.' },
    { id: 3, updated: false, title: 'Blog Post 3', summary: 'Summary of blog post 3', author: 'Author 3', date: '02-03-2024', content: 'Lorem ipsum dolor sit amet. A soluta mollitia et quis molestiae qui voluptatem voluptatum vel culpa explicabo et quia ratione eos libero maxime est explicabo voluptatem. Et internos tempore est consequuntur enim rem illo libero et incidunt autem. Rem voluptatem dolores et adipisci enim ex accusantium quia et repellendus facere et repudiandae magni est eveniet dolorum.Et corrupti voluptas eum repellendus neque sit aliquid omnis et iste quasi aut aperiam neque ut veritatis facere. 33 enim nihil est aspernatur consectetur vel dolor ipsa id ipsam eveniet aut dicta vero! Non consequatur rerum nam quasi neque eos galisum soluta ab iste alias in quos inventore aut omnis officia. In fuga dolores est rerum illo sit eligendi quis ut officiis blanditiis sed aliquid laborum ab sint voluptatibus.Ut sapiente accusantium et neque sunt et eveniet architecto et neque consequuntur et fugiat magni vel adipisci internos? Sed architecto dolorem et inventore vitae qui illo consequatur qui nostrum consequatur est voluptatibus sapiente et omnis explicabo vel optio reiciendis. In blanditiis quia ut officiis ducimus est fuga dicta et cumque optio. Ea laboriosam minima est quod suscipit qui iure voluptate aut dignissimos autem ut omnis dolores id omnis fugit cum ipsa nisi.' },
    { id: 4, updated: false, title: 'Blog Post 4', summary: 'Summary of blog post 4', author: 'Author 4', date: '02-03-2024', content: 'Lorem ipsum dolor sit amet. A soluta mollitia et quis molestiae qui voluptatem voluptatum vel culpa explicabo et quia ratione eos libero maxime est explicabo voluptatem. Et internos tempore est consequuntur enim rem illo libero et incidunt autem. Rem voluptatem dolores et adipisci enim ex accusantium quia et repellendus facere et repudiandae magni est eveniet dolorum.Et corrupti voluptas eum repellendus neque sit aliquid omnis et iste quasi aut aperiam neque ut veritatis facere. 33 enim nihil est aspernatur consectetur vel dolor ipsa id ipsam eveniet aut dicta vero! Non consequatur rerum nam quasi neque eos galisum soluta ab iste alias in quos inventore aut omnis officia. In fuga dolores est rerum illo sit eligendi quis ut officiis blanditiis sed aliquid laborum ab sint voluptatibus.Ut sapiente accusantium et neque sunt et eveniet architecto et neque consequuntur et fugiat magni vel adipisci internos? Sed architecto dolorem et inventore vitae qui illo consequatur qui nostrum consequatur est voluptatibus sapiente et omnis explicabo vel optio reiciendis. In blanditiis quia ut officiis ducimus est fuga dicta et cumque optio. Ea laboriosam minima est quod suscipit qui iure voluptate aut dignissimos autem ut omnis dolores id omnis fugit cum ipsa nisi.' },
    { id: 5, updated: false, title: 'Blog Post 5', summary: 'Summary of blog post 5', author: 'Author 5', date: '02-03-2024', content: 'Lorem ipsum dolor sit amet. A soluta mollitia et quis molestiae qui voluptatem voluptatum vel culpa explicabo et quia ratione eos libero maxime est explicabo voluptatem. Et internos tempore est consequuntur enim rem illo libero et incidunt autem. Rem voluptatem dolores et adipisci enim ex accusantium quia et repellendus facere et repudiandae magni est eveniet dolorum.Et corrupti voluptas eum repellendus neque sit aliquid omnis et iste quasi aut aperiam neque ut veritatis facere. 33 enim nihil est aspernatur consectetur vel dolor ipsa id ipsam eveniet aut dicta vero! Non consequatur rerum nam quasi neque eos galisum soluta ab iste alias in quos inventore aut omnis officia. In fuga dolores est rerum illo sit eligendi quis ut officiis blanditiis sed aliquid laborum ab sint voluptatibus.Ut sapiente accusantium et neque sunt et eveniet architecto et neque consequuntur et fugiat magni vel adipisci internos? Sed architecto dolorem et inventore vitae qui illo consequatur qui nostrum consequatur est voluptatibus sapiente et omnis explicabo vel optio reiciendis. In blanditiis quia ut officiis ducimus est fuga dicta et cumque optio. Ea laboriosam minima est quod suscipit qui iure voluptate aut dignissimos autem ut omnis dolores id omnis fugit cum ipsa nisi.' },
    { id: 6, updated: false, title: 'Blog Post 6', summary: 'Summary of blog post 6', author: 'Author 6', date: '02-03-2024', content: 'lorem40' },
    { id: 7, updated: false, title: 'Blog Post 7', summary: 'Summary of blog post 7', author: 'Author 7', date: '02-03-2024', content: 'lorem40' },
    { id: 8, updated: false, title: 'Blog Post 8', summary: 'Summary of blog post 8', author: 'Author 8', date: '02-03-2024', content: 'lorem40' },
    { id: 9, updated: false, title: 'Blog Post 9', summary: 'Summary of blog post 9', author: 'Author 9', date: '02-03-2024', content: 'lorem40' },
    { id: 10, updated: false, title: 'Blog Post 10', summary: 'Summary of blog post 10', author: 'Author 10', date: '02-03-2024', content: 'lorem40' },
    { id: 11, updated: false, title: 'Blog Post 11', summary: 'Summary of blog post 11', author: 'Author 11', date: '02-03-2024', content: 'lorem40' }
]

var currentId = 12;

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