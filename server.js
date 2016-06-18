const express=require('express');
const {json}= require('body-parser');
const app=express()
const middleware= require('./controllers/middleware.js');
const mainCtrl= require('./controllers/mainCtrl.js');
const port=8082;

app.use (json());

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/occupations/latest', mainCtrl.getLatestOccupation)
app.get('/occupations/order', mainCtrl.getOccupationsByOrder)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbiesType);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);

app.get('/skills', mainCtrl.getSkills);
app.get('/skills/experience', mainCtrl.getSkills);
app.post('/skills',
middleware.generateId,
mainCtrl.addSkills);

app.get('/secrets/:username/:pin', mainCtrl.checkLoginInfo)



app.listen( port, () => {
  console.log(`express is listening on ${port}`);
} );
