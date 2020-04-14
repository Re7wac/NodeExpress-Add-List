const express = require('express');
// const path = require('path');
const exphbs = require('express-handlebars');
const fs = require('fs')
// const logger = require('./middleware/logger');
const members = require('./Members');
const books = require('./Books')

const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/api/books', require('./routes/api/books'))




// Homepage Route
app.get('/', (req, res) => {
  // read home.HTML
  fs.readFile('./pages/home.txt', (error, data) => {
    if (error) throw error
    res.render('index', {
      title: 'Member App',
      footer: 'RE7',
      nav: [{ pageName: "Home", href: "/" }, { pageName: "About", href: "/about" }, { pageName: "service", href: "/service" }],
      members,
      content: { title: "Home", text: data },
      home: true
    })
  })

}
);

app.get('/about', (req, res) =>
  // read home.HTML
  fs.readFile('./pages/about.txt', (error, data) => {
    if (error) throw error
    res.render('index', {
      title: 'About',
      footer: 'RE7',
      nav: [{ pageName: "Home", href: "/" }, { pageName: "About", href: "/about" }, { pageName: "service", href: "/service" }],
      content: { title: "About", text: data },
      about: true,
      books
    })
  })


);

app.get('/service', (req, res) =>
  // read home.HTML
  fs.readFile('./pages/service.txt', (error, data) => {
    if (error) throw error
    res.render('index', {
      title: 'Services',
      footer: 'RE7',
      nav: [{ pageName: "Home", href: "/" }, { pageName: "About", href: "/about" }, { pageName: "service", href: "/service" }],
      content: { title: "Service", text: data },
      service: { n: "M" }
    })
  })

);
// app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
