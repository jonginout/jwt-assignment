const express = require('express')
const app = express()
const config = require('./config')
const port = config.port
const bodyParser = require('body-parser')
const session = require('express-session')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('jwt-secret', config.secret)
app.use(session({
	secret: config.secret,
	resave: false,
	saveUninitialized: true,
}));

app.use('/api', require('./routes/api'))

app.use((err, req, res, next) => {
    if(err) res.status(err.status || 500);
    res.json({
      success : false,
      message: err.message,
      error: err
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
