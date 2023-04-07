const routes = require('express').Router();
const controller = require('../controllers/controller');


// adding and getting categories that means income, invesment and expence with their colors
routes.route('/api/categories')
    .post(controller.create_Categories)
    .get(controller.get_Categories)

// creating, reading and deletign the transcations
routes.route('/api/transaction')
    .post(controller.create_Transaction)
    .get(controller.get_Transaction)
    .delete(controller.delete_Transaction)

// getting the categoties and transcations at same time
routes.route('/api/labels')
    .get(controller.get_Labels)


module.exports = routes;