//This file is used handle the logic for CRUD
let launchinfo = [];
let faves = [];


const axios = require('axios');


const getLaunches = (req, res) => {
    axios.get('https://api.spacexdata.com/v2/launches').then(response => {
    // console.log(response.data)
    launchinfo = response.data
    // console.log(launchinfo)
    res.status(200).json(launchinfo);
    })

    }

const getFavorites = (req, res) => {
    res.status(200).json(faves);
}


const addFaves = (req, res) => {
    console.log(req.body)
    faves.push(req.body);
    console.log(faves)
    res.status(200).json(faves);
}
        

// const updateComments = (req, res) => {

//     },

// const deleteComments = (req, res) => {

//     },


module.exports = {
    getLaunches,
    addFaves,
    getFavorites
    }
