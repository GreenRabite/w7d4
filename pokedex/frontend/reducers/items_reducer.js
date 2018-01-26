import { RECEIVE_ONE_POKEMON } from "../actions/pokemon_actions";
import { merge } from "lodash";

const itemReducer = (state = {}, action)=>{
  let newState={};
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      newState = merge( {}, state, action.poke.items );
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default itemReducer;
