'use strict'

class AdminStoreUser {
  get rules() {
    let userID = this.ctx.params.id
    let rule = ''
    //significa que o usuário está atualizando
    if (userId) {
      rule = `unique:users,email,id,${userID}`
    } else {
      rule = 'unique:users,email|required'
    }
    return {
      email: rule,
      image_id: 'exists:image,id'
    }
  }
}

module.exports = AdminStoreUser
