const express = require('express');
const exphbs = require('express-handlebars');
const generatePassword = require('./generate_password');
const app = express();
const port = 3000;

//template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//bodyParser is deprecated
app.use(express.urlencoded({extended: true})); 
app.use(express.json());



//localhost:
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const options = req.body
    const password = generatePassword(options)
    res.render('index', { password: password, options: options})
})

app.listen(port, () => {
    console.log(`server is now running on localhost:${port}`)
})