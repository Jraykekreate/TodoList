import { AddTodo } from "./AddTodo";
import sun from "./icon-sun.svg";

export function TodoToggle({
  TodoText,
  setTodoText,
  TodoArray,
  setTodoArray,
  Checked,
  setChecked,
}) {
  return (
    <div className="mx-auto container max-w-2xl  p-8 flex flex-col gap-2">
      <div className="flex  justify-between ">
        <h2 className="font-extrabold tracking-widest text-white text-4xl">
          Todo
        </h2>
        <img className="p-2" alt="sun" src={sun}></img>
      </div>
      <div>
        <AddTodo
          TodoText={TodoText}
          TodoArray={TodoArray}
          setTodoText={setTodoText}
          setTodoArray={setTodoArray}
          setChecked={setChecked}
          Checked={Checked}
        ></AddTodo>
      </div>
    </div>
  );
}
