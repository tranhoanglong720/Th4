const express = require('express'); 
const multer=require('multer');
const app = express(); 
const port = 8080; 
const data=require('./store');
const upload= multer();

app.use(express.static('./templatales'));
app.set('view engine' ,'ejs');
app.set('views', './templatales');

app.get('/', function(_req, res){
   //return res.render('index');
   
   return res.render('index',{data:data});
})
app.post('/',upload.fields([]), (_req,res) => {
   // console.log('req.body =' ,_req.body);
    data.push(_req.body);
    return res.redirect('/')

});
app.listen(port, function(){
    console.log("Your app running on port " + port);
})
