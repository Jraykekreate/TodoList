import { CheckBox } from "./CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the close icon

export function TodoListItem({ children, Checked, num }) {
  return (
    <li className="w-full flex items-center justify-between p-2 border-b-4 border-indigo-500">
      <div className="flex items-center">
        <CheckBox Checked={Checked}></CheckBox>
        <span>{children}</span>
      </div>
      <button>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
}
