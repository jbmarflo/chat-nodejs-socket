const messageRequest = require('../src/application/request/MessageRequest.js')
const messageFactory = require('../src/application/factory/MessageFactory.js')

module.exports = class GroupController {

    async getAll (req, res) {
        /*const User = require('../src/domain/model').user
        const listuser = await User.findAll()*/

        res.status(200).send({
            data: {},
            message: 'Se listo los grupos correctamente'
        });
    }

    async participate (req, res) {
        /*const User = require('../src/domain/model').user
        const listuser = await User.findAll()*/

        res.status(200).send({
            data: {},
            message: 'Se registro al grupo correctamente'
        });
    }

    async create (req, res) {
        /*const User = require('../src/domain/model').user
        const listuser = await User.findAll()*/

        res.status(200).send({
            data: {},
            message: 'Se creo el grupo correctamente'
        });
    }

}