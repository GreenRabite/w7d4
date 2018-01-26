export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    type: 'json'
  })
);

export const getOnePokemon = (pokemonId) =>(
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${pokemonId}`,
    type: 'json'
  })
);

export const getOneItem = (itemId) =>(
  $.ajax({
    method: 'GET',
    url: `api/items/${itemId}`,
    type: 'json'
  })
);

export const fetchAllItems = () =>(
  $.ajax({
    method: 'GET',
    url: `api/items`,
    type: 'json'
  })
);
