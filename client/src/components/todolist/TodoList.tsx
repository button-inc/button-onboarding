import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { TodoList_tasks$key } from "./__generated__/TodoList_tasks.graphql";
import "./Style.css";

interface Props {
  className: string;
  tasks: TodoList_tasks$key;
}

const TodoList = (props: Props) => {
  const data = useFragment(
    graphql`
      fragment TodoList_tasks on Query {
        allTodoCreateTables {
          nodes {
            id
            completed
            task
          }
        }
      }
    `,
    props.tasks,
  );

  return (
    <div className={`${props.className} todolist_container_flex`}>
      <div className="card">
        <div className="container">
          <div>
            <h1>{JSON.stringify(data)}</h1>
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
