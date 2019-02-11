const knex = require("../db/knex.js");
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
const { TO_EMAIL_ADDRESS, SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);
const moment = require('moment');

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

  // SEND CONTACT TO EMAIL

  sendMail(contact) {
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
    const { 
      name,
      company,
      website,
      email,
      phone,
      client_status,
      message
    } = req.body;
    knex('contacts')
      .insert({
        name,
        company,
        website,
        email,
        phone,
        client_status,
        message,
        followUp_date: client_status === 'New Client' ? moment(new Date()).add(7, 'days') : moment(new Date())
      }, "*")
      .then(() => {
        const msg = {
          to: TO_EMAIL_ADDRESS,
          from: email,
          subject: 'New contact registered',
          text: `
          Name: ${name}
          Phone number: ${phone}
          Client status: ${client_status}
          Comments: ${message}`,
          // html: '<strong>and easy</strong'
        }
        sgMail.send(msg, (error, result) => {
          if(error) {
            console.log("ERROR", error.toString())
          }
          else {
            console.log("EMAIL SENT SUCCESSFULLY")
          }
        });
        res.render("thanks");
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
