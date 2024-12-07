// This component handles listing Todo Lists, yeah plural, as in users can use have more than one todo list.  
import styles from "../../page.module.css"
import ListTask from "@/app/api/Tasks/List";
import AddTaskModal from "../modals/AddTaskModal";

const groups = () => localStorage.getItem('groups');


function tutorialList() {
    const tutTask1 = {
        task_id:"tuttask",
        task_name:"tutorial task 1",
        task_desc:"a tutorial task, to test and edit style, data transfering, and random text stuff. so yeah... lorem ipsum, pirate stuff, yhadayhadayada...",
        task_summary:"A basic tutorial task",
        sub_task:[],
        isPriority:false,
        completed:false
    }
    const tutTask2 = {
        task_id:"tuttask",
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
    return(
        <section className={styles.listGroup_section}>
            <div className={styles.listHeader}>
                <h3>
                    {newListGroup.list_name}
                </h3>

            </div>
            <ul className={styles.todolist_ul}>
                {Object.values(listOBJS).map(ListTask)}
                <button className={styles.addtask_btn}>+ new task</button>
            </ul>
            <div className={styles.modalBkgd}>
                <div className={styles.modalFrame}>
                    <button className={styles.modalbtn_x}>X</button>
                    <AddTaskModal/>
                </div>
            </div>
        </section>
    )
}

// function parseGroups(){
// 
// }


export default function GetLists(){
    if (groups.length < 1){

        return(
            <>
                {tutorialList()}
            </>
        )
    } else {
    console.log(groups)
    }
}