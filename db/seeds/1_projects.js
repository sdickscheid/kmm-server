exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {

      return knex('projects').insert([
        {client_name: 'August Colosimo', company:'Homesmart', project_name: 'Meet August', published: 'May 2017', length: '6:42', vimeo_id: '228282012', description: '', c1: 'All', c2: 'About', c3: ''},

        {client_name: 'Kenton Knepper', company: 'Wonder Wizards', project_name: 'Music Was The Magic', published: 'June 2016', length: '16:55', vimeo_id: '212521921', description: '', c1: 'All', c2: '', c3: ''},

        {client_name: 'Nicole Felker Bergstrom', company: 'Northern Arizona Signs', project_name: 'NOAZ Instroduction', published: 'Aug 2017', length: '4:11', vimeo_id: '225881054', description: '', c1: 'All', c2: 'About', c3: ''},

        {client_name: 'Jennifer Toolan', company: 'The Art of Jennifer Toolan', project_name: 'Reality Show Audition Reel', published: 'Aug 2017', length: '1:00', vimeo_id: '219302946', description: '', c1: 'All', c2: 'About', c3: 'Audition'},

        {client_name: 'Dr. Lynne', company: 'Desert Jewel Institute', project_name: 'About Me - Dr. Lynne', published: 'June 2017', length: '4:16', vimeo_id: '222035664', description: '', c1: 'All', c2: 'About', c3: ''},

        {client_name: 'Nicole Felker Bergstrom', company: 'Northern Arizona Signs', project_name: 'NOAZ - A Closer Look', published: 'Aug 2017', length: '3:55', vimeo_id: '226229978', description: '', c1: 'All', c2: 'About', c3: ''},

        {client_name: 'Nicole Felker Bergstrom', company: 'Northern Arizona Signs', project_name: 'About Me - Hillarie', published: 'Aug 2017', length: '1:00', vimeo_id: '226383643', description: '', c1: 'All', c2: 'About', c3: ''},

        {client_name: 'Bryce Kuhlman', company: 'Bryce Kuhlman', project_name: 'Good Life Experiences', published: 'Dec 2017', length: '4:34', vimeo_id: '241974869', description: '', c1: 'All', c2: 'About', c3: ''},

        {client_name: 'Nicole Felker Bergstrom', company: 'Northern Arizona Signs', project_name: 'Tour NOAZ', published: 'Aug 2017', length: '1:40', vimeo_id: '226229978', description: '', c1: 'All', c2: 'About', c3: ''},

        {client_name: 'Nicole Felker Bergstrom', company: 'Northern Arizona Signs', project_name: 'About Me - Phil', published: 'Aug 2017', length: '1:00', vimeo_id: '226391680', description: '', c1: 'All', c2: 'About', c3: ''},

        {client_name: 'August Colosimo', company: 'August For Homes', project_name: 'Nick Testimonial for August', published: 'Mar 2017', length: '1:20', vimeo_id: '211239766', description: '', c1: 'All', c2: 'Testimonial', c3: ''},

        {client_name: 'Kathryn Mitchel', company: 'K Mitchell Media', project_name: 'August Testimonial for Kathryn', published: 'Aug 2017', length: '4:08', vimeo_id: '228758471', description: '', c1: 'All', c2: 'Testimonial', c3: ''},

        {client_name: 'August Colosimo', company: 'August For Homes', project_name: 'Roberta Testimonial for August', published: 'June 2017', length: '4:58', vimeo_id: '221114415', description: '', c1: 'All', c2: 'Testimonial', c3: ''},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Brianna - Why I Am Running', published: 'July 2017', length: '5:13', vimeo_id: '223722987', description: '', c1: 'All', c2: 'Campaign', c3: ''},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'KMM - Introduction', published: 'Sept 2017', length: '1:00', vimeo_id: '229499939', description: '', c1: 'All', c2: 'Social Media', c3: 'Corporate'},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'Launch Party Fun', published: 'Oct 2017', length: '4:40', vimeo_id: '241437366', description: '', c1: 'All', c2: 'Social Media', c3: 'Corporate'},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Brianna - I Am You', published: 'Sept 2017', length: '2:37', vimeo_id: '233348422', description: '', c1: 'All', c2: 'Campaign', c3: ''},

        {client_name: 'Dr. Lynne', company: 'Desert Jewel Institute', project_name: 'Breathe Meditation - Free Lesson from Dr. Lynne', published: 'June 2017', length: '4:56', vimeo_id: '223650194', description: '', c1: 'All', c2: 'Instructional', c3: 'Social Media'},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'Kenton Testimonial for Kathryn', published: 'Apr 2017', length: '3:03', vimeo_id: '217214284', description: '', c1: 'All', c2: 'Testimonial', c3: ''},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Brianna - Transgender Awareness Panel 2017', published: 'Nov 2017', length: '2:20', vimeo_id: '247789553', description: '', c1: 'All', c2: 'Campaign', c3: ''},

        {client_name: 'August Colosimo', company: 'August For Homes', project_name: 'Margaret Testimonial for August', published: 'Mar 2017', length: '1:13', vimeo_id: '211237977', description: '', c1: 'All', c2: 'Testimonial', c3: ''},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'KMM - Demo Reel', published: 'Sept 2017', length: '8:27', vimeo_id: '236210729', description: '', c1: 'All', c2: 'Talent', c3: 'Corporate'},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Brianna - I am for Bri Westbrook, and I vote', published: 'Nov 2017', length: '1:18', vimeo_id: '244594622', description: '', c1: 'All', c2: 'Campaign', c3: ''},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Brianna - Republicans Listen', published: 'July 2017', length: '4:39', vimeo_id: '223721887', description: '', c1: 'All', c2: 'Campaign', c3: ''},

        {client_name: 'Jennifer Toolan', company: 'The Art of Jennifer Toolan', project_name: 'Blooper Reel - Friday Feature', published: 'Aug 2017', length: '1:00', vimeo_id: '231932837', description: '', c1: 'All', c2: 'Talent', c3: ''},

        {client_name: 'Brianna Westbrook', company: 'Westbrook For Congress', project_name: 'Why I Will Be A Good Representative', published: 'July 2017', length: '2:19', vimeo_id: '223787484', description: '', c1: 'All', c2: 'Campaign', c3: ''},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'KMM About Us Anima SEO 1', published: 'Sept 2017', length: '1:12', vimeo_id: '232296490', description: '', c1: 'All', c2: 'Social Media', c3: 'Corporate'},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'KMM About Us Anima SEO 2', published: 'Sept 2017', length: '1:48', vimeo_id: '232298678', description: '', c1: 'All', c2: 'Social Media', c3: 'Corporate'},

        {client_name: 'Kathryn Mitchell', company: 'K Mitchell Media', project_name: 'KMM About Us Anima SEO 3', published: 'Sept 2017', length: '0:40', vimeo_id: '232291904', description: '', c1: 'All', c2: 'Social Media', c3: 'Corporate'},

        {client_name: 'George Parker', company: 'The Creation Game', project_name: 'Big Day of Creativity', published: 'June 2017', length: '1:23', vimeo_id: '221546547', description: '', c1: 'All', c2: 'DIY', c3: ''}

      ]);
    });
};
