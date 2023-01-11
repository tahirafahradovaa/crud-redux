function favorites(state, action) {
  if (state === undefined) return [];
  switch (action.type) {
    case "FAVORITE":
      return [...state, action.payload];
    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export default favorites;
