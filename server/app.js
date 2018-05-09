const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`NOW LISTENING FOR REQUESTS ON PORT: ${PORT}`)
})