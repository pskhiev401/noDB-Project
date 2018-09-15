import React, {Component} from 'react';
import axios from 'axios';
import './Launches.css';

class Launches extends Component{
    constructor (){
        super();

        this.state = {
            launches : [],
            favorites: [],
        }
    }

componentDidMount(){
    axios.get('/api/ships').then(response => {
        // console.log(response.data)
        this.setState({launches:response.data})
    })
} 

favoritesHandler(element){
    axios.post('/api/ships', {element}).then(response =>{
        // console.log(response.data)
        this.setState({favorites:response.data})
    } )
}

render (){
    console.log(this.state.favorites)
    let launchList = this.state.launches.map((element, index) => {
        return ( 
            <div className='launchCard' key={index}>
                <div>Mission Name: {element.mission_name}</div>
                <div>Launch Year: {element.launch_year}</div>
                <button onClick= {() => this.favoritesHandler(element)}  >Add to Favorites</button>
            </div>
        )
    })
// console.log('Local State', this.state.launches)
return (
    <div>
        {launchList}
    </div>
)

}

}

export default Launches;