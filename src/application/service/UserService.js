module.exports = class UserService {

    constructor(repository) {

        this.reposity = repository

    }
    async register(request) {
        const verifyUserExist = await this.reposity.getByUsername(request.username)
        if (verifyUserExist) {
            console.log('existe el usuario')
            return false
        }
        console.log(UserEntry.build(request.username, request.name, request.password))
        await this.reposity.register(UserEntry.buidl(request.username, request.name, request.password))
        return
    }

    create(request) {

        const getGroup = ''
        const getUser = ''
        const Message = ''

        // Guardar
        // this.reposity.save()

        return 'Guardado satisfactoriamente'
    }

    async getAll(groupId) {
        const message = await this.reposity.getAll(groupId)
        return message
    }
}