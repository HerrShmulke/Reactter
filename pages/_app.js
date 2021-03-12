import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from 'apollo-link-ws';
import { API_URI, WS_URI } from '../lib/constants';
import '../styles/globals.css';

const wsLink = process.browser
  ? new WebSocketLink({
      uri: WS_URI,
      options: {
        reconnect: true,
      },
    })
  : null;

const httpLink = new HttpLink({
  uri: API_URI,
});

const link = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      wsLink,
      httpLink
    )
  : null;

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  credentials: 'same-origin',
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
