//Update the name of the controller below and rename the file.
const projects = require("../controllers/projects.js")
const contacts = require("../controllers/contacts.js")
const jwt = require("jsonwebtoken");
const jwtSecret = "25728047-1765-4954-865f-dd014fe00b74";
module.exports = function(app){

  // Login
  app.post('/letmein', projects.login)



  // HTML FORM - ADD CONTACT FORM DATA TO ADMIN PANEL
  app.post('/message', contacts.newContact);

  // PROTECTED ROUTES BELOW HERE
  app.use(jwtAuth);
  app.get('/projects', projects.getAll);
  app.get('/project/:id', projects.getOne);
  app.post('/projects', projects.create);
  app.delete('/delete/:id', projects.delete);
  app.post('/update/:id', projects.update);

  // ADMIN - CONTACT MANAGEMENT ROUTES
  app.get('/contacts', contacts.getAll);
  app.post('/contacts', contacts.create);

  // app.get('/contact/:id', contacts.getOne);
  // app.delete('/contact/delete/:id', contacts.delete);
  // app.get('/contact/edit/:id', contacts.edit);
  // app.post('/contact/update/:id', contacts.update);

}

function jwtAuth(req, res, next){
 //send as a query parameter!
 var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.params.token;
 // decode token
 if (token) {

   // verifies secret and checks exp
   jwt.verify(token, jwtSecret, function(err, decoded) {
     if (err) {
       return res.status(403).json({ success: false, message: 'Failed to authenticate token.' });
     } else {
       // if everything is good, save to request for use in other routes
       // req.decoded = req.session
       req.decoded = decoded;
       next();
     }
   });

 } else {

   // if there is no token
   // return an error
   return res.status(403).send({
       success: false,
       message: 'No token provided.'
   });
 }
}
