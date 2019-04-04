import React, { Component } from 'react';
import './App.css';
import Baron from './Baron';
import Forester from './Forester';
import Knight from './Knight';

class App extends Component {
  state = {
    lands: [
      { kind: 'forest', income: 'low' },
      { kind: 'plains', income: 'medium' },
      { kind: 'city', income: 'high' },
      { kind: 'forest', income: 'low' },
    ],
    conquering: {
      kind: '',
      income: ''
    }
  }

  // submit the form
  conquer = (event) => {
    event.preventDefault()
    const currentLands = this.state.lands
    const conqueredLand = this.state.conquering
    this.setState({ 
      // adding the new land
      lands: [...currentLands, conqueredLand] ,
      // emptying the input fields
      conquering: {
        kind: '',
        income: ''
      }
    })
  }

  // updating a controlled component
  handleChange = (event) => {
    this.setState({ 
      conquering: {
        ...this.state.conquering,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    // Lands
    const forests = this.state.lands.filter(land => land.kind === "forest")
    const otherlands = this.state.lands.filter(land => land.kind !== "forest")

    return (
      <div className="App">
        <header className="App-header">
          <h1>KING</h1>

          <Knight 
            conquering={this.state.conquering}
            handleChange={this.handleChange}
            conquer={this.conquer}
          />
          
          <Baron lands={otherlands}/>
          <Forester lands={forests} />


        </header>
      </div>
    );
  }
}

export default App;
