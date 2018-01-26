export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';
import { fetchAllPokemon, getOnePokemon } from '../util/api_util';
import { setLoading, setNotLoading} from './ui_actions';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveOnePokemon = poke => ({
  type: RECEIVE_ONE_POKEMON,
  poke
});

export const requestAllPokemon = () => (dispatch) => {
  dispatch(setLoading());
  return fetchAllPokemon().then(pokemon => {
    dispatch(setNotLoading());
    dispatch(receiveAllPokemon(pokemon));
  });
};

export const requestOnePokemon = (id) => (dispatch) => {
  dispatch(setLoading());
  return getOnePokemon(id).then(poke => {
    dispatch(setNotLoading());
    dispatch(receiveOnePokemon(poke));
  });
};
