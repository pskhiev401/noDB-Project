const express = require ('express');
    bodyParser = require ('body-parser');
    shipCtlr = require ('./controllers/ship_controllers');
    app = express ();
    port = 3001;

app.use(bodyParser.json() );

// ------------ GET CRUD ------------
app.get('/api/ships/', shipCtlr.getLaunches)

app.get('/api/favorites/', shipCtlr.getFavorites)
app.post('/api/ships/', shipCtlr.addFaves)

app.get('/api/favorites/', shipCtlr.addFaves);
app.delete('/api/rocket/:id', shipCtlr.deleteRocket);

app.put('/api/rocket/:id', shipCtlr.updateRocketName);


app.listen(port, () => { 
    console.log(`Server listening on port ${port}`); })