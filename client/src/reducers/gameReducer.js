const INITIAL_STATE = {
  player: {},
  board: [
    ["X", "r", "X", "r", "X", "r", "X", "r"],
    ["r", "X", "r", "X", "r", "X", "r", "X"],
    ["X", "r", "X", "r", "X", "r", "X", "r"],
    ["o", "X", "o", "X", "o", "X", "o", "X"],
    ["X", "o", "X", "o", "X", "o", "X", "o"],
    ["w", "X", "w", "X", "w", "X", "w", "X"],
    ["X", "w", "X", "w", "X", "w", "X", "w"],
    ["w", "X", "w", "X", "w", "X", "w", "X"],
  ],
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default gameReducer;
