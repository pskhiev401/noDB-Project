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
this.updateRocketNameFN = this.updateRocketNameFN.bind(this);
this.deleteHandler= this.deleteHandler.bind(this);
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
    console.log(id)
    console.log(this.state.userInput)
    axios.put(`/api/rocket/${id}`, {rocket_name:this.state.userInput})
    .then(response => {
      console.log(response)
      this.setState({favorites:response.data})
    });
  }

  deleteHandler (id) {
    axios.delete(`/api/rocket/${id}`)
        .then( 
    axios.get('/api/favorites').then(response => {
    // console.log(response.data)
    this.setState({favorites: response.data})
        })
    
    );
}

  updateRocketNameFN (element){
    this.setState({userInput: element.target.value})
  } 
  
  render() {
    // console.log(this.state)
    console.log(this.state.userInput)
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
            updateRocketNameFN={this.updateRocketNameFN}
          /> 
        </div>
        
      </div>
    );
  }
}

export default App;
