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
        userInput: '',
    }

this.favoritesHandler = this.favoritesHandler.bind(this);
this.updateHandler = this.updateHandler.bind(this);
}

  componentDidMount(){
    axios.get('/api/favorites/').then(response => {
        // console.log(response.data)
        this.setState({favorites:response.data})
    })
} 
  
  favoritesHandler(element){
    axios.post('/api/ships', {element}).then(response =>{
        // console.log(response);
      this.setState({favorites:response.data})
    } )
  }

  updateHandler (id){
    axios
    .put(`/api/rocket/${id}`, {name:this.state.userInput})
    .then(response => {
      axios.get('/api/favorites').then(response => {
        console.log('updateHandler from App.js', response);
        this.setState({favorites: response.data});
      });
    });
  }
  render() {
    // console.log(this.state)
    return (
      <div className='App'>
        <header className="App-header">
          <h1 className="App-title">RocketLabs</h1>
        </header>
        <div className='main-box'>
          <Launches favoritesHandler1= {this.favoritesHandler}/>
          <Favorites myfavorites1 = {this.state.favorites}
            deleteHandler={this.deleteHandler}
            updateHandler={this.updateHandler} 
          /> 
        </div>
        
      </div>
    );
  }
}

export default App;
