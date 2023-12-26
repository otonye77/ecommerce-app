const { ApolloServer } = require("@apollo/server");
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const graph = new ApolloServer({
    typeDefs,
    resolvers
});

module.exports = {
    graph
};
