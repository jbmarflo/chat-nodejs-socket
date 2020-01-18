const messageRequest = require('../src/application/request/MessageRequest.js')
const messageFactory = require('../src/application/factory/MessageFactory.js')

module.exports = class MessageController {

	// post
	create (req, res) {
		const MessageFactoryObj =  new messageFactory()
		const mesdage =  MessageFactoryObj.create(
            new messageRequest(
                req.params.id,
                req.body.userId,
                req.body.text
            ))

        res.status(200).send({
			message: mesdage
		});
	}
	// get
	async getAll (req, res) {
		/*const User = require('../src/domain/model').user
        const listuser = await User.findAll()*/
        const MessageFactoryObj =  new messageFactory()

        res.status(200).send({
			data: await MessageFactoryObj.getAll(req.params.id) || [],
            message: 'se listo correctamente'
        });
	}

	// delete
	delete () {

	}

}