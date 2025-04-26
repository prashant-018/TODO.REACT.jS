import { useState } from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import WelcomeMeassage from "./Components/WelcomeMeassage";

import { TodoItemContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = {
      name: itemName,
      dueDate: itemDueDate,
    };
    setTodoItems([...todoItems, newTodoItem]);
  };

  const handleDeleteItem = (todoItemName) => {
    const updatedItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(updatedItems);
  };

  // Provide the context value here
  const contextValue = {
    todoItems,
    addItem: handleNewItem,
    deleteItem: handleDeleteItem,
  };

  return (
    <TodoItemContext.Provider value={contextValue}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMeassage todoItems={todoItems} />
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
