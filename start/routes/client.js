'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

    //Product Routes
    Route.get('products', 'ProductController.index')
    Route.get('products/:id', 'ProductController.show')

    //Order Routes
    Route.get('orders', 'OrderController.index').middleware(['auth'])
    Route.get('orders/:id', 'OrderController.show').middleware(['auth'])
    Route.post('orders', 'OrderController.store')
    Route.put('orders/:id', 'OrderController.put')

    //Category Routes
    Route.get('categories', 'CategoryController.index')

}).prefix('v1').namespace('Client')