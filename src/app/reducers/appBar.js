const initState = {
	title: "Metromed Urgent Care",
	index: 1,
};

export default (state=initState, action) => {
  switch (action.type) {
    case 'UPDATE_APPBARTITLE':
      const newState = {
        ...state, 
        title: action.title,
        index: action.index,
      }
      // console.log(newState);
      return newState;

    default:
      return state;
  }
};