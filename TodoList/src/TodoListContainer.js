import { TodoListItem } from "./TodoListItem";

export function TodoListContainer({ TodoArray }) {
  return (
    <>
      <ul className="relative p-4 rounded-xl md:rounded-none  bottom-[24px] mb-0 flex flex-col bg-[#25263c] items-center shadow-2xl text-[#cccee5]">
        {TodoArray.map((TodoItem, i) => {
          return (
            <TodoListItem checked={TodoItem.checked} key={i} num={i}>
              {TodoItem.Text}
            </TodoListItem>
          );
        })}
      </ul>
      <div className="relative rounded-xl md:rounded-none md:bottom-12 w-full shadow-2xl text-sm  bg-[#25263c] text-[#cccee5] p-4  flex flex-row justify-evenly">
        <div>5 items left</div>
        <div className="flex  space-x-2">
          <span>All</span>
          <span>Active</span>
          <span>Complement</span>
        </div>
        <div>Clear Completed</div>
      </div>
    </>
  );
}
