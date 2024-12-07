"use client"
import { useState } from 'react';
import styles from "../../page.module.css"

export default function AddTaskModal(GroupList){
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [summary, setSummary] = useState("");
    const [subtask, setSubtask] = useState(false);
    const [priority, setPriority] = useState(false);

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
                <button className={styles.addtask_btn}>+ Sub Task</button>
            </div>
        </form>
      )
}