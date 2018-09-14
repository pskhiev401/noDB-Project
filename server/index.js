const express = require ('express');
    app = express ();
    port = 3001;
    bodyParser = require ('body-parser'),
    shipCtlr = require ('./controllers/ship_controllers')


app.use(bodyParser.json() );
app.get('/api/ships', shipCtlr.getLaunches) 


app.listen(port, () => { 
    console.log(`Server listening on port ${port}`); })