//express declarations
var express = require('express');
var bodyParser = require("body-parser");
var session = require('express-session');
var mongoose = require('mongoose');
let path = require('path');
mongoose.connect('mongodb://localhost/black_belt');
mongoose.Promise = global.Promise;

var app = express();
app.use(session({secret: 'codingdojorocks'})); 
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
//This is a skeleton for a schema please modify!
var PollSchema = new mongoose.Schema({
    question: String,
    option1: {name:String, votes:0},
    option2: {name:String, votes:0},
    option3:{name:String, votes:0},
    option4:{name:String, votes:0},
    userName:String,
   }, {timestamps:true})
   mongoose.model('Poll', PollSchema); // We are setting this Schema in our Models as 'User'
   var Poll = mongoose.model('Poll') // We are retrieving this Schema from our Models, named 'User'
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/show', (req,res) => {
    Poll.find({}, (err,results)=>{
        if(err){
            res.json({message: 'YOU GOT AN ERRORRRR'});
        }else{
            res.json(results);
        }
    })
})

app.post('/create', (req,res)=>{
    let newPoll = Poll();
    newPoll.question = req.body.question;
    newPoll.option1.name = req.body.option1;
    newPoll.option1.votes = 0;
    newPoll.option2.name = req.body.option2;
    newPoll.option2.votes = 0;
    newPoll.option3.name = req.body.option3;
    newPoll.option3.votes = 0;
    newPoll.option4.name = req.body.option4;
    newPoll.option4.votes = 0;
    newPoll.userName = req.body.userName;
    newPoll.save((err,results)=>{
        if(err){
            res.json({message: 'YOU GOT AN ERRORRRR'});
        }else{
            res.json(results);
        }
    })

})

app.get('/delete/:id', (req,res)=>{
    Poll.remove({_id:req.param('id')}, (err,result)=>{
        res.json(result);
    })

})

app.get('/findOne/:id', (req,res)=>{
    Poll.findOne({_id:req.param('id')}, (err,result)=>{
        if(err){
            res.json({message: 'YOU GOT AN ERRORRRR'});
        }else{
            res.json(result);
        }
    })
})

app.get('/update/:id/:option', (req,res)=>{
    option = req.param('option')
    Poll.findOne({_id:req.param('id')}, (err,polls)=>{
          polls[option].votes+=1;
          polls.save((err)=>{
            res.json(err);

          }
        
        )

    })

})

app.all("*", (request, response) => { response.sendFile(path.resolve("../client/dist/index.html")) });



// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
