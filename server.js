const express = require("express");
const cors = require("cors");
const knex = require('knex');
const app = express();
const bcrypt= require('bcrypt-nodejs');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const image = require('./controllers/image');
const profile = require('./controllers/profile');
const {sendClarifaiRequest} = require('./controllers/imageurl');


app.use(cors());
app.use(express.json());

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port : 5432,
        user : 'szymon',
        password : 'lujek123',
        database : 'smartbrain'
    }
});

app.get('/',(req,res)=>{
    res.send('success');
})

app.listen(3001,()=>{
    console.log('app is running on port 3001')
})

app.post('/signin', signin.signinHendler(db, bcrypt))

app.post('/register', register.handleRegister(db, bcrypt))

app.get('/profile/:id', profile.profileHendler(db))

app.put('/image', image.imageHendler(db))

app.post('/imageurl', async (req, res) => {
    try {
        const imageURL = req.body.imageURL;
        const clarifaiResponse = await sendClarifaiRequest(imageURL);
    
        res.json({ clarifaiResponse });
        } catch (error) {
        console.error('Błąd podczas obsługi zapytania Clarifai:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }})

