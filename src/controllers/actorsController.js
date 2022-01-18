const db = require('../../models');
const Op = db.Sequelize.Op;

const actorsController = {
    list: (req, res) => {
        db.Actors.findAll()
            .then(function (actors) {
                console.log(actors)
                res.render('../views/actorsList', { actors });
            })
            .catch(function (error) {
                res.render('../views/error', { error });
            })
    },
    detail: (req, res) => {
        db.Actors.findByPk(req.params.id)
            .then(function (actor) {
                res.render('../views/actorsDetail', { actor });
            })
            .catch(function (error) {
                res.render('../views/error', { error });
            })
    },
    // new: (req, res) => {
    //     db.actors.findAll({
    //         order: [['title', 'ASC']]
    //     })
    //         .then(function (actors) {
    //             res.render('../views/actorsList', { actors });
    //         })
    //         .catch(function (error) {
    //             res.render('../views/error', { error });
    //         })

    // },
    // recomended: (req, res) => {
    //     db.actors.findAll({
    //         order: [['release_date', 'DESC']],
    //         limit: 5
    //     })
    //         .then(function (actors) {
    //             res.render('../views/actorsList', { actors });
    //         })
    //         .catch(function (error) {
    //             res.render('../views/error', { error });
    //         })
    // }
}
module.exports = actorsController;
