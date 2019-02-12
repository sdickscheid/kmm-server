//Update the name of the controller below and rename the file.
const projects = require("../controllers/projects.js")
const contacts = require("../controllers/contacts.js")
const crew = require("../controllers/crew");

module.exports = function(app){

  // Login
  app.post('/letmein', projects.login)

  // PROJECT MANAGEMENT ROUTES
  app.get('/projects', projects.getAll);

  app.get('/project/:id', projects.getOne);

  app.post('/projects', projects.create);

  app.delete('/delete/:id', projects.delete);

  app.get('/edit/:id', projects.edit);

  app.post('/update/:id', projects.update);

  // CREW ROUTE
  app.get('/crew', crew.getCrew);


  // CONTACT MANAGEMENT ROUTES
  app.get('/contacts', contacts.getAll);

  app.get('/contact/:id', contacts.getOne);

  // ADMIN PANEL
  app.post('/contacts', contacts.create);

  // HTML FORM
  app.post('/message', contacts.newContact);

  app.delete('/contact/delete/:id', contacts.delete);

  app.get('/contact/edit/:id', contacts.edit);

  app.post('/contact/update/:id', contacts.update);

}
