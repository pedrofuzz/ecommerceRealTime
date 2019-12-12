'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {
    /**
     * Relacionamento cupom e pedido
     */
    orders() {
        return this.belongsToMany('App/Models/Order')
    }

    /**
     * Relacionamento cupom e usuário
     */
    users() {
        return this.belongsToMany('App/Models/User')
    }

    /**
     * Relacionamento cupom e produto
     */
    products() {
        return this.belongsToMany('App/Models/Product')
    }

    //formata para tipo data
    static get dates() {
        return ['created_at', 'updated_at', 'valid_from', 'valid_until']
    }
}

module.exports = Coupon
