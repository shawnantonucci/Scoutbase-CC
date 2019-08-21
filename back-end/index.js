const { ApolloServer, gql } = require("apollo-server");

const movies = [
    {
        title: "The Lion King",
        year: 2019,
        rating: 7.1,
        actors: [
            {
                name: "Chiwetel Ejiofor",
                birthday: "July 10, 1977",
                country: "London",
                directors: [
                    {
                        name: "Jon Favreau",
                        birthday: "October 19, 1966",
                        country: "USA"
                    }
                ]
            }
        ]
    },
    {
        title: "47 Meters Down: Uncaged",
        year: 2019,
        rating: 5.3,
        actors: [
            {
                name: "Sophie Nélisse",
                birthday: "March 27, 2000",
                country: "Canada",
                directors: [
                    {
                        name: "Johannes Roberts",
                        birthday: "May 24, 1976",
                        country: "UK"
                    }
                ]
            }
        ]
    }
];

const typeDefs = gql`
    type Movie {
        title: String
        year: Int
        rating: Float
        actors: [Actor]
    }

    type Actor {
        name: String
        birthday: String
        country: String
        directors: [Director]
    }

    type Director {
        name: String
        birthday: String
        country: String
    }

    type Query {
        movies: [Movie]
    }
`;

const resolvers = {
    Query: {
        movies: () => movies
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
