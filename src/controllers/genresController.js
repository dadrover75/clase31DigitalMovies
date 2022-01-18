const db = require('../../models');
const Op = db.Sequelize.Op;

const genresController = {
    list: (req, res) => {
        db.Genres.findAll()
            .then(function (genres) {
                res.render('../views/genresList', { genres });
            })
    },
    detail: (req, res) => {
        db.Genres.findByPk(req.params.id)
            .then(function (genre) {
                res.render('../views/genresDetail', { genre });
            })
            .catch(function (error) {
                res.render('../views/error', { error });
            })
    },
    // new: (req, res) => {
    //     db.Genres.findAll({
    //         order: [['title', 'ASC']]
    //     })
    //         .then(function (genres) {
    //             res.render('../views/genresList', { genres });
    //         })
    //         .catch(function (error) {
    //             res.render('../views/error', { error });
    //         })

    // },
    // recomended: (req, res) => {
    //     db.Genres.findAll({
    //         order: [['release_date', 'DESC']],
    //         limit: 5
    //     })
    //         .then(function (genres) {
    //             res.render('../views/genresList', { genres });
    //         })
    //         .catch(function (error) {
    //             res.render('../views/error', { error });
    //         })
    // }
}
module.exports = genresController;
