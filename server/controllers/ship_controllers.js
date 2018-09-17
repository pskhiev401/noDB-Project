//This file is used handle the logic for CRUD
let launchinfo = [];
let faves = [];
let id = 0;

const axios = require('axios');

const getLaunches = (req, res) => {
    axios.get('https://api.spacexdata.com/v2/launches').then(response => {
    // console.log(response.data)
    launchinfo = response.data
    // console.log(launchinfo)
    res.status(200).json(launchinfo);})
};

const getFavorites = (req, res) => {
    res.status(200).json(faves);
};

const addFaves = (req, res) => {
    // console.log(req.body)
    faves.push(req.body);
    // console.log(faves)
    res.status(200).json(faves);
};

const deleteRocket = (req, res) => {
    console.log(req.params.id)
    let deleteIndex = faves.findIndex(launch => launch.element.flight_number == req.params.id);
    faves.splice(deleteIndex, 1);
    res.status(200).json(faves);
};

const updateRocketName = (req, res) => {
console.log(req.params);
console.log(req.body);
    let updateName = req.params.id;
    faves.forEach(
    rocket => rocket.flight_number == updateName ? Object.assign(rocket, req.body): null)
    res.status(200).json(faves);
};

module.exports = {
    getLaunches,
    getFavorites,
    addFaves,
    deleteRocket,
    updateRocketName
    }
