import {connect} from 'react-redux';
import {receiveOnePokemon, requestOnePokemon} from '../../actions/pokemon_actions';
import {selectItems, selectOneItem} from '../../reducers/selectors';

// Presentational Page
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    item: selectOneItem(state, ownProps.match.params.itemId)
    // loading: state.ui.loading
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
)(ItemDetail);
