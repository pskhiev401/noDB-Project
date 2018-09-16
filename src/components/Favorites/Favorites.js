import React, {Component} from 'react';
import axios from 'axios';
import './Favorites.css';

class Favorites extends Component{
    
    deleteHandler (id) {
        axios.delete(`/api/rocket/${id}`)
        // .then( () => {
            // axios.get('/api/favorites').then(response => {
            //     console.log(response.data)
            // this.setState( {favorites: response.data})
            // });
        // }
        // );
    }

    render (){
        let favoriteList = this.props.myfavorites1.map((element, index) => {
            // console.log(element)
            return ( 
                <div className='favoriteCard' key={index}>
                    {/* <img src= {element.element.links.mission_patch_small} alt='WHOOPS NO IMG'/>  */}
                    <div>Rocket Name: {element.element.rocket.rocket_name}</div>
                    <div>Mission Name: {element.element.mission_name}</div>
                    <div>Launch Year: {element.element.launch_year}</div>
                    <div>Launch Site: {element.element.launch_site.site_name}</div>
                    <button onClick= { () => this.deleteHandler(element.element.flight_number) } >Delete</button>
                </div>
            )
        });
        return (
            <div>
                <p>HELLO from FAVORITES</p>
                {favoriteList}
            </div>
            );
    }
}

export default Favorites;