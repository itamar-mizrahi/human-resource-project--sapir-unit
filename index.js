const express = require('express')
const bodyParser = require('body-parser')

const db = require('./queries')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })


app.get('/users', db.getTask)
app.get('/users/:id', db.getFixed)
app.get('/users/unit', db.getStartDate)
app.get('/users/rank', db.getEndDate)
app.get('/users/group', db.getGroupById)
app.get('/users/startDate', db.getStartDateById)
app.get('/user/serviceType', db.getServiceTypeById)
app.get('/user/active', db.getActiveById)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })