import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './slices/pokemon/thunks';

export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPokemons())
    }, [])
    

    const { pokemons, page, isLoading } = useSelector(state => state.pokemons)
  return (
    <>
        <h1>PokemonApp</h1>
        <hr />

        <span>Loading: {isLoading ? 'True' : 'False'}</span>

        <ul>
            {
                pokemons.map( (item) => (
                    <li key={item.name}>{item.name}</li>
                ))
            }
            
        </ul>

        <button
            disabled = {isLoading}
            onClick={() => dispatch(getPokemons(page))}
        >
            Next
        </button>

    </>
  )
}
