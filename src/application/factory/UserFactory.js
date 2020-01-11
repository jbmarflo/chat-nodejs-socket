const MessageService =  require('../service/MessageService.js')
const MessageSequelize =  require('../../infrastructure/database/MessageSequelize.js')
module.exports = class MessageFactory {

	constructor () {
		this.service = new MessageService(new MessageSequelize(require('../../domain/model').message))
	}

	create (request) {
		return this.service.create(request)
	}

	async getAll (groupId) {
		return await this.service.getAll(groupId)
	}
}