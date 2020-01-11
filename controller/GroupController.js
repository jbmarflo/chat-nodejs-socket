const messageRequest = require('../src/application/request/MessageRequest.js')
const messageFactory = require('../src/application/factory/MessageFactory.js')

module.exports = class UserController {

    async login (req, res) {
        /*const User = require('../src/domain/model').user
        const listuser = await User.findAll()*/

        res.status(200).send({
            data: {},
            message: 'Se ha logeado satisfactoriamente'
        });
    }

    async register (req, res) {
        /*const User = require('../src/domain/model').user
        const listuser = await User.findAll()*/

        res.status(200).send({
            data: {},
            message: 'Se ha registrado satisfactoriamente'
        });
    }

}