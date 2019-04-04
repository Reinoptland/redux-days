import React, { Component } from 'react';
import Land from './Land';

export default class Forester extends Component {
    render(){
        return (
            <div style={{ backgroundColor: 'green' }}>
                <h1>FORESTER:</h1>
                { this.props.lands.map(land => (
                    <Land key={Math.random()} land={land} />
                ))}
            </div>
        )    
    }
}