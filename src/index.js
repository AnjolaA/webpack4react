import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    state = { 
        count: 1,
        tasks: []
    }

    componentDidMount() {
        this.setState({
            tasks: [
                {
                    "id": 1,
                    "name": "Steal Obe",
                    "status": "completed"
                },
                {
                    "id": 2,
                    "name": "Buy Soap",
                    "status": "Pending"
                }
            ]
        })

    }
    handleAddClick = () => {
        console.log(this.state.count);
        this.setState({ count: this.state.count + 1 })
    }

    handleSubtractClick = () => {
        console.log(this.state.count);
        this.setState({ count: this.state.count - 1 })
    }

    render(){
        return(
            <div>
                <div>{this.state.count}</div>
                <h1>Hello Matey!</h1>
                <button onClick={this.handleAddClick}>Add it</button>
                <button onClick={this.handleSubtractClick}>Subtract it</button>
                {this.state.tasks.map((task) => (
                    <p key={task.id}>The status of {task.name}  is {task.status}!</p>
                ))}

            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));