import express from 'express';
import FavoritesRouter from './routes/FavoritesRouter';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5656;


//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API Routes
app.use('/api/Favorites', FavoritesRouter);

// Connecting to the database
const db = mongoose.connect('mongodb://Ambar:dbFavs123@ds259912.mlab.com:59912/favsdb',{useNewUrlParser: true});

//Running the server
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})