const express = require ('express');
const bodyParser =require ('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

require('./app/controllers/index')(app);


app.listen(3000, (req, res)=>{
    console.log('Server is running on port 3000')
})