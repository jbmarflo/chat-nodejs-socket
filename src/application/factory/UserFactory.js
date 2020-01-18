const MessageService =  require('../service/MessageService.js')
const MessageSequelize =  require('../../infrastructure/database/MessageSequelize.js')
module.exports = class UserFactory {

	constructor () {
		this.service = new UserService(new MessageSequelize(require('../../domain/model').message))
	}

	create (request) {
		return this.service.create(request)
	}

	async getAll (groupId) {
		return await this.service.getAll(groupId)
	}
}