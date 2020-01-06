'use strict'

class AuthLogin {
  get rules() {
    return {
      email: 'required|email|exists:users,email',
      password: 'required|'
    }
  }

  get messages() {
    return {
      'email.required': 'O campo email é obrigatório',
      'email.exists': 'Este email não existe',
      'email.email': 'Email inválido',
      'password.required': 'O campo senha é obrigatório'
    }
  }
}

module.exports = AuthLogin
