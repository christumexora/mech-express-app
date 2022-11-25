const express = require('express')
const app = express()
const port = 3000

const v1UserRouter = require("./v1/routes/userRoutes");


// app.get('/', (req, res) => {
//     res.status(200).json({
//         'status': 'success',
//         'message': 'Hello World!'})
// })

app.use("/api/v1/users", v1UserRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})