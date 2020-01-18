const Repository = require('../../common/repository/Repository.js')

module.exports = class UserSequelize extends Repository{
    async getAll (id) {
        return await this.model.findAll({
            where: {
                userId: id
            }
        })
    }
}