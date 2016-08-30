export default (state={toggled:false}, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newState = {
        ...state, 
        toggled: action.toggled,
      }
      // console.log(newState);
      return newState;

    default:
      return state;
  }
};