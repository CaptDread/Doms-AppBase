"useClient"
import styles from "../../page.module.css";
import { useState } from "react";




export default function ListTask(data){
    const [isOpen, setIsOpen] = useState(false)
    // const [hasSubTask, setHasSubTask] = useState(false)

    const task = JSON.parse(data)
    let subtask = task.sub_task

    // if(subtask.length > 0){
    //     setHasSubTask(true)
    // }

    const toggleOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen)
    }

    return (
        <li className={styles.todolist_item}>
            <div className={styles.item_info}>
                 <div className={styles.item_head}>
                    <h5>{task.task_name}</h5>
                    <p style={{display: isOpen? "none":"flex"}}>&gt; {task.task_summary}</p>
                 </div>
                 <div className={styles.item_extras} style={{display: isOpen? "flex":"none"}}>
                    <article>
                        {task.task_desc}
                        {/* <ul className={styles.item_subtasks} style={{display: hasSubTask? "flex":"none"}}>
                        </ul> */}
                    </article>
                 </div>
            </div>
            <div className={styles.item_btns}>
                <input
                    type="checkbox"
                />
                <button>
                    :
                </button>
                <button onClick={toggleOpen}>
                    \/
                </button>
            </div>
        </li>
    )
}