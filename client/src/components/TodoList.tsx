import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { unwrap } from '../utils';
import AddTodo from './AddTodo';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  query: any;
}

interface ListItem {
  id: number;
  task: string;
  completed: boolean;
  dateCreated: string;
  dateUpdated: string;
}

const styles = {
  boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
  padding: '0 2em 2em 2em',
  height: 'fit-content',
};

const TodoList = ({ query }: TodoListProps) => {
  const data = useFragment(
    graphql`
      fragment TodoList_query on Query {
        allTasks(first: 100) @connection(key: "TodoList_allTasks") {
          __id
          edges {
            node {
              id
              ...TodoListItem_task
            }
          }
        }
      }
    `,
    query
  );

  const tasks = unwrap(data.allTasks.edges);

  return (
    <div style={styles}>
      <ul style={{ padding: 0 }}>
        {tasks &&
          tasks.map((node: ListItem) => {
            const { id } = node;
            return <TodoListItem key={id} task={node} />;
          })}
      </ul>
      <AddTodo />
    </div>
  );
};

export default TodoList;
