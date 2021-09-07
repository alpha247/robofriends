import React, { Component } from 'react';
import CardList from './cardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
        searchfield: ''
        }
    }
}
onSearchChange=(event) => {
    this.ListeningStateChangedEvent({search:event.target.value})
    
    })
} 
render() {
    console.log(event.target,value);
    const filterRobots = this.state.robots.filter(robots => {
        return robots.anme.toLowerCase().includes(this.state.searchfield.toLowerCase)}
    
        return (
        <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox seachChange={this.onSearchChange}/>
        <cardList robots={filterRobots}/>
        </div>

    );
} 
export default App; 
