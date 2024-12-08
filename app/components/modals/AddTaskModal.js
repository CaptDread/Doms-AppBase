"use client"
import { createElement, useState } from 'react';
import styles from "../../page.module.css"


export default function AddTaskModal(GroupList){
  // Form States
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [summary, setSummary] = useState("");
    const [priority, setPriority] = useState(false);
    const [hasSubTask, setHasSubTask] = useState(false);
    const [subtask, setSubtask] = useState([]);

    const preventDef = (e) => {
      e.preventDefault();
    }

    const rmvSubTask = (e) => {
      e.preventDefault();
      const parent = e.explicitOriginalTarget.parentElement
      
      if(parent.parentElement.childElementCount < 2){
        setHasSubTask(false);
      }
      parent.remove();
    }

    const addSubTask = (e) => {
      e.preventDefault();
      const subTask_ul = document.querySelector("#subtask_ul")
      setHasSubTask(true);

      // Create List Item with name input and x button
      const listItem = document.createElement("li")
      const inputItem = document.createElement("input")
      const xbtn_itm = document.createElement("button")
      // Append
      subTask_ul.appendChild(listItem)
      listItem.appendChild(inputItem)
      listItem.appendChild(xbtn_itm)
      xbtn_itm.innerHTML = "X";
      // event listener
      xbtn_itm.addEventListener("click", rmvSubTask)
    }
  


    return (
        <form className={styles.modalForm_add}>
            <input
              type="text" 
              className={styles.input}
              placeholder='Task'
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "69%" }}
            />
            <textarea
              className={styles.input}
              value={summary}
              maxLength={50}
              onChange={(e) => setSummary(e.target.value)}
              placeholder='Summary (50char limit)'
              rows={3}
            />
            <textarea
              className={styles.input}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder='Enter a Description?'
              rows={6}
            />
            <div className={styles.extras}>
                <label style={{display:'flex', flexDirection: 'column', textTransform:'capitalize'}}>
                    <p>priority</p>
                    <input
                    type="checkbox" 
                    value={priority}
                    onChange={(e) => set(e.target.value)}
                    />
                </label>
                <button className={styles.addsubtask_btn} onClick={addSubTask}>+ Sub Task</button>
            </div>
            <ul className={styles.subtask_ul} id='subtask_ul' style={{height: hasSubTask? "3em": "0px", display: hasSubTask? "flex" : "hidden"}}>
              
            </ul>
            <button className={styles.addtask_btn} onClick={preventDef}>Add Task</button>
        </form>
      )
}