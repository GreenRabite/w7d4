
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';



class PokemonIndex extends React.Component {

// ========================================
// Methods
// ========================================

  componentDidMount() {
    this.props.requestAllPokemon();
  }

// ========================================
// Render
// ========================================

  renderPokemonListItem(poke, id) {
    return <PokemonIndexItem poke={poke} key={id}/>;
  }

  renderPokemonList(pokemon) {
    return (
      pokemon.map((poke, id) => (
        this.renderPokemonListItem(poke, id)
      ))
    );
  }

  render() {
    const {pokemon} = this.props;

    if (!pokemon) return null;
    
    return (
      <div className="pokemon-index-container">
        <ul className="pokemon-list">
          {this.renderPokemonList(pokemon)}
        </ul>
        <Route path="/pokemon/:pokemonId" component = { PokemonDetailContainer }/>
      </div>
    );
  }
}

export default PokemonIndex;
