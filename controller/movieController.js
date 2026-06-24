const movieModel = require('../model/movieModel');
const getmovie = (req, res) => {
    res.json(movieModel);
};
const getmovieById = (req, res) => {
    const movieMovies = movieModel.find(s => s.id === parseInt(req.params.id));
    if(!movieMovies){
        res.status(404).json({message: "Movie not found"});
    } else {
        res.json(movieMovies);
    }
};
module.exports = {getmovie, getmovieById};