console.log("EEEh Weee soy el script index")
const express = require('express')
const app = express()

const morgan = require('morgan')

//settings
app.set('port', 8080)

//middlewares
app.use(morgan('dev'));
app.use(express.json());//esto permite leer json

//routes
app.use(require('./routes/index.js'));

//iniciando el Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
