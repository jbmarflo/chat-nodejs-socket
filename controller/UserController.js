const userRegisterRequest = require('../src/application/request/UserRegisterRequest.js')
const UserFactory = require('../src/application/factory/UserFactory.js')

module.exports = class UserController {

    async login (req, res) {
        const userFactory = new UserFactory()
        const email = req.body.username

        if (email.length == 0) {
            res.status(400).send({
                data: null,
                message: 'Bad request'
            });
        }

        const getUser = await userFactory.login(
            req.body.username,
            req.body.password
        )
        res.status(200).send({
            data: getUser,
            message: 'Se ha logeado satisfactoriamente'
        });
    }

    async register (req, res) {
       const userFactory = new UserFactory()
        await userFactory.register(new userRegisterRequest(
            req.body.username,
            req.body.name,
            req.body.lastname,
            req.body.password,
            req.body.email
        ))

        res.status(200).send({
            message: 'Se ha registrado satisfactoriamente'
        });
    }

}