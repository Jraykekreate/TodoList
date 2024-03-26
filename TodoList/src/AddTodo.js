import { CheckBox } from "./CheckBox";
import { useState } from "react";

function AddTodo({
  TodoText,
  setTodoText,
  TodoArray,
  setTodoArray,
  setChecked,
  Checked,
}) {
  function AddSomeThing(e) {
    e.preventDefault();
    setTodoArray((TodoArray) => {
      return [TodoText, ...TodoArray];
    });
    setTodoText({
      Text: "",
      Checked: setChecked(false),
    });
    console.log(TodoArray);
  }
  function RemoveTodo(e) {}

  return (
    <div className="flex flex-row">
      <CheckBox setChecked={setChecked} Checked={Checked}></CheckBox>
      <InputBar
        setTodoText={setTodoText}
        AddSomeThing={AddSomeThing}
        TodoText={TodoText}
        Checked={Checked}
      ></InputBar>
    </div>
  );
}

function InputBar({ AddSomeThing, TodoText, setTodoText, Checked }) {
  return (
    <form className="w-full" onSubmit={AddSomeThing}>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#161721] text-[#cccee5] leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Add a ToDo😉"
        value={TodoText.Text}
        onChange={(e) =>
          setTodoText({
            Text: e.target.value,
            Checked: Checked,
          })
        }
      ></input>
    </form>
  );
}

export { AddTodo };
