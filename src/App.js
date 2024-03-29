import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }
  
  handleChange  = (e) => {
    this.setState({
      searchField:  e.target.value
    });
  }

  render () {
    const { monsters, searchField } = this.state; // destructuring state object for variables
    const filteredMonsters = monsters.filter(monster => {
      return Object.keys(monster).some(key => {
        return monster[key].toString().toLowerCase().includes(searchField.toLowerCase());
      })
    }); // lowercase monster names and input and check if input is inclused in any monster name

    return (
      <div className="App">
      <h1>Kitties Rolodex</h1>
        <SearchBox 
          placeholder='Kitties'
          handleChange={this.handleChange}
          search={searchField} />
        <CardList monsters={filteredMonsters} />
        {filteredMonsters.length === 0 && <h2>No records found! Please try again and check spelling</h2>}
      </div>
    );
  }
  }
  

export default App;
