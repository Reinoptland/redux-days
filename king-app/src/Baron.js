import React, { Component } from 'react';
import Land from './Land';

export default class Baron extends Component {
    render(){
        return (
            <div style={{ backgroundColor: 'purple' }}>
                <h1>BARON:</h1>
                { this.props.lands && this.props.lands.map(land => (
                    <Land key={Math.random()} land={land} />
                ))}

            </div>
        )    
    }
}