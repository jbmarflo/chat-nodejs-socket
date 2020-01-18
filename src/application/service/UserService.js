const UserEntity = require('../../domain/entity/userEntity.js')
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


    async register (request) {

        const verifyUserExist = await this.reposity.getByUsername(request.username)
        const verifyEmailExist = await this.reposity.getByEmail(request.email)


        if (verifyUserExist || verifyEmailExist) {
            console.log('Existe el usuario')
            return false
        }

        await this.reposity.register(UserEntity.build(request.username, request.name, request.lastname, request.password, request.email))

        return true
    }


    async login (username, password) {
        const user = await this.reposity.getByUsername(username)

        if (!user) {
            console.log('No existe el usuario')
            return false
        }

        if (!UserEntity.verifyPassword(password, user.password)) {
            console.log('Password incorrecto')
            return false
        }

        return {
            data: user,
            token: '4547875'
        }

    }


}