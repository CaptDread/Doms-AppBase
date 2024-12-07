// This component handles listing Todo Lists, yeah plural, as in users can use have more than one todo list.  

const groups = () => localStorage.getItem('groups');



export default function GetLists(){
    if (groups.length < 1){
        console.log("No Groups")
        return(
            <>
                <section>
                    <h5>You don't have any List, Let's make some!</h5>
                    <button>Create New List!</button>
                </section>
            </>
        )
    } else {
    console.log(groups)
    }
}