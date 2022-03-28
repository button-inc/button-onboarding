import { unwrap } from '../utils';

interface TodoListProps {
  initialListItems: any;
}

interface ListItem {
  id: number;
  task: string;
  completed: boolean;
  dateCreated: string;
  dateCompleted: string;
}

const TodoList = ({ initialListItems }: TodoListProps) => {
  const listItems = unwrap(initialListItems.allTasks.edges);

  return (
    <div>
      <ul>
        {listItems &&
          listItems.map((item: ListItem) => {
            const { id, task } = item;
            return <li key={id}>{task}</li>;
          })}
      </ul>
    </div>
  );
};

export default TodoList;
