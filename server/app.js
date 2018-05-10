const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = 4000

// Allow cross origin requests
app.use(cors())

// Connect to mLab database
mongoose.connect('mongodb://rick:Harry123@ds219040.mlab.com:19040/graphql-tut')
mongoose.connection.once('open', () => console.log("CONNECTED TO DATABASE"))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`NOW LISTENING FOR REQUESTS ON PORT: ${PORT}`)
})