import React, { Component } from 'react';
import './App.css';
import Launches from './components/Launches/Launches';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';

class App extends Component {
  constructor (){
    super();
    this.state = {
        favorites: [],
    }

this.favoritesHandler = this.favoritesHandler.bind(this);
}



  componentDidMount(){
    axios.get('/api/favorites/').then(response => {
        // console.log(response.data)
        this.setState({favorites:response.data})
    })
} 
  

  favoritesHandler(element){
    axios.post('/api/ships', {element}).then(response =>{
        console.log(response);
      this.setState({favorites:response.data})
    } )
  }
  render() {
    console.log(this.state)
    return (
      <div className='App'>
        <header className="App-header">
          <h1 className="App-title">RocketLabs</h1>
        </header>
        <div className='main-box'>
          <Launches favoritesHandler1= {this.favoritesHandler}/>
          <Favorites myfavorites1 = {this.state.favorites}
            deleteHandler={this.deleteHandler} 
          /> 
        </div>
        
      </div>
    );
  }
}

export default App;
