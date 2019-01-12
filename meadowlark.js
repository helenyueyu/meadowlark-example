let express = require('express')
let app = express()

// Set up handlebars view engine
let handlebars = require('express-handlebars')
  .create({defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/about', (req, res) => {
  res.render('about')
})

app.use((req,res, next) => {
  res.status(404)
  res.render('404')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500)
  res.send('500')
})

app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' + app.get('port'))
})