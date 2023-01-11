// export const add = (item) => {
//   return {
//     type: "ADD",
//     payload: item,
//   };
// };

// export const remove = (item) => {
//   return {
//     type: "REMOVE",
//     payload: item,
//   };
// };

// export const listActions = {
//   add: (payload) => {
//     return {
//       type: "ADD",
//       payload: payload,
//     };
//   },
//   getAll: () => {
//     return [];
//   },
// };

export const listActions = {
  add: (payload) => {
    return {
      type: "ADD_TODO",
      payload: payload,
    };
  },
  getAll: () => {
    return async (dispatch) => {
      fetch("https://northwind.vercel.app/api/customers")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "GetData", payload: data });
        });
    };
  },
  remove: () => {
    return async (dispatch) => {
      fetch("https://northwind.vercel.app/api/customers");
    };
  },
};
