var express = require('express'),
	ejs = require('ejs'),
	bodyParser = require('body-parser'),
	app = express();


var articles = [];

app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');

//Site related routes:

// get / serve the homepage of your site.
app.get('/', function(req, res) {
	res.render('site/index', {articles: articles});
})

// // get /about serve a static about daily planet page.
app.get('/about', function(req, res) {
	res.render('site/about');
})
// // get /contact serve a static contact page.
app.get('/contact', function(req, res) {
	res.render('site/contact');
})

// // Article routes:
// // get /articles to display a summary each article.
app.get('/articles', function(req, res) {
	res.render('articles/articles', {articles: articles})
})

// // get /articles/new to get a form to save a new article
app.get('/articles/new', function(req, res) {
	res.render('articles/new');
})

// // post /articles to save an article
app.post('/articles', function(req, res) {
	console.log(req.body.article);
	books.push(req.body.article);
	console.log(articles)
	res.redirect('/articles');
})

// // get /articles/:id to find an article by id in the array of articles and display it.
app.get('/articles/:id', function(req, res) {
	var index = req.params.id;
	var article = articles[index]
	res.render('index', {article:article})
})



app.listen(3000, function() {
	console.log("SERVER STARTED on localhost")
});