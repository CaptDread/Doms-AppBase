// This component handles listing all the task in a single task group on the screen.
"use client"
import { useEffect, useState } from "react"
import styles from "../../page.module.css"


export default function DisplayList(subState, data){
    const [hasSubTask, setHasSubTask] = useState(subState)
    


    return (  
        <ul className={styles.item_subtasks} style={{display: hasSubTask? "flex":"none"}}>
            {data.map((item, index) => (
                <li key={index}>
                    <p>{item}</p>
                    <input 
                        type="checkbox"
                    />
                </li>
            ))}
        </ul>
    )

}