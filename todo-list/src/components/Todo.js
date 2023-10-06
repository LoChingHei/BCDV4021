import React from "react";

const handleClick = () =>{
    let ThingToDo = document.getElementById("input").value;
    let ListItem=document.createElement("li");
    ListItem.innerHTML=ThingToDo;
    document.getElementById("TODOLIST").appendChild(ListItem);
}
function Todo(){
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "dark"}}>My To-Do List</h1>
            <div style={{textAlign: "center"}}>
                <input id="input"
                    type = "text"
                    placeholder="Add a new task"
                    style={{padding: "5px"}}
                />
                <button onClick={handleClick}
                    style = {{
                        backgroundColor: "darkblue",
                        color: "white",
                        padding: "5px 10px",
                        border: "none",
                        marginLeft: "5px",
                    }}
                    >
                    Add
                    </button>
                    </div>
                    <ul id = "TODOLIST" style = {{listStyleType: "circle", paddingLeft: "20px"}}>

                    </ul>
        </div>
    );
}

export default Todo;