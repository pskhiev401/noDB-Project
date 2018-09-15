import React, {Component} from 'react';
import axios from 'axios';
import './Favorites.css';

class Favorites extends Component{
    constructor (){
        super();

        this.state = {
            favorites : [],
        }
    }

componentDidMount(){
    axios.get('/api/favorites/').then(response => {
        // console.log(response.data)
        this.setState({favorites:response.data})
    })
} 

render (){
    // console.log(this.state.favorites)
    let favoriteList = this.state.favorites[0] && this.state.favorites.map((element, index) => {
        return ( 
            <div className='favoriteCard' key={index}>
                <img src= {element.links.mission_patch_small} alt='WHOOPS NO IMG'/> 
                <div>Rocket Name: {element.rocket.rocket_name}</div>
                <div>Mission Name: {element.mission_name}</div>
                <div>Launch Year: {element.launch_year}</div>
                <div>Launch Site: {element.launch_site.site_name_long}</div>
                <input className= 'comment-box' onchange placeholder='Comments'></input>
            </div>
        )
    })
return (
    <div>
        <p>HELLO from FAVORITES</p>
        {favoriteList}
    </div>
)

}

}


export default Favorites;