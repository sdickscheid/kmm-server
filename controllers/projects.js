const knex = require("../db/knex.js");

module.exports = {
  // GET ALL
  getAll: function(req, res) {
    knex('projects').then((result) => {

      res.render('projects', {projects: result})
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
        date_published: req.body.date_published,
        runtime: req.body.runtime,
        vimeo_id: req.body.vimeo_id,
        description: req.body.description,
        category_1: req.body.category_1,
        category_2: req.body.category_2,
        category_3: req.body.category_3,
        category_4: req.body.category_4
      }, "*")
      .then((result)=>{
        console.log(result);
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
      .then(()=>{

        res.redirect('/projects');
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

        res.render('edit', {user: result[0]})
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

        res.redirect('/user/'+req.params.id);
      })
      .catch((err) => {
        console.error(err)
      });
  }
}
