import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { API_URI } from '../lib/constants';
import '../styles/globals.css';

const client = new ApolloClient({
  uri: API_URI,
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
