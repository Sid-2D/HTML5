function push() {
  history.pushState(
    {state:1, rand:Math.random()}, 
    "State 1", 
    "?state=1"
  ); // logs {state:1,rand:"some random value"}, "State 1", "?state=1""
}