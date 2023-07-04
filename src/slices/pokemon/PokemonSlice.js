import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false
}

export const PokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemon: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page
            state.pokemons = action.payload.pokemons
        }
    }

})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemon } = PokemonSlice.actions

export default PokemonSlice.reducer