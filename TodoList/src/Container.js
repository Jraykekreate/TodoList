import { TodoListContainer } from "./TodoListContainer";
import { TodoToggle } from "./TodoToggle";
import { useState } from "react";

export function Container(params) {
  const [Checked, setChecked] = useState(false);
  const [TodoArray, setTodoArray] = useState([
    { Text: "test", Checked: Checked },
  ]);
  const [TodoText, setTodoText] = useState({
    Text: "",
    Checked: Checked,
  });
  return (
    <div
      className="w-full  h-screen bg-[#161721] "
      style={{ fontFamily: "Josefin Sans", fontSize: "16px" }}
    >
      <div className=" flex flex-col mx-auto  ">
        <div className="bg-bgMobileDark  w-full  bg-cover h-[25vh]">
          <TodoToggle
            TodoText={TodoText}
            setTodoText={setTodoText}
            TodoArray={TodoArray}
            setTodoArray={setTodoArray}
            Checked={Checked}
            setChecked={setChecked}
          />
        </div>
        <div className="container relative bg-[#161721] mx-auto max-w-2xl w-full h-[75vh]">
          <TodoListContainer
            TodoText={TodoText}
            setTodoText={setTodoText}
            TodoArray={TodoArray}
            setTodoArray={setTodoArray}
          ></TodoListContainer>
        </div>
      </div>
    </div>
  );
}
