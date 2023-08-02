import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
  fromPromise,
} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';

const client = new ApolloClient({
  uri: 'https://myctrstore.myshopify.com/api/graphql',
  headers: {
    'X-Shopify-Storefront-Access-Token': 'X-SHOPIFY-STOREFRONT-ACCESS-TOKEN',
  },
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};
export default App;
