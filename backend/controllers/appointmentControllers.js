'use strict';
const Models = require('../models');

const getAppointments = (req, res) => {
    Models.Appointments.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createAppointment = (req, res) => {
    const data = req.body;
    console.log(data);
    Models.Appointments(data)
        .save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateAppointment = (req, res) => {
    console.log(req.body);
    Models.Appointments.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deleteAppointment = (req, res) => {
    Models.Appointments.findByIdAndDelete(req.params.id)
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
};
