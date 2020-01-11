const Repository = require('../../common/repository/Repository.js')

module.exports = class UserSequelize extends Repository{
    async register (user) {
        return await this.model.create(user)
    }

    async getByUsername(username) {
        return await this.model.findOne({
            where: {
                username: username
            }
        })
    }

    async getByEmail(email) {
        return await this.model.findOne({
            where: {
                email: email
            }
        })
    }
}