
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('crew').del()
    .then(function () {
      // Inserts seed entries
      return knex('crew').insert([
        {
          name: 'Terry Keel',
          title: 'Director / Cinematographer',
          description: 'Terry Keel is the owner of Tiki Films USA, LLC. He has decades of experience in Photography, Cinematography, and sound editor. Terry Keel has a degree in fine art photography and has been a professional photographer since opening his first studio in Glendale, Arizona in 1980.',
          imageUrl: './images/crew/KMMllc CREW Terry.jpg'
        },
        {
          name: 'Jim Hesterman',
          title: 'Cinematographer / Editor',
          description: 'Jim Hesterman has been a photographer and cinematographer for over decade. His expereince is in tv, fashion, comercial and social media campaigns.',
          imageUrl: './images/crew/KMMllc CREW Jim.jpg'
        },
        {
          name: 'Randall Bohl',
          title: 'Photographer / Cinematographer',
          description: 'Randall Bohl photography began in San Francisco over 25 years ago. He earned a BS in communications at Western Michigan University.',
          imageUrl: './images/crew/KMMllc CREW Randall.jpg'
        },
        {
          name: 'Sarah Niana',
          title: 'Internship - Graphic Design / Social Media / Cinematography',
          description: 'Intern-Sarah has an AA Degree in Visual Communications from the Fashion Institute of Design and Merchandising, in Californina. She just returned from a semester abroad at the University of Art London in the UK.',
          imageUrl: './images/crew/KMMllc CREW Jim.jpg'
        },
        {
          name: 'Angela Scott',
          title: 'Cinematographer',
          description: 'Angela has a BS in Communications from Northern Arizona University. She has five years experience: reporting, cinematography, editing, and producing shows for cable and TV.',
          imageUrl: './images/crew/KMMllc CREW Angela.jpg'
        },
        {
          name: 'Akanksha Misha',
          title: 'Internship - Research / Google Suite / Graphic Design',
          description: 'Research & Development',
          imageUrl: './images/crew/KMMllc CREW Akanksha.jpg'
        },
        {
          name: 'Jack Toolan',
          title: 'Internship - Cinematography',
          description: 'Jack graduated from Brophy College Prep High School already having published two short films he produced and directed. He is interning on the cinematography and editing stages of production.',
          imageUrl: './images/crew/crew-thumbnail_placeholder.png'
        },
        {
          name: 'Trevor Denton',
          title: 'Animation',
          description: 'Creative writer and digital media project director specializing in educational publishing and content development. Develops creative solutions with subject matter experts from any field to drive mission-focused communications. ',
          imageUrl: './images/crew/KMMllc CREW Trevor.jpg'
        },
      ]);
    });
};
