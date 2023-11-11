let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.userController.getLogins(res);
})

router.post('/login', (req, res) => {
    Controllers.loginController.login(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.loginController.updateLogin(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.loginController.deleteLogin(req, res)
})

module.exports = router;
