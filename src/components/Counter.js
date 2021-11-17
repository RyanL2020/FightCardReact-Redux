import React from 'react';
// A counter that increaces depending on how many characters are in the input
class Counter extends React.Component {
    // Here we are setting the initial state
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            input: ''
        };
    }

    // handleChange is setting the state change in the input 
    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    // this handleClick function is setting the state of count to eqaul the values of
    // what is currently the value of counter plus what the value of what is in the inputs length is 
    handleClick = (event) => {
        this.setState({
            count: this.state.count + this.state.input.length
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Click</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}


export default Counter;


