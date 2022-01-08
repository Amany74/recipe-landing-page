// const fetch = require("node-fetch");
// global.fetch = require("node-fetch");



exports.home = (req, res) =>{
    
    res.render('index',{'title':'RECIPE'});
};

exports.recipes = (req, res) => {
    res.render('recipes');
}