import db from ("../models")

module.exports = {
    findAllSaved: (req, res) => {
        db.savedBooks
        .find()
        .then(function(result){
            res.json(result)
        })
        .catch(err => res.status(422).json(err));
    },

    create: (req, res) => {
        db.savedBooks
        .create({
            title: req.body.title,
            link: req.body.link,
            author: req.body.author,
            desription: req.body.description,
            id: req.body.id
        })
    },
    remove: (req, res) => {
        db.savedBooks
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
} 