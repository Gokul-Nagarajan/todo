import Todo from "./Todo";
const TodoList = ({ todos,setTodos,filtertodos }) => {

    return ( 
        <div className="todo-container">
            <ul className="todo-list">
                {filtertodos.map((todo) => (<Todo 
                    todo={ todo} 
                    setTodos = { setTodos }
                    todos={ todos} key={todo.id} text={todo.text} />))}
            </ul>

        </div>
     );
}
 
export default TodoList;