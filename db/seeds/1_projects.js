exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {

      return knex('projects').insert([
        {client_name: 'August Colosimo', company:'Homesmart', project_name: 'Meet August', date_published: 'May 2017', runtime: '6:42', vimeo_id: '228282012', description: '', category_1: 'all', category_2: 'About', category_3: '', category_4: ''},

        {client_name: 'Kenton Knepper', company: 'Wonder Wizards', project_name: 'Music Was The Magic', date_published: 'June 2016', runtime: '16:55', vimeo_id: '212521921', description: '', category_1: 'all', category_2: 'Documentary', category_3: '', category_4: ''},

        {client_name: 'Nicole Felker Bergstrom', company: 'Northern Arizona Signs', project_name: 'NOAZ Instroduction', date_published: 'August 2017', runtime: '4:11', vimeo_id: '225881054', description: '', category_1: 'all', category_2: 'About', category_3: 'Commercial', category_4: ''},

        {client_name: 'Jennifer Toolan', company: 'The Art of Jennifer Toolan', project_name: 'Reality Show Audition Reel', date_published: 'August 2017', runtime: '1:00', vimeo_id: '219302946', description: '', category_1: 'all', category_2: 'About', category_3: 'Audition', category_4: 'Commercial'},

        {client_name: 'Dr. Lynne', company: 'Desert Jewel Institute', project_name: 'About Me - Dr. Lynne', date_published: 'June 2017', runtime: '4:16', vimeo_id: '222035664', description: '', category_1: 'all', category_2: 'About', category_3: 'Commercial', category_4: ''},

        {client_name: 'Nicole Felker Bergstrom', company: 'Northern Arizona Signs', project_name: 'NOAZ - A Closer Look', date_published: 'August 2017', runtime: '3:55', vimeo_id: '226229978', description: '', category_1: 'all', category_2: 'About', category_3: 'Commercial', category_4: ''},

        {client_name: 'Nicole Felker Bergstrom', company: 'Northern Arizona Signs', project_name: 'About Me - Hillarie', date_published: 'August 2017', runtime: '1:00', vimeo_id: '226383643', description: '', category_1: 'all', category_2: 'About', category_3: 'Commercial', category_4: ''},

        {client_name: 'Bryce Kuhlman', company: 'Bryce Kuhlman', project_name: 'Good Life Experiences', date_published: 'December 2017', runtime: '4:34', vimeo_id: '241974869', description: '', category_1: 'all', category_2: 'About', category_3: 'Commercial', category_4: ''},

        {client_name: 'Nicole Felker Bergstrom', company: 'Northern Arizona Signs', project_name: 'Tour NOAZ', date_published: 'August 2017', runtime: '1:40', vimeo_id: '226229978', description: '', category_1: 'all', category_2: 'About', category_3: 'Commercial', category_4: ''},

        {client_name: 'Nicole Felker Bergstrom', company: 'Northern Arizona Signs', project_name: 'About Me - Phil', date_published: 'August 2017', runtime: '1:00', vimeo_id: '226391680', description: '', category_1: 'all', category_2: 'About', category_3: 'Commercial', category_4: ''},

        {client_name: 'August Colosimo', company: 'August For Homes', project_name: 'Nick Testimonial for August', date_published: 'March 2017', runtime: '1:20', vimeo_id: '211239766', description: '', category_1: 'all', category_2: 'Testimonial', category_3: '', category_4: ''},

        {client_name: 'Kathryn Mitchel', company: 'K Mitchell Media', project_name: 'August Testimonial for Kathryn', date_published: 'August 2017', runtime: '4:08', vimeo_id: '228758471', description: '', category_1: 'all', category_2: 'Testimonial', category_3: '', category_4: ''},

        {client_name: 'August Colosimo', company: 'August For Homes', project_name: 'Roberta Testimonial for August', date_published: 'June 2017', runtime: '4:58', vimeo_id: '221114415', description: '', category_1: 'all', category_2: 'Testimonial', category_3: '', category_4: ''},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Brianna - Why I Am Running', date_published: 'July 2017', runtime: '5:13', vimeo_id: '223722987', description: '', category_1: 'all', category_2: 'Campaign', category_3: 'Commercial', category_4: ''},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'KMM - Introduction', date_published: 'September 2017', runtime: '1:00', vimeo_id: '229499939', description: '', category_1: 'all', category_2: 'Social Media', category_3: 'Corporate', category_4: ''},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'Launch Party Fun', date_published: 'October 2017', runtime: '4:40', vimeo_id: '241437366', description: '', category_1: 'all', category_2: 'Social Media', category_3: 'Corporate', category_4: ''},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Brianna - I Am You', date_published: 'September 2017', runtime: '2:37', vimeo_id: '233348422', description: '', category_1: 'all', category_2: 'Campaign', category_3: 'Documentary', category_4: ''},

        {client_name: 'Dr. Lynne', company: 'Desert Jewel Institute', project_name: 'Breathe Meditation - Free Lesson from Dr. Lynne', date_published: 'June 2017', runtime: '4:56', vimeo_id: '223650194', description: '', category_1: 'all', category_2: 'Instructional', category_3: 'Social Media', category_4: ''},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'Kenton Testimonial for Kathryn', date_published: 'April 2017', runtime: '3:03', vimeo_id: '217214284', description: '', category_1: 'all', category_2: 'Testimonial', category_3: '', category_4: ''},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Brianna - Transgender Awareness Panel 2017', date_published: 'November 2017', runtime: '2:20', vimeo_id: '247789553', description: '', category_1: 'all', category_2: 'Campaign', category_3: 'Commercial', category_4: ''},

        {client_name: 'August Colosimo', company: 'August For Homes', project_name: 'Margaret Testimonial for August', date_published: 'March 2017', runtime: '1:13', vimeo_id: '211237977', description: '', category_1: 'all', category_2: 'Testimonial', category_3: '', category_4: ''},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'KMM - Demo Reel', date_published: 'September 2017', runtime: '8:27', vimeo_id: '236210729', description: '', category_1: 'all', category_2: 'Talent', category_3: 'Corporate', category_4: ''},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Brianna - I am for Bri Westbrook, and I vote', date_published: 'November 2017', runtime: '1:18', vimeo_id: '244594622', description: '', category_1: 'all', category_2: 'Campaign', category_3: 'Commercial', category_4: ''},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Brianna - Republicans Listen', date_published: 'July 2017', runtime: '4:39', vimeo_id: '223721887', description: '', category_1: 'all', category_2: 'Campaign', category_3: 'Commercial', category_4: ''},

        {client_name: 'Jennifer Toolan', company: 'The Art of Jennifer Toolan', project_name: 'Blooper Reel - Friday Feature', date_published: 'August 2017', runtime: '1:00', vimeo_id: '231932837', description: '', category_1: 'all', category_2: 'Talent', category_3: 'Commercial', category_4: ''},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Why I Will Be A Good Representative', date_published: 'July 2017', runtime: '2:19', vimeo_id: '223787484', description: '', category_1: 'all', category_2: 'Campaign', category_3: 'Commercial', category_4: ''},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'KMM About Us Anima SEO 1', date_published: 'September 2017', runtime: '1:12', vimeo_id: '232296490', description: '', category_1: 'all', category_2: 'Social Media', category_3: 'Corporate', category_4: ''},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'KMM About Us Anima SEO 2', date_published: 'September 2017', runtime: '1:48', vimeo_id: '232298678', description: '', category_1: 'all', category_2: 'Social Media', category_3: 'Corporate', category_4: ''},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'KMM About Us Anima SEO 3', date_published: 'September 2017', runtime: '0:40', vimeo_id: '232291904', description: '', category_1: 'all', category_2: 'Social Media', category_3: 'Corporate', category_4: ''},

        {client_name: 'George Parker', company: 'The Creation Game', project_name: 'Big Day of Creativity', date_published: 'June 2017', runtime: '1:23', vimeo_id: '221546547', description: '', category_1: 'all', category_2: 'Commercial', category_3: '', category_4: ''},

      ]);
    });
};
