let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.getUsers(res);
});

router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
});


router.put('/:id', (req, res) => {
    req.body.id = req.params.id;
    Controllers.updateUser(req, res);
});


router.delete('/:id', (req, res) => {
    Controllers.deleteUser(req, res);
});


router.post('/login', (req, res) => {

    Controllers.userController.loginUser(req.body, res);
});

module.exports = router;
