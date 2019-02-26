const moment = require('moment');

exports.seed = function(knex, Promise) {
  return knex('contacts').del()
    .then(function () {

      return knex('contacts').insert([
        {name: 'John Doe', company: 'AAA', website: 'www.domain.com', email: 'jdoe@aaa.com', phone: '602-555-1212', client_status: 'New Client', message: 'Hi, my company is looking to film a video. Thanks, John!', followUp_date: moment('08/15/2018', 'MM/DD/YYYY'), followUp_status: 'Mtg. Scheduled', promo_offerred: 'No', promo_discount: '10%', promo_expires: '09/15/2018', promo_status: 'Pending'},

        {name: 'Julie Smith', company: 'ABC', website: 'www.abc.com', email: 'julie.smith@abc.com.com', phone: '602-111-9988', client_status: 'Existing Client', message: 'Love your site. Need video. Please contact, Julie', followUp_date: moment('08/15/2018', 'MM/DD/YYYY'), followUp_status: 'Mtg. Scheduled', promo_offerred: 'No', promo_discount: '10%', promo_expires: '09/15/2018', promo_status: 'Pending'},

      ]);
    });
};
