const graphql = require('graphql');
// const _ = require('loadash');
const { GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID } = graphql;

var books = [
    { id: "1",name: "devdutt",genre: "fantasy" },
    { id: "2",name: "chirayu",genre: "thriller" },
    { id: "3",name: "badrik",genre: "action" }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => (
        {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
        }
    )
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return books.filter(bookq => bookq.id===args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})