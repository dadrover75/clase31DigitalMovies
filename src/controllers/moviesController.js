const db = require('../../models');
const Op = db.Sequelize.Op;

const moviesController = {
    list: (req, res) => {
        db.Movies.findAll()
            .then(function (movies) {
                res.render('../views/moviesList', { movies });
            })
    },
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id)
            .then(function (movie) {
                res.render('../views/moviesDetail', { movie });
            })
            .catch(function (error) {
                res.render('../views/error', { error });
            })
    },
    new: (req, res) => {
        db.Movies.findAll({
            order: [['title', 'ASC']]
        })
            .then(function (movies) {
                res.render('../views/moviesList', { movies });
            })
            .catch(function (error) {
                res.render('../views/error', { error });
            })

    },
    recomended: (req, res) => {
        db.Movies.findAll({
            order: [['release_date', 'DESC']],
            limit: 5
        })
            .then(function (movies) {
                res.render('../views/moviesList', { movies });
            })
            .catch(function (error) {
                res.render('../views/error', { error });
            })
    },
    add: function (req, res) {
        // TODO   
    },
    create: function (req, res) {
        // TODO
    },
    edit: function(req, res) {
        // TODO
    },
    update: function (req,res) {
        // TODO
    },
    delete: function (req, res) {
        // TODO
    },
    destroy: function (req, res) {
        // TODO
    }

}
module.exports = moviesController;
