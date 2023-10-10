import React, {Component} from "react";


class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            todos:[],
            newTodo: "",
        };
    }

    addTodo = (task) => {
        this.setState((prevState) => ({
            todos:[...prevState.todos, task],
            newTodo: "",
        }));
    };
    handleInputChange =(event) =>{
        this.setState({newTodo: event.target.value});
    };

    handleAddTodo = () => {
        if(this.state.newTodo.trim()==="") return;
        this.addTodo(this.state.newTodo);
    }

    removeTodo = (index) => {
        const updateTodos = [...this.state.todos];
        updateTodos.splice(index, 1);
        this.setState({todos: updateTodos});
    };

    

    render(){
        return(
            <div>
                <h1 style={{ textAlign: "center", color: "dark"}}>My To-Do List</h1>
            <div style={{textAlign: "center"}}>
                <input
                    type = "text"
                    placeholder="Add a new task"
                    style={{padding: "5px"}}
                    onChange={this.handleInputChange}
                    value = {this.state.newTodo}
                />
                <button onClick={this.handleAddTodo}
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
                    <ul style = {{listStyleType: "circle", paddingLeft: "20px"}}>
                        {this.state.todos.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))}
                        {this.state.todos.map((todo,index) => (
                            <li key={index}>
                                {todo}
                                <button onClick={() => this.removeTodo(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
            </div>
        )
    }
}

export default TodoList;