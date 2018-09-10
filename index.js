const helmet = require("helmet")
const express = require("express")


///////////////////////////////////////////////////////////
//  Initialize Express and configure Middleware
///////////////////////////////////////////////////////////
const app = express()
app.set("port", process.env.PORT || 3000)

app.use(helmet())


///////////////////////////////////////////////////////////
//  Start Express Server
///////////////////////////////////////////////////////////
const server = app.listen(app.get("port"), () => {
    const {port, address, } = server.address()
    console.info(`Express server started on ${address}:${port}`)
  })