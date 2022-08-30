import TodoListItem from "./TodoListItem";


function TodoList(props: any):any {
    
    // for each item in props list 
    // create a checkbox item for it 
    function getTodoListItems(){
        for(const property in props) {
            console.log(property)
        }
    }

    return (
        <>
            { getTodoListItems }
        </>
    );

}

export default TodoList;

