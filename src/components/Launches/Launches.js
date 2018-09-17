import React, {Component} from 'react';
import axios from 'axios';
import './Launches.css';

class Launches extends Component{
    constructor (props){
        super(props);
        this.state = {
            launches : [],
            
        }
    }

    componentDidMount(){
        axios.get('/api/ships').then(response => {
            // console.log(response.data)
            this.setState({launches:response.data})
        })
    } 

    render (){
        // console.log(this.state.favorites)
        let launchList = this.state.launches.map((element, index) => {
            return ( 
                <div className='launchCard' key={index}>
                    <div>Launch Year: {element.launch_year}</div>
                    <div>Mission Name: {element.mission_name}</div>
                    <button onClick= {() => this.props.favoritesHandler1(element)}>Add Favorite</button>
                    {/* <div className='launch_cartoon'><img src= {'https://upload.wikimedia.org/wikipedia/commons/e/e5/Emojione_1F680.svg'} alt='WHOOPS NO IMG'/></div> */}
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