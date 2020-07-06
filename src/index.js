const express = require("express")
require('./db/mongoose')
const UserRoutes = require('./routers/userRoutes')
const TaskRoutes = require('./routers/taskRoutes')

app = express()
const port = process.env.PORT


app.use(express.json())
app.use('/', UserRoutes)
app.use('/', TaskRoutes)


app.listen(port, () => {
    console.log("Server is running on port " + port)
})