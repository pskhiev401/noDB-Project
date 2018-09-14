import React, {Component} from 'react';
import axios from 'axios';

class Launches extends Component{
    constructor (){
        super();

        this.state = {
            launches : []
        }
    }

componentDidMount(){
    axios.get('/api/ships').then(response => {
        // console.log(response.data)
        this.setState({launches:response.data})
    })
} 

render (){
    let launchList = this.state.launches.map((element, index) => {
        return ( 
            <div className='rocketCard' key={index}>
                <div>Rocket Name: {element.rocket.rocket_name}</div>
                <div>Mission Name: {element.mission_name}</div>
                <div>Launch Year: {element.launch_year}</div>
                <div>Launch Site: {element.launch_site.site_name_long}</div>
                <img src= {element.links.mission_patch_small} />
            </div>
        )
    }
    )
console.log('Local State', this.state.launches)
return (
    <div>
        {launchList}
    </div>
)

}



}

export default Launches;