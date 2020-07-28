/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  'get /api/core/menus': 'CoreController.menus',
  'get /api/core/screen-content/:id': 'CoreController.screenContent',
  'get /api/core/fieldTypes': 'CoreController.fieldTypes',
  'get /api/core/template-content/:templateId': 'CoreController.fields',


  'post /uaa/oauth/token':'AuthController.authenticate',
  'post /api/core/general-form/save':'TransactionRecord.save',
  'post /api/core/template-content':'CoreController.templateSave',


  'get /api/core/records/:screenId': 'TransactionRecord.index',
  'post /api/core/records/listTransactions/:screenId': 'TransactionRecord.listTransactions',

  //Companies

  'get /api/core/companies': 'CompanyController.index',
  'post /api/core/companies': 'CompanyController.create',
  'get /api/core/companies/:id': 'CompanyController.show',
  'put /api/core/companies/:id': 'CompanyController.update',
  'delete /api/core/companies/:id': 'CompanyController.destroy',

  //Clients

  'get /api/core/clients': 'ClientController.index',
  'post /api/core/clients': 'ClientController.create',
  'get /api/core/clients/:id': 'ClientController.show',
  'put /api/core/clients/:id': 'ClientController.update',
  'delete /api/core/clients/:id': 'ClientController.destroy',

  //Users

  'get /api/core/users': 'UserController.index',
  'post /api/core/users': 'UserController.create',
  'get /api/core/users/:id': 'UserController.show',
  'put /api/core/users/:id': 'UserController.update',
  'delete /api/core/users/:id': 'UserController.destroy',
  'post /api/core/users/:id/addClients': 'UserController.addClients',
  'get /api/core/users/:id/getClients': 'UserController.getClients',

  //ScreenTemplate
  'get /api/core/screentemplates': 'ScreenTemplateController.index',
  'post /api/core/screentemplates': 'ScreenTemplateController.create',
  'get /api/core/screentemplates/:id': 'ScreenTemplateController.show',
  'put /api/core/screentemplates/:id': 'ScreenTemplateController.update',
  'delete /api/core/screentemplates/:id': 'ScreenTemplateController.destroy',
  

};
