import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from './containers/PokemonsContainer';
import './App.css';
import './containers/pokecontainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app'
  });

  return (
    // <div className="shapeBox " style={{width:'100%',display:'flex',justifyContent:'center'}}>
       <ApolloProvider client={client} >
      <PokemonsContainer />
    </ApolloProvider>
    
    // </div>
      
    
  );
}

export default App;
