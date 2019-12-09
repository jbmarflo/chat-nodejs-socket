module.exports = class MessageRequest {
	
	constructor (groupId, userId, text) {
		this.userId = userId
		this.groupId = groupId
		this.text = text 

		this.validate()
	}

	validate () {
		if (this.text.lenght > 300) {
			
		}
	}

}