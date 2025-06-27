export function Header(props){
    const {todos} =props
    const todosLenght = todos.length
    const isTaskPlural = todosLenght!=1
    const taskOrTasks = isTaskPlural?'tasks':'task'


    return(
        <header>
            <h1 className="text-gradient">You have {todosLenght} open {taskOrTasks}</h1>
        </header>
    )
}