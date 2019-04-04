import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    lands: [
      { kind: 'forest', income: 'low' },
      { kind: 'plains', income: 'medium' },
      { kind: 'city', income: 'high' },
      { kind: 'forest', income: 'low' },
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.lands.map(land => 
            <div>
              <h1>LAND:</h1>
              <h2>KIND: {land.kind}</h2>
              <h3>INCOME: {land.income}</h3>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
