import React, { Component } from 'react';
import './App.css';
import Tacos from './components/Tacos/Tacos'
import TacoSelector from './components/TacoSelector/TacoSelector'

const tacoNo = ['0', '1', '2', '3']

class App extends Component {
  state = {
      selectedTacoIdx: 0
    }

  handleTacoSelection = (newIdx) => {
    this.setState({ selectedTacoIdx: newIdx })
  }

  render() { 
    return (
      <div className="App">
        <header className='App-header'>
          Pick a Taco!
        </header>
        <main>
          <TacoSelector
          handleTacoSelection={this.handleTacoSelection}
            tacoNo={tacoNo}
            selectedTacoIdx={this.state.selectedTacoIdx}
          />
          <Tacos 
            handleTacoSelection={this.handleTacoSelection}
            tacoNo={tacoNo}
            selectedTacoIdx={this.state.selectedTacoIdx}
          />
        </main>
      </div>
    );
  }
}
 
export default App;
