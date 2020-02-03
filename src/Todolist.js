import React from "react";

const Todolist = props =>
  props.list.map((item, i) => (
    <div key={i} className="todo">
      <input
        type="submit"
        key={i}
        className="complete"
        value={item.isComplete ? "Undo" : "Complete"}
        onClick={() => props.done(i)}
      />
      <input
        type="submit"
        key={i}
        className="remove"
        value="Delete"
        onClick={() => props.remove(i)}
      />
      <span className={item.isComplete ? "done" : ""}>{item.text}</span>
    </div>
  ));
export default Todolist;
