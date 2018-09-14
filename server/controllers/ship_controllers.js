const axios = require('axios');


const getLaunches = (req, res) => {
        axios.get('https://api.spacexdata.com/v2/launches').then(response => {
    console.log(response.data)
    res.status(200).json(response.data);
    })

    }



module.exports = {
    getLaunches
}