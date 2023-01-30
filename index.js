const express = require('express');
const cors = require('cors');
const app = express();
const dbConnect = require('./utils/dbConnect');
const accUserRouters = require('./routes/v1/accUser.route');
const viewCount = require('./middleware/viewCount');
const { rateLimit } = require('express-rate-limit');
const errorHandler = require('./middleware/erroeHandel');
const port = process.env.port || 5000;


//user:AccUser
//Pass:Q3ZSqIBcgGbitjwq


// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.set("view engine", "ejs");

// app.use(viewCount)

// Apply the rate limiting middleware to all requests
// app.use(limiter)

dbConnect

app.use('/api/v1/accUser', accUserRouters)

app.get('/', (req, res) => {
  // res.send('Hello World!');
  // res.sendFile(__dirname+'/public/index.html');
  // res.render("index.ejs",{id:23});
  res.render("home.ejs", {
    id: 2
  }
  )
})

app.all('*', (req, res) => {
  res.send('Route is Not Found');
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// global errorHandel
process.on('uncaughtException',(error)=>{
  console.log(error.name,error.message);
  app.close(()=>{
    process.exit(1);
  });
  
})
