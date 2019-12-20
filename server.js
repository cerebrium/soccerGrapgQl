const express = require(express);
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const graphql = require('./schemas/graphql')

const app = express();

mongoose.connect('mongodb://127.0.0.1/soccerGraphQl', {useNewUrlParser: true, useFindAndModify: true})
const db = mongoose.connection;

db.once('open', console.log('Database is up and connected'))
db.on('error', err => {
    console.log('There was an error creating database: ', err)
})

app.use('/players', graphqlHTTP({
    graphql,
    graphiql: true
}))

app.listen(3001, () => {
    console.log('server listening at port 3001')
})