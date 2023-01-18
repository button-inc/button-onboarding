import "./Style.css";

interface Props {
  className: string;
}

const TodoList = (props: Props) => {
  return (
    <div className={`${props.className} todolist_container_flex`}>
      <div className="card">
        <div className="container">
          <div>
            <h1>Todo List</h1>
            <label className="checkbox_container">
              List 1
              <input type="checkbox"></input>
              <span className="todolist_checked"></span>
            </label>
            <label className="checkbox_container">
              List 2
              <input type="checkbox"></input>
              <span className="todolist_checked"></span>
            </label>
            <label className="checkbox_container">
              List 3
              <input type="checkbox"></input>
              <span className="todolist_checked"></span>
            </label>
          </div>

          <div className="todolist_form_flex">
            <input className="todolist_input"></input>
            <button className="todolist_button todolist_button_second">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TodoList };
