'use strict'

class AuthRegister {
  get rules() {
    return {
      name: 'required',
      surname: 'required',
      email: 'required|email|unique:users,email',
      password: 'required|confirmed'
    }
  }

  get messages() {
    return {
      'name.required': 'O campo nome é obrigatório',
      'surname.required': 'O campo sobrenome é obrigatório',
      'email.required': 'O email é obrigatório',
      'email.email': 'Email inválido',
      'email.unique': 'Este email já está em uso',
      'password.required': 'A senha é obrigatória',
      'password.confirmed': 'As senhas não correspondem'
    }
  }
}

module.exports = AuthRegister
