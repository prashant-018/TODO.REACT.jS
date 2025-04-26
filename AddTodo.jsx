import { useState, useRef } from "react";
import { MdAddCircle } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  
  const noOfUpdates = useRef(0); // ✅ Define the ref properly

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`noOfUpdates are: ${noOfUpdates.current}`);
  };

  const handleAddButtonClicked = () => {
    if (todoName.trim() === "" || dueDate.trim() === "") {
      alert("Please fill both Todo Name and Due Date!");
      return;
    }
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          value={dueDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-button"
          onClick={handleAddButtonClicked}
        >
          <MdAddCircle />
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
