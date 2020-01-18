const uuidv1 = require('uuid/v1')
const bcrypt = require('bcrypt')
const saltRounds = 12

module.exports = class UserEntity {

    constructor (){
        this.id =  ''
        this.username = ''
        this.name = ''
        this.lastname = ''
        this.password = ''
        this.email = ''
    }

    static build (username, name, lastname, password, email) {
        const user = new UserEntity()
        user.id = uuidv1()
        user.username = username
        user.name = name
        user.lastname = lastname
        user.password = bcrypt.hashSync(password, saltRounds)
        user.email = email

        return user
    }

    static verifyPassword (passwordText, hash) {
        return bcrypt.compareSync(passwordText, hash)
    }
}