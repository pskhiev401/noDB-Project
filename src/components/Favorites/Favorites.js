import React, {Component} from 'react';
// import axios from 'axios';
import './Favorites.css';

class Favorites extends Component{
    
    render (){
        let favoriteList = this.props.myfavorites1.map((element, index) => {
            // console.log(element)
            return ( 
                <div className='favoriteCard' key={index}>
                    <img src= {element.element.links.mission_patch_small} alt='WHOOPS NO IMG'/> 
                    <div>Rocket: {element.element.rocket.rocket_name}</div>
                    <div>Mission: {element.element.mission_name}</div>
                    <div>Launch Year: {element.element.launch_year}</div>
                    <div>Launch Site: {element.element.launch_site.site_name}</div>
                    <button onClick= { () => this.props.deleteHandler(element.element.flight_number) } >Delete</button>
                    <input placeholder='Rename Rocket'onChange= { (e) => this.props.updateRocketNameFN(e)}></input>
                    <button onClick= { () => this.props.updateHandler(element.element.flight_number) } >Update</button>
                </div>
            )
        });
        return (
            <div>
                {favoriteList}
            </div>
            );
    }
}

export default Favorites;