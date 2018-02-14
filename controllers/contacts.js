const knex = require("../db/knex.js");

module.exports = {
  // GET ALL
  getAll: function(req, res) {
    knex('contacts').then((result) => {

      res.send(result)
    })
    .catch((err) => {
      console.error(err)
    });
  },

  // GET ONE
  getOne: function(req, res){
    knex('contacts')
      .where('id', req.params.id)
      .then((result)=>{

        res.render('contact', {contact: result[0]});
      })
      .catch((err) => {
        console.error(err)
      });
  },

  // CREATE (ADMIN PANEL)
  create: function(req, res){
    knex('contacts')
      .insert({
        name: req.body.contact.name,
        company: req.body.contact.company,
        website: req.body.contact.website,
        email: req.body.contact.email,
        phone: req.body.contact.phone,
        client_status: req.body.contact.client_status,
        message: req.body.contact.message
      }, "*")
      .then((result)=>{
        console.log("ADMIN Results", result);
        res.redirect("/contacts")
      })
      .catch((err) => {
        console.error(err)
      });
  },

  // CREATE (HTML FORM )
  newContact: function(req, res){
    knex('contacts')
      .insert({
        name: req.body.name,
        company: req.body.company,
        website: req.body.website,
        email: req.body.email,
        phone: req.body.phone,
        client_status: req.body.client_status,
        message: req.body.message
      }, "*")
      .then((result)=>{
        console.log("HTML Results", result);
        res.render("thanks")
      })
      .catch((err) => {
        console.error(err)
      });
  },

  //DELETE
  delete: function(req, res){
    knex('contacts')
      .del()
      .where('id', req.params.id)
      .then((deletedItem)=>{
        res.status(200)

        .send(deletedItem);
      })
      .catch((err) => {
        console.error(err)
      });
  },

  //EDIT
  edit: function(req, res){
    knex('contacts')
      .where('id', req.params.id)
      .then((result)=>{

        res.render('edit', {contact: result[0]})
      })
      .catch((err) => {
        console.error(err)
      });
  },

  //UPDATE
  update: function(req, res){
    knex('contacts')
      .update(req.body)
      .where('id', req.params.id)
      .then(()=>{

        res.redirect('/contact/'+req.params.id);
      })
      .catch((err) => {
        console.error(err)
      });
  }
}
