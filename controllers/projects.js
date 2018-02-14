const knex = require("../db/knex.js");
const jwt = require("jsonwebtoken");
const jwtSecret = "scott";
module.exports = {

  // Without JWT
  // login: function(req, res){
  //   knex('admins')
  //     .where('email', req.body.email)
  //     .then((admin)=>{
  //       admin = admin[0];
  //       if(!admin){
  //         res.sendStatus(400);
  //         return;
  //       }
  //       if(admin.password === req.body.password){
  //         res.json(admin);
  //       }else{
  //         res.sendStatus(400);
  //       }
  //     })
  // },

  // With JWT
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
          res.json({token: jwt.sign({admin}, jwtSecret)});
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
        client_name: req.body.project.client_name,
        company: req.body.project.company,
        project_name: req.body.project.project_name,
        published: req.body.project.published,
        length: req.body.project.length,
        vimeo_id: req.body.project.vimeo_id,
        description: req.body.project.description,
        c1: req.body.project.c1,
        c2: req.body.project.c2,
        c3: req.body.project.c3
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
      .then((deletedItem)=>{
        res.json(req.params.id);

      })
      .catch((err) => {
        console.error(err)
      });
  },

  //UPDATE PROJECT WITH CHANGES TO DATA IN EDIT FORM
  update: function(req, res){
    knex('projects')
      .update(req.body.edits)
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
