import React from 'react';
import './App.css';
import Beer from './components/Beer/Beer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    }
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(data => {
      this.setState({
        beers: data
      })
    });
  }

  componentDidUpdate() {
    console.log(`BEERS: ${this.state.beers}`)
  }

  render() {
  return (
    <div className="App">
      <h1 className="app_title">Pub API</h1>
      <div className="all_beers">
      {this.state.beers.map(beer => (
        <Beer beer={beer}/>
      ))}
      </div>
    </div>
  )}
}

export default App;
