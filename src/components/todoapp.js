import React, {useState} from "react";
import "./todoapp.css";

function TodoApp(){
    
    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([])

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const AddTask  = () => {
        if(task !== ""){
            const taskDetails = {
                id : Math.floor(Math.random()*1000),
                value : task,
                isCompleted : false,
            }
            setTaskList([...tasklist, taskDetails]);
        }
    };

    const deletetask = (e, id) => {
        e.preventDefault();
        setTaskList(tasklist.filter((t => t.id !== id)))
    }

    const taskcompleted = (e, id) => {
        e.preventDefault();
        //find index of element
        const element = tasklist.findIndex(elem => elem.id === id);

        //cpoy array into new variable
        const newTaskList = [...tasklist]

        //edit element
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted : true,
        };
        setTaskList(newTaskList);
    };

    return (<div className="todo">
        <input 
        type="text" 
        name="text" 
        id="text" 
        onChange={(e) => handleChange(e)} 
        placeholder="Add task here .... ">
        </input>
        <button className="add-btn" onClick={AddTask}>Add</button>
        <br />
        {tasklist !== [] ? (
        <ul>
            {tasklist.map((t) => (
                <li className={t.isCompleted ? "crossText" : "listitem"}>
                    {t.value}
                    <button className="delete" onClick={e => deletetask(e, t.id)}>Delete</button>
                    <button className="completed" onClick={(e => taskcompleted(e, t.id))}>Completed</button>
                </li>
                ))}
        </ul>
        ) : null}
    </div>);
}

export default TodoApp;