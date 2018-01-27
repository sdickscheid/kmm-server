//Update the name of the controller below and rename the file.
const projects = require("../controllers/projects.js")
module.exports = function(app){

  app.get('/projects', projects.getAll);

  app.get('/project/:id', projects.getOne);

  app.post('/projects', projects.create);

  app.get('/delete/:id', projects.delete);

  app.get('/edit/:id', projects.edit);

  app.post('/update/:id', projects.update);

}
