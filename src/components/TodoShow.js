import "../style/TodoShow.css";
import { useState } from "react";
import TodoEdit from "./TodoEdit";

function TodoShow({ todo, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newText) => {
    setShowEdit(false);
    onEdit(id, newText);
  };

  let content = <h3>{todo.text}</h3>;
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />;
  }

  return (
    <div className="todo-card box-shadow">
      <img src={`https://picsum.photos/seed/${todo.id}/300/200`} />
      <div className="card-content">{content}</div>
      <div className="buttons">
        <button onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoShow;
