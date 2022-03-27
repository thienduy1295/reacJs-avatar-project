import React from "react";

function Tab({ state, action, number, name }) {
  return (
    <div
      className={`${state === number ? "tab active-tab" : "tab"}`}
      onClick={() => action(number)}
    >
      {name}
    </div>
  );
}

export default Tab;
