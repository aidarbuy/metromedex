export default (state = { open:false }, action) => {
  var newState;

  switch (action.type) {
    case 'TOGGLE_LEFTNAV':
      newState = {
        ...state, 
        open: !state.open
      }
      return newState;

    case 'CLOSE_LEFTNAV':
      newState = {
        ...state, 
        open: false
      }
      return newState;

    default:
      return state;
  }
};