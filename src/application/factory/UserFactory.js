
const UserService =  require('../service/UserService.js')
const UserSequelize =  require('../../infrastructure/database/UserSequelize.js')
module.exports = class UserFactory {

	constructor () {
		this.service = new UserService(new UserSequelize(require('../../domain/model').user))
	

	async register (request) {
		return this.service.register(request)
	}

	async login (username, password) {
		return await this.service.login(username, password)
	}
}