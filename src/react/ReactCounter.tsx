import { useOvermind } from "./useOvermind";
import React from "react";
import { action } from "overmind";
import { getActionPaths } from "overmind/lib/utils";

function ReactCounter() {
  const {
    state: { counter },
    actions: { increment, decrement }
  } = useOvermind();

  return (
    <div>
      <h3>React Counter {counter}</h3>
      <button onClick={() => increment()}>+</button>
      <span> {counter} </span>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}

export default ReactCounter