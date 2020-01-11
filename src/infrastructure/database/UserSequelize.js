const Repository = require('../../common/repository/Repository.js')

module.exports = class MessageSequelize extends Repository{
    async getAll (groupId) {
        return await this.model.findAll({
            where: {
                groups_id: groupId
            }
        })
    }
}