module.exports = class MessageService {

    constructor (repository) {

        this.reposity = repository

    }

    create (request) {

        const getGroup = ''
        const getUser = ''
        const Message = ''

        // Guardar
        // this.reposity.save()

        return 'Guardado satisfactoriamente'
    }

    async getAll (groupId) {
        const message = await this.reposity.getAll(groupId)
        return message
    }
}