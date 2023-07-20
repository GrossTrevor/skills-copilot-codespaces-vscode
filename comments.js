// Create web server
// 1. Load modules
const express = require('express');
const data = require('./data');
const app = express();
const port = 3000;

// 2. Set up the template engine
app.set('view engine', 'pug');

// 3. Set up the static files
app.use('/static', express.static('public'));

// 4. Set up the routes
// Home page
app.get('/', (req, res) => {
    res.render('index', { posts: data.posts });
});

// About page
app.get('/about', (req, res) => {
    res.render('about');
});

// Single post page
app.get('/post/:id', (req, res) => {
    const post = data.posts[req.params.id];
    res.render('post', { post: post });
});

// 5. Listen for requests
app.listen(port, () => console.log(`Listening on port ${port}`));