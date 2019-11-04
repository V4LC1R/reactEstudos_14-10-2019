'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

  Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')

  Route.post('properties/:id/images', 'ImageController.store')
  .middleware('auth')
    //middlewareauth vai garantir que usuários não autenticados não possam utilizar essas rotas.

    Route.get('images/:path', 'ImageController.show')  