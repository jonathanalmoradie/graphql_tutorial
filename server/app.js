const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//allow cross-origin requests
app.use(cors())

//connect to mongoDB Atlas
mongoose.connect(
  'mongodb+srv://jon:test123@graphql-tutorial.aennc.mongodb.net/graphql-tutorial?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.log('Error: ', err.message))


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Listening on port 4000')
})