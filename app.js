const express = require('express')
const bodyParser = require('body-parser')
var items=[];

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine", 'ejs');

app.get('/', function (req, res) {

   var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   var today  = new Date();
   var day=today.toLocaleDateString("en-US", options)
  

   res.render("list", {
      kindofDay: day,
      newItem:items
   });


  

})
app.post("/",function(req,res){
   var item=req.body.newItem;
   items.push(item);
   res.redirect("/")
})

app.listen(3000, function () {
   console.log("your html is avilable on port of 3000")
})