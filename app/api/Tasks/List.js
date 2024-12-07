


export default function ListTask(data){
    const task = JSON.parse(data)
    console.log(task.task_name)

    return (
        <li className="todolist_item">
            <p>{task.task_name}</p>
        </li>
    )
}