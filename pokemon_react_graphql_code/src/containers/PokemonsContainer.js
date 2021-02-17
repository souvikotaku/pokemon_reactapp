import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
// import { Pokemon } from '../components/Pokemon';
import './pokecontainer.css'


export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 13 },
  });

  return (
    <div>
      {pokemons && pokemons.map(pokemon =>
        //  <Pokemon  key={pokemon.id} pokemon={pokemon} />
          {
            return (
              <div className="row shapeBox" style={{display:'flex',justifyContent:'center'}}>
               <div 
               style={{padding:'10px'}}
                className='image-container d-flex justify-content-start'
                >
                <img  style={{ width:'100%',borderRadius:'10px'}} src={pokemon.image} alt='no movie found'/>
                <div className='overlay  '>
               
                <p style={{color:'white'}}>{pokemon.name}</p>
                <button className='btn btn-sm btn-success'>Read more</button>
                </div>
              </div>
              </div>
              
            )
          }
         )}
    </div>
  )
}