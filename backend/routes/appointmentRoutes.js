let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.appointmentController.getAppointments(res);
});

router.post('/create', (req, res) => {
    Controllers.appointmentController.createAppointment(req.body, res);
});

router.put('/:id', (req, res) => {
    Controllers.appointmentController.updateAppointment(req, res);
});

router.delete('/:id', (req, res) => {
    Controllers.appointmentController.deleteAppointment(req, res);
});

module.exports = router;
