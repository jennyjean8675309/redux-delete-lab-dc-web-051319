export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.random()*10000000000000000,
        name: action.name
      }
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      console.log('deleting this band', action.id)
      let filteredBands = state.bands.filter( band => band.id !== action.id)
      return {...state, bands: filteredBands}
    default:
      return state;
  }
};
