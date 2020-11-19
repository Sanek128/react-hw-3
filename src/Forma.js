import React, { Component } from 'react';

class Forma extends Component {

    constructor(props) {
        super(props);
        // this.name = React.createRef()
    }
    render() {
        return (
            <div>
                <input type="text" ref={input => this._name = input}/>
                <button onClick={this.actionX}>send</button>
            </div>
        );
    }

    actionX = (event) => {
        // console.log(this.name.current.value);
        const name = this._name.value;
        console.log(name);
    }
}

export default Forma;