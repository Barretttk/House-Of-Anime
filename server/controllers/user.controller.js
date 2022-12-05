const User = require('../models/user.model');

const createUser = (req,res) => {
    User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => {
        console.log(err)
        res.json(err);
    });
    };

const getAllUsers = (_req,res) => {
    User.find()
        .then(users => res.status (201).json(users))
        .catch(err => {
            console.log(err)
            res.status (400).json(err);
            })
        };

const getOneUser = (req,res) => {
    User.findOneById({ _id: req.params.id })
        .then(user => res.status (201).json(user))
        .catch(err => {
            console.log(err)
            res.status(400).json({
                msg: 'Note found',
                err
            });
        });
    };

const updateUser = (req,res) => {
    User.findByIdAndUpdateUser({_id: req.params.id}, req.body,{
        new: true, 
        runValidators: true
    })
        .then(user => res.status(201).json(user))
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        });
};

const deleteUser = (req,res) => {
    User.deleteOne({_id:req.params.id})
        .then(result => res.status (201).json(result))
        .catch(err => {
            console.log(err)
            res.status (400).json(res);
            });
        };




module.exports = { createUser, getAllUsers, getOneUser, updateUser, deleteUser };



