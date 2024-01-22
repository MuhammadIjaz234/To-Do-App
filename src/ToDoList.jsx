import { useState } from "react";

function ToDoList() {
    
    const [tasks,setTasks]=useState(["a","b"]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim()!=="") {
            setTasks(t=>[...t,newTask])
            setNewTask("");
        }
    }

    function removeTask(params) {
        //const updatedTasks=
        setTasks(t=>t.filter((element,index)=>index!==params));
    }

    function moveTaskUp(index) {
        if (index>0) {
            const updatedTasks=[...tasks];
            [updatedTasks[index-1],updatedTasks[index]]=[updatedTasks[index],updatedTasks[index-1]];
            setTasks(updatedTasks);
        }
        
    }
    function moveTaskDown(index) {
        if (index<tasks.length-1) {
            const updatedTasks=[...tasks];
            [updatedTasks[index+1],updatedTasks[index]]=[updatedTasks[index],updatedTasks[index+1]];
            setTasks(updatedTasks);
        }
    }

    return(<>
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input 
                type="text" 
                placeholder="enter a task" 
                value={newTask}
                onChange={handleInputChange}>
            </input>
            <button 
                className="add-button"
                onClick={addTask}>ADD</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button 
                    className="delete-button"
                    onClick={()=>removeTask(index)}>
                    DELETE
                </button>
                <button 
                    className="move-button-up"
                    onClick={()=>moveTaskUp(index)}>
                    ⬆️
                </button>
                <button 
                    className="move-button-down"
                    onClick={()=>moveTaskDown(index)}>
                    ⬇️
                </button>
            </li>)}
        </ol>
    </div>
    </>);
}
export default ToDoList