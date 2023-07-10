import "../style/TodoCreate.css";
import { useState } from "react";

function TodoCreate({ onCreate }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div className="create-todo ">
      <form className="box-shadow" onSubmit={handleSubmit}>
        <label>Add Todo</label>
        <input value={text} onChange={handleChange}></input>
        <button>Create</button>
      </form>
    </div>
  );
}

export default TodoCreate;
