// This component handles listing Todo Lists, yeah plural, as in users can use have more than one todo list.  

import ListTask from "@/app/api/Tasks/List";

const groups = () => localStorage.getItem('groups');


function tutorialList() {
    const tutTask1 = {
        task_id:"tuttask",
        task_name:"tutorial task 1",
        task_desc:"a tutorial task, to test and edit style, data transfering, and random text stuff. so yeah... lorem ipsum, pirate stuff, yhadayhadayada...",
        task_summary:"A basic tutorial task",
        sub_task:[],
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

    return(
        <section className="listGroup_section">
            <div className="listHeader">
                <h3>
                    {newListGroup.list_name}
                </h3>
            </div>
            <ul className="todolist_ul">
                {Object.values(listOBJS).map(ListTask)}
            </ul>
        </section>
    )
}


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