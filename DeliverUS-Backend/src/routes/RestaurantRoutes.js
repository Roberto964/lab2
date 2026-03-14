import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  app.route('/restaurants')
    .get(// este lo lee
      RestaurantController.index
    )
    .post(// post es para CREAR
      RestaurantController.create
    )
  app.route('/restaurants/:restaurantId/products')// esto es al acceder a un producto en concreto
    .get(
      RestaurantController.show
    )
    .put(// PUT es para actualizar
      RestaurantController.update
    )
    .delete(
      RestaurantController.destroy
    )
  app.route('/restaurant/:restaurantId')
    .get(
      RestaurantController.show
    )
    .put(
      RestaurantController.update
    )
    .delete(
      RestaurantController.destroy
    )
}
export default loadFileRoutes
