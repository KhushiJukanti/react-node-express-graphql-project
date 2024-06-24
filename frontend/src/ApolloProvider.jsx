import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client"

const client = new ApolloClient({
    uri: 'http://localhost:7000/graphql',
    cache: new InMemoryCache(),
})


const ApolloWrapper = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}


export default ApolloWrapper