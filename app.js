const express = require('express')
const path = require('path')
const CurriculoController = require('./controllers/curriculo-controller')
const indexRoute = require('./routes/index.js')
const curriculoRoute = require('./routes/curriculo')

const port = 3000
const app = express()

// Setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', indexRoute);
app.get('/curriculo', curriculoRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, err => {
    console.log(`Server is listening on ${port}`)
})