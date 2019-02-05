const knex = require("../db/knex.js");

module.exports = {

  login: function(req, res){
    knex('admins')
      .where('email', req.body.email)
      .then((admin)=>{
        admin = admin[0];
        if(!admin){
          res.sendStatus(400);
          return;
        }
        if(admin.password === req.body.password){
          res.json(admin);
        }else{
          res.sendStatus(400);
        }
      })
  },

  // GET ALL
  getAll: function(req, res) {
    knex('projects').then((result) => {

      res.send(result)
    })
    .catch((err) => {
      console.error(err)
    });
  },

  // GET ONE
  getOne: function(req, res){
    knex('projects')
      .where('id', req.params.id)
      .then((result)=>{

        res.render('profile', {project: result[0]});
      })
      .catch((err) => {
        console.error(err)
      });
  },

  // CREATE
  create: function(req, res){

    knex('projects')
      .insert({
        client_name: req.body.client_name,
        company: req.body.company,
        project_name: req.body.project_name,
        published: req.body.published,
        length: req.body.length,
        vimeo_id: req.body.vimeo_id,
        description: req.body.description,
        c1: req.body.c1,
        c2: req.body.c2,
        c3: req.body.c3
      }, "*")
      .then((result)=>{
        res.redirect("/projects")
      })
      .catch((err) => {
        console.error(err)
      });

  },

  //DELETE
  delete: function(req, res){
    knex('projects')
      .del()
      .where('id', req.params.id)
      .then((deletedItem)=>{
        res.json(req.params.id);
      })
      .catch((err) => {
        console.error(err)
      });
  },

  //EDIT
  edit: function(req, res){
    knex('projects')
      .where('id', req.params.id)
      .then((result)=>{

        res.render('edit', {project: result[0]})
      })
      .catch((err) => {
        console.error(err)
      });
  },

  //UPDATE
  update: function(req, res){
    knex('projects')
      .update(req.body)
      .where('id', req.params.id)
      .then(()=>{
        knex('projects')
          .then((projects)=>{
            res.json(projects);
          })
      })
      .catch((err) => {
        console.error(err)
      });
  }
}
