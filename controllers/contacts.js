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
        name: req.body.name,
        company: req.body.company,
        website: req.body.website,
        email: req.body.email,
        phone: req.body.phone,
        client_status: req.body.client_status,
        message: req.body.message
      })
      .then((result)=>{
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
        res.render("thanks")
      })
      .catch((err) => {
        console.error(err)
      });
  },

  //DELETE ADMIN PANEL
  delete: function(req, res){
    knex('contacts')
      .del()
      .where('id', req.params.id)
      .then(() => res.json(req.params.id))
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

  //UPDATE ADMIN PANEL
  update: function(req, res){
    knex('contacts')
      .update(req.body)
      .where('id', req.params.id)
      .then(()=>{
        knex('contacts')
        .select()
        .then(contactList => res.json(contactList))
      })
      .catch((err) => {
        console.error(err)
      });
  }
}
