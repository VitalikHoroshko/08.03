// Part 1
const express = require('express');
const fs = require('fs');
const hostname = 'localhost';
const port = 8000;
const app = express();

app.get('/', function(req,res){
  res.send('Hello');
});
app.get('/about', function(req,res){
  res.send('<div><p>Bilunyk Anatolii</p> <p>University: King Danylo University</p> <p>Major: Software Ingineering</p> <p>Group: ІПЗс-22-1</p></div>')
});
app.listen(port, function(){
  console.log('running')
})
app.use((err, req, res,next)=>{
  console.log(err);
  res.status(500).send('error')
})

// Part 2

const express = require('express');
const fs = require('fs');
const hostname = 'localhost';
const port = 8000;
const app = express();
  
app.use(express.static('public'));
app.get('/', function(req,res){
  res.send('Hello');
}); 
app.get('/about', function(req,res){
  fs.readFile('./student.html', 'utf-8', (err, data)=>{
    if(err){
      res.writeHead(500, {'Content-Type':'text/html'})
      res.write('error');
      res.end();
    } 
    else {            
    res.writeHead(200,{ 'Content-Type':'text/html'  });            
    res.write(data);            
    res.end();       
    }    
  });
})
app.listen(port, function(){
  console.log('running')
})
app.use((err, req, res,next)=>{
  console.log(err);
  res.status(500).send('error')
})