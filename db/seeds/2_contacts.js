exports.seed = function(knex, Promise) {
  return knex('contacts').del()
    .then(function () {

      return knex('contacts').insert([
        {name: 'John Doe', company: 'AAA', website: 'www.domain.com', email: 'jdoe@aaa.com', phone: '602-555-1212', client_status: 'New', message: 'Hi, my company is looking to film a video. Here is my message from the contact form. Please get back to me as soon as possible. Thanks, John!', followUp_date: '08/15/2018', followUp_status: 'Mtg. Scheduled', promo_offerred: 'No', promo_discount: '10%', promo_expires: '09/15/2018', promo_status: 'Pending'},

      ]);
    });
};
