import {connect} from 'react-redux';
import {receiveOnePokemon, requestOnePokemon} from '../../actions/pokemon_actions';
import {selectOnePokemon, selectItems} from '../../reducers/selectors';

// Presentational Page
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  const pokemon = selectOnePokemon(state, ownProps.match.params.pokemonId);
  const items = selectItems(state);

  return {
    pokemon,
    items,
    loading: state.ui.loading,
    // items: pokemon && pokemon.itemIds && pokemon.itemIds.map(id => state.entities.items[id])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestOnePokemon: () => dispatch(
    requestOnePokemon(ownProps.match.params.pokemonId)
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
