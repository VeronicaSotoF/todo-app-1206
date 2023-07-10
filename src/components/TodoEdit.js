import "../style/TodoEdit.css";
import { useState } from "react";

function TodoEdit({ todo, onSubmit }) {
  const [text, setText] = useState(todo.text);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(todo.id, text);
  };

  return (
    <form className="edit-todo" onSubmit={handleSubmit}>
      <label>Text</label>
      <input value={text} onChange={handleChange} />
      <button>Save</button>
    </form>
  );
}

export default TodoEdit;
