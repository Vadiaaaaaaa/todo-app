import { TodoCard } from "./TodoCard"

export function TodoList(props){
    const {todos,selectedTab}=props
    let filteredTodoList;
    if (selectedTab === 'All'){
        filteredTodoList = todos
    }

    else if (selectedTab === 'Open'){
        filteredTodoList = todos.filter((todo,index)=>{
            return !(todo.complete)
        })
    }

    else if (selectedTab ==='Completed'){
        filteredTodoList = todos.filter((todo,index)=>{
            return (todo.complete)
        })
    }
    return (
        <>
        {filteredTodoList.map((todo,index)=>{
            return (
                <TodoCard key={index} 
                todo={todo} 
                todoIndex={todos.findIndex(val=>val.input===todo.input)} 
                {...props} />
            )
        })}
        </>
    )
}