export function Tabs(props){
    const {selectedTab,setSelectedTab,todos}=props
    const tabs =['All', 'Open', 'Completed']
    return(
        <nav className='tab-container'>
            {tabs.map((tab,tabIndex)=>{
                const numOfTask= 
                tab==='All'?todos.length:
                tab==='Open'? (todos.filter((task)=>{
                    return (!(task.complete))
                })).length:
                tab==='Completed'?(todos.filter((task)=>{
                    return ((task.complete))
                })).length:0

                return( 
                <button 
                key = {tabIndex} 
                className={"tab-button "+(tab===selectedTab?"tab-selected":"")}
                onClick={()=>{setSelectedTab(tab)}}
                >
                    <h4>{tab} <span>({numOfTask})</span></h4>
                    </button>
            )})}
        </nav>
    )
}