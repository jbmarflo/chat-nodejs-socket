const messageRequest = require('../src/application/request/MessageRequest.js')
const messageFactory = require('../src/application/factory/MessageFactory.js')

module.exports = class MeesageController { 

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
	getAll () {

	}

	// delete
	delete () {

	}

}