import React, { Component } from 'react';

class ControledForma extends Component {
    state = {
        name: 'kokos'
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" value = {this.state.name} onChange = {this.onInputChangeValue}/>

                    <button>send</button>
                </form>
                
            </div>
        );
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.name);
    };

    
    onInputChangeValue = (event) => {
        this.setState({name: event.target.value});
        // console.log(event.target.value);
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state, prevState);
    }
}

export default ControledForma;