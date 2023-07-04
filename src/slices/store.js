import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from './counter/counterSlice'
import {PokemonSlice} from './pokemon/PokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: PokemonSlice.reducer,
  },
})


