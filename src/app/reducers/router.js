// src/app/reducers/router.js

export default (state = {route:'/'}, action) => {
  switch (action.type) {
    case "UPDATE_ROUTE":
      // console.info('Case "UPDATE_ROUTE"');
      const nextState = {
        ...state,
        route: action.route
      };
      return nextState;

    default:
      return state
  }
};