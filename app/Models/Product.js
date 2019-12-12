'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    image(){
        return this.belongsTo('App/Models/Image')
    }

    /**
     * relacionamento entre produto e imagens (fotos do produto)
     */
    images(){
        return this.belongsToMany('App/Models/Image')
    }

    /**
     * Relacionamento entre produtos e categorias
     */
    categories(){
        return this.belongsToMany('App/Models/Category')
    }

    /**
     * Relacionamento entre produtos e cupons
     */
    coupons(){
        return this.belongsToMany('App/Models/Coupon')
    }
}

module.exports = Product
