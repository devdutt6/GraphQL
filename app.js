const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
// var { buildSchema } = require('graphql');
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

const app = express();
// var root = { hello: () => 'Hello world!' };

app.post('/graphql',graphqlHTTP({
    schema,
    // rootValue: root,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server Up & running on 4000');
})