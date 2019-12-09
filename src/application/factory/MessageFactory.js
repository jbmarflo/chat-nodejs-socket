const MessageService =  require('../service/MessageService.js')

module.exports = class MessageFactory {

	constructor () {
		this.service = new MessageService('')
	}

	create (request) {
		return this.service.create(request)
	}

}