export const todoReducer = (initialStae, action) => {
  switch (action.type) {
    case "[TODO] add todo":
      return [...initialStae, action.payload];
    case "[TODO] remove todo":
      return initialStae.filter((todo) => todo.id !== action.payload);
    case "[TODO] toggle todo":
      return initialStae.map(todo => {
        if(todo.id === action.payload){
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo
      })
    default:
      return initialStae;
  }
};
