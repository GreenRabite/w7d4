export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectOnePokemon = (state, id) => {
  return state.entities.pokemon[id];
};

export const selectItems = (state) => {
  return Object.values(state.entities.items);
};

export const selectOneItem = (state, id) => {
  return state.entities.items[id];
};
