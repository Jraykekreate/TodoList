import sun from "./icon-sun.svg";

function App() {
  return (
    <>
      <Container></Container>
    </>
  );
}

function Container(params) {
  return (
    <div
      className="w-full  h-screen bg-[#161721] "
      style={{ fontFamily: "Josefin Sans", fontSize: "16px" }}
    >
      <div className=" flex flex-col mx-auto  ">
        <div className="bg-bgMobileDark  w-full  bg-cover h-[25vh]">
          <TodoToggle />
        </div>
        <div className="container relative bg-[#161721] mx-auto max-w-2xl w-full h-[75vh]">
          <TodoListContainer></TodoListContainer>
        </div>
      </div>
    </div>
  );
}

function TodoListContainer(params) {
  return (
    <>
      <ul className="relative p-4 rounded-xl md:rounded-none  bottom-[24px] mb-0 flex flex-col bg-[#25263c] items-center shadow-2xl text-[#cccee5]">
        <TodoListItem></TodoListItem>
        <TodoListItem></TodoListItem>
        <TodoListItem></TodoListItem>
        <TodoListItem></TodoListItem>
        <TodoListItem></TodoListItem>
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
function TodoListItem(params) {
  return (
    <li className="w-full flex items-center p-2 border-b-4 border-indigo-500">
      <CheckBox></CheckBox>
      <span>Go For a walk</span>
    </li>
  );
}

function TodoToggle(params) {
  return (
    <div className="mx-auto container max-w-2xl  p-8 flex flex-col gap-2">
      <div className="flex  justify-between ">
        <h2 className="font-extrabold tracking-widest text-white text-4xl">
          Todo
        </h2>
        <img className="p-2" alt="sun" src={sun}></img>
      </div>
      <div>
        <AddTodo></AddTodo>
      </div>
    </div>
  );
}

function AddTodo(params) {
  return (
    <div className="flex flex-row">
      <CheckBox></CheckBox>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#161721] text-[#cccee5] leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Add a ToDo😉"
      ></input>
    </div>
  );
}

function CheckBox(params) {
  return (
    <div class="inline-flex items-center">
      <label
        class="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor="checkbox"
      >
        <input
          type="checkbox"
          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          id="checkbox"
        />
        <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  );
}
export default App;
