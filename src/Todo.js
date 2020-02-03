// import React from "react";
// import "./App.css";
// let todoItems = [];

// function Todo(text) {
//   const todo = {
//     text,
//     checked: false,
//     id: Date.now()
//   };

//   todoItems.push(todo);

//   const list = document.querySelector(".js-todo-list");
//   list.insertAdjacentHTML(
//     "beforeend",
//     `
//     <li class="todo-item" data-key="${todo.id}">
//       <input id="${todo.id}" type="checkbox"/>
//       <button for="${todo.id}" class="tick js-tick">Complete</button>
//       <button class="delete-todo js-delete-todo">
//         Delete
//       </button>
//       <span>${todo.text}</span>

//     </li>
//   `
//   );
// }

// const inputx = document.getElementById("add");
// inputx.addEventListener("click", event => {
//   event.preventDefault();
//   const input = document.querySelector(".js-todo-input");

//   const text = input.value.trim();
//   if (text !== "") {
//     Todo(text);
//     input.value = "";
//     input.focus();
//   }
// });

// function toggleDone(key) {
//   const index = todoItems.findIndex(item => item.id === Number(key));
//   todoItems[index].checked = !todoItems[index].checked;

//   const item = document.querySelector(`[data-key='${key}']`);
//   if (todoItems[index].checked) {
//     item.classList.add("done");
//   } else {
//     item.classList.remove("done");
//   }
// }

// function deleteTodo(key) {
//   todoItems = todoItems.filter(item => item.id !== Number(key));
//   const item = document.querySelector(`[data-key='${key}']`);
//   item.remove();
// }

// const form = document.querySelector(".js-form");
// form.addEventListener("submit", event => {
//   event.preventDefault();
//   const input = document.querySelector(".js-todo-input");

//   const text = input.value.trim();
//   if (text !== "") {
//     Todo(text);
//     input.value = "";
//     input.focus();
//   }
// });

// const list = document.querySelector(".js-todo-list");
// list.addEventListener("click", event => {
//   if (event.target.classList.contains("js-tick")) {
//     const itemKey = event.target.parentElement.dataset.key;
//     toggleDone(itemKey);
//   }

//   if (event.target.classList.contains("js-delete-todo")) {
//     const itemKey = event.target.parentElement.dataset.key;
//     deleteTodo(itemKey);
//   }
// });
// export default Todo;
import React from "react";
import "./App.css";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

// Remove(e) {
//     var item= document.getElementsByClassName('js-todo-list');
//     item.remove();
// }
// Done(e) {
//      const done =document.getElementById("done")
//      const tasks = document.getElementById("tasks")
//      if(done.value=="Complete"){
//    done.value="Undo"
//    tasks.style={textDecoration:lineThrough}
// } else{ done.value=="Complete"}
//
// }
// const Todo = () => {
//   let input = document.getElementById("addTasks");
//   return (
//     <div>
//       <ul className="todo-list js-todo-list">
//         <li>
//           <input id="done" type="submit" value="Complete" onClick="Done" />
//           <button onClick="Remove">Delete</button>
//           <span id="tasks">input.value.trim()</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Todo;
