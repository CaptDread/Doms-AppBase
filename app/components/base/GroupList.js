// This component handles listing Todo Lists, yeah plural, as in users can use have more than one todo list. 
"use client"
import styles from "../../page.module.css"
import ListTask from "@/app/api/Tasks/List";
import AddTaskModal from "../modals/AddTaskModal";
import { React, useState } from "react";


let groups = []
if (typeof window !== 'undefined'){
    groups = localStorage.getItem('groups');
    console.log('test')
}


function TutorialList() {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)


    const toggleTaskModal = (e) => {
        e.preventDefault();
        setIsTaskModalOpen(!isTaskModalOpen);
    }

    const tutTask1 = {
        task_id:"tuttask1",
        task_name:"tutorial task 1",
        task_desc:"a tutorial task, to test and edit style, data transfering, and random text stuff. so yeah... lorem ipsum, pirate stuff, yhadayhadayada...",
        task_summary:"A basic tutorial task",
        sub_task:[],
        isPriority:false,
        completed:false
    }
    const tutTask2 = {
        task_id:"tuttask2",
        task_name:"grocery list",
        task_desc:"a tutorial task, to test and edit style, data transfering, and random text stuff. so yeah... lorem ipsum, pirate stuff, yhadayhadayada...",
        task_summary:"A basic tutorial task, with subtask",
        sub_task:[
            "apples", "bananas", "orange juice", 
        ],
        isPriority:false,
        completed:false
    }

    const task1_string = JSON.stringify(tutTask1)
    const task2_string = JSON.stringify(tutTask2)


    const newListGroup = {
        list_id:"tutlist",
        list_name:"tutorial list",
        listOBJS:{
            task1_string,
            task2_string
        }
    }

    const listOBJS = newListGroup.listOBJS
    const groupString = JSON.stringify(newListGroup)
    const userGroups = [groupString]

    const saveTut = (e) => {
        e.preventDefault();
        e.stopPropagation();

        localStorage.setItem("groups", userGroups);
        console.log("group saved")
    }

    return(
        <section className={styles.listGroup_section}>
            <div className={styles.listHeader} onLoad={saveTut}>
                <h3>
                    {newListGroup.list_name}
                </h3>

            </div>
            <ul className={styles.todolist_ul}>
                {Object.values(listOBJS).map(ListTask)}
                <button className={styles.addtask_btn} onClick={toggleTaskModal}>+ new task</button>
            </ul>
            <div className={styles.modalBkgd} style={{display: isTaskModalOpen? "flex":"none"}}>
                <div className={styles.modalFrame}>
                    <button className={styles.modalbtn_x} onClick={toggleTaskModal}>X</button>
                    <AddTaskModal/>
                </div>
            </div>
        </section>
    )
}

function ParseGroups(data){
    const groupData = JSON.parse(data);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)


    const toggleTaskModal = (e) => {
        e.preventDefault();
        setIsTaskModalOpen(!isTaskModalOpen);
    }

    const saveLists = (e) => {
        e.preventDefault();
        e.stopPropagation();

        localStorage.setItem("groups", userGroups);
        console.log("group saved")
    }

    return(
        <section className={styles.listGroup_section}>
            <div className={styles.listHeader}>
                <h3>
                    {groupData.list_name}
                </h3>

            </div>
            <ul className={styles.todolist_ul}>
                {Object.values(groupData.listOBJS).map(ListTask)}
                <button className={styles.addtask_btn} onClick={toggleTaskModal}>+ new task</button>
            </ul>
            <div className={styles.modalBkgd} style={{display: isTaskModalOpen? "flex":"none"}}>
                <div className={styles.modalFrame}>
                    <button className={styles.modalbtn_x} onClick={toggleTaskModal}>X</button>
                    <AddTaskModal/>
                </div>
            </div>
        </section>
    )
}


export default function GetLists(){
    if (groups.length < 1){

        return(
            <>
                {TutorialList()}
            </>
        )
    } else {
    
        return(
            <>
                {ParseGroups(groups)}
            </>
        )
    }
}