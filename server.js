const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app =express();



hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('screameIt', (text)=> {
      return text.toUpperCase();
})

app.get('/', (req,res)=>{
    res.render('home.hbs', {
       pageTitle: "Home",
       welcomeTitle: "Welcome to my website",
  
       
       
       
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs', {
        pageTitle: "About Page",
        
    })
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: 'unable to find page',
        errorcode:404
    })
})

app.listen(port, ()=>{
    console.log(`server is up running on port ${port}`)
});



