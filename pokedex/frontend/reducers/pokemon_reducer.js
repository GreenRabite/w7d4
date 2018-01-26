import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from "../actions/pokemon_actions";
import { merge } from "lodash";

const pokemonReducer = (state = {}, action)=>{
  let newState = {};
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
    // first argument - what we are merging into second: subjects
    //of what your merging third: subjects of what overlaps
    // there is a more preferred way if mult ppl can alter the state
    // (return action.pokemon)
      newState = merge( {}, state, action.pokemon );
      return newState;
    case RECEIVE_ONE_POKEMON:
      newState = merge( {}, state );
      let pokemon = action.poke.pokemon;
      newState[pokemon.id] = pokemon;

      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
