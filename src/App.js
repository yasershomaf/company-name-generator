import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name : '',
            company : ''
        };
    }
    render() {
        return (
            <div>
                <h1>Company Name Generator</h1>
                <form onSubmit = {this.handleGenerate}>
                    <span>Enter name: </span>
                    <input
                        type = 'text'
                        value = {this.state.name}
                        onChange = {this.handleNameField}
                    />
                    <input
                        type = 'submit'
                        value = 'Generate'
                    />
                    <br/>
                    <span>Company name: <strong>{this.state.company}</strong>
                    </span>
                </form>
            </div>
        );
    }
    handleNameField = (e) => {
        this.setState({
            name : e.target.value
        });
    }
    handleGenerate = (e) => {
        e.preventDefault();
        this.setState({
            company : this.state.name === '' ? '' : this.state.name + "'s company"
        });
    }
}