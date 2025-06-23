type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

let state = 0;

console.log("Initial state:", state);

state = reducer(state, { type: "increment" });
console.log("After increment:", state);
