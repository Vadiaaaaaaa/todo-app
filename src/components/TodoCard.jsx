export function TodoCard(props){
    const {todo, todoIndex, handleDeleteTodo, handleCompleteTodo} = props
    return (
        <div className="card todo-list">
            <p>{todo.input}</p>
            <button disabled={todo.complete}
            onClick={()=>{handleCompleteTodo(todoIndex)}}
            ><h6>Done</h6></button>

            <button 
            onClick = {()=>{handleDeleteTodo(todoIndex)}}
            >
                <h6>Delete</h6>
            </button>
        </div>
    )
}