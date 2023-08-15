const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const passport = require('passport')
const mongose_URL = "mongodb+srv://mongoose:yoBRvHtaMg4DHuW4@cluster0.tdolxqi.mongodb.net/passport"
const app = express()
const port = 9000
const usersRouter = require('./Router/usersRouter')


app.use(express.json())
app.use(cors())
// Connection 
mongoose.connect(mongose_URL)
    .then(()=> {
        console.log('connection successfulll')
    })
    .catch((error)=>{
        console.log(error)
    })



    app.use('/users',usersRouter)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})