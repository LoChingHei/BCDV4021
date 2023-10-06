import React, {Component} from "react";
import Greeting from "./Greeting";

export class HelloWorld extends Component {
    constructor(props){
        super(props);

        this.state = {
            message: "Hello, React(state)!"
        }
    }
    changeMessage = () => {
        this.setState({message: "Welcome to React!"})
    };

    render(){
        return(
            <div>
                {this.state.message}
                <button onClick={this.changeMessage}>Change Message</button>
                <Greeting message={this.state.message}/>
            </div>
            
        );
    }
}
