import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//import pages
import OutPractice from './pages/OutPractice'
import Home from './pages/Home'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// commenting out to try and get heroku deployment
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   ssrMode: true,
//   // Instead of "createHttpLink" use SchemaLink here
//   link: new SchemaLink({ schema }),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Routes>
                <Route exact = 'true' path = '/play' element = {
                  <div>
                    < OutPractice />
                  </div>
                }>
                </Route>
                <Route exact = 'true' path = '/' element = {
                  <div>
                    < Home />
                  </div>
                }>
                </Route>
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
