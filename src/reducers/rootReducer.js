const initState = {
  posts: [
    { id: "1", title: "Toyota", body: "Most reliable vehicle in the market" },
    {
      id: "2",
      title: "Peugeot",
      body: "Most comfortable vehicle in the market",
    },
    {
      id: "3",
      title: "Mercedez",
      body: "Most expensive vehicle in the market",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      let posts = state.posts.filter((post) => {
        return post.id !== action.id;
      });
      return {
        ...state,
        posts,
      };
    default:
      return state;
  }
};

export default rootReducer;
