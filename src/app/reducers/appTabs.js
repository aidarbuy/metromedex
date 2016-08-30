export default (state = {index:0}, action) => {
  switch (action.type) {
    case 'UPDATE_INDEX':
      const newState = {
        ...state, 
        index: action.index,
      }
      return newState;

    default:
      return state;
  }
};