import React from 'react';
import { Link } from 'react-router-dom';


class PokemonIndexItem extends React.Component{
  render(){
    const{poke} = this.props;
    // console.log(id);
    // console.log(poke);
    return (
      <li className="pokemon-list-item">
        <Link to={`/pokemon/${poke.id}`}>
          <img src={poke.image_url}></img>
          <p>{poke.name}</p>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
