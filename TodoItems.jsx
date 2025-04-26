import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name} // ✅ Use a unique key if possible
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
