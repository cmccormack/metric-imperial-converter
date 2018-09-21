const path = require("path")
const helmet = require("helmet")
const express = require("express")


///////////////////////////////////////////////////////////
//  Initialize Express and configure Middleware
///////////////////////////////////////////////////////////
const app = express()
app.set("port", process.env.PORT || 3000)

app.use(helmet())

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.resolve(__dirname, "views")))

require('./routes/routes.js')(app)

///////////////////////////////////////////////////////////
//  Start Express Server
///////////////////////////////////////////////////////////
const server = app.listen(app.get("port"), () => {
    const {port, address, } = server.address()
    console.info(`Express server started on ${address}:${port}`)
  })