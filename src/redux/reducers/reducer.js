function listItems(state, action) {
  if (state === undefined) return [];
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "GetData":
      return [...action.payload];
    case "Remove":
      let filteredData = state.filter((q) => q.id != action.payload.id);
      return [...filteredData];
    default:
      return state;
  }
}

export default listItems;
