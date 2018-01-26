import React from 'react';
import {Link, Route} from 'react-router-dom';

// Components
import ItemDetailContainer from './item_detail_container';


class PokemonDetail extends React.Component {

// ========================================
// Methods
// ========================================

  componentDidMount() {
    // console.log(this.props);
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    debugger;
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      debugger;
      newProps.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

// ========================================
// Render
// ========================================

  renderItem(pokemon, item, id) {
    // console.log(item);
    return (
      <li key={id}>
        <Link to={`/pokemon/${pokemon.id}/items/${item.id}`}>
          <h1>{item.name}</h1>
        </Link>
      </li>
    );
  }

  renderItems(pokemon, items) {
    return items.map((item, id) => (
      this.renderItem(pokemon, item, id)
    ));
  }

  render() {
    const poke_id = this.props.match.params.pokemonId;
    const {pokemon} = this.props;
    const {items} = this.props;
    console.log(this.props);
    // debugger
    if (this.props.loading || pokemon === undefined) {
      // debugger
      return null;
    }
    // console.log(this.props);
    return (
      <div className="pokemon-details-container">
        <img src={pokemon.image_url}></img>
        <div>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.poke_type}</p>
          <ul className="items-list">{this.renderItems(pokemon, items)}</ul>
          <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer}/>
        </div>
      </div>
    );
  }

}

export default PokemonDetail;
