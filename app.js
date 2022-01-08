// obj creation first 
const express = require('express');
const res = require('express/lib/response');
const app = express();
const port =  3000 ;

app.use(express.urlencoded({extended: true}));  //pass url encoded bodies

app.set('view engine' , 'ejs');

//  ROUTING
const router =require('./routes');
app.use('/',router);


// RUN server
app.listen(port , () => {console.log(`server listening on port ${port}`)})

