"use strict";
const Models = require("../models");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getUsers = (res) => {
    Models.User.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

const createUser = (data, res) => {
    bcryptjs.hash(data.password, 10, (err, hash) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ result: 500, error: err.message });
        }

        data.password = hash;
        Models.User(data).save()
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.error(err);
                res.status(500).send({ result: 500, error: err.message });
            });
    });
};

const updateUser = (req, res) => {
    if (req.body.password) {
        bcryptjs.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ result: 500, error: err.message });
            }

            req.body.password = hash;

            Models.User.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
                .then(data => res.send({ result: 200, data: data }))
                .catch(err => {
                    console.error(err);
                    res.status(500).send({ result: 500, error: err.message });
                });
        });
    } else {
        Models.User.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.error(err);
                res.status(500).send({ result: 500, error: err.message });
            });
    }
}

const deleteUser = (req, res) => {
    Models.User.findByIdAndDelete(req.params.id)
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}

const loginUser = (data, res) => {
    Models.User.findOne({ userName: data.userName })
        .then(user => {
            if (!user) {
                return res.status(401).send({ result: 401, error: "Invalid credentials" });
            }

            bcryptjs.compare(data.password, user.password, (err, isMatch) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({ result: 500, error: err.message });
                }

                if (!isMatch) {
                    return res.status(401).send({ result: 401, error: "Invalid credentials" });
                }

                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.send({ result: 200, token: token });
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
getUsers, 
createUser,
updateUser,
deleteUser,
loginUser,
}