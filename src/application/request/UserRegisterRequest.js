module.exports = class UserRegisterRequest {
	
	constructor (username, name, lastname, password, email) {
		this.username = username || ''
		this.name = name || ''
		this.lastname = lastname || ''
		this.password = password || ''
		this.email = email || ''

		this.validate()
	}

	validate () {
		if (this.password.lenght < 6) {
			console.log('Password invalido')
		}
		if (this.username.lenght == 0) {
			console.log('Username invalido')
		}
	}

}