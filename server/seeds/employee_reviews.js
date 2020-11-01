
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {employee_id:  10, text: 'Tanner exceeds all expectations in his role as server. He always has a positive attitude. He adapts easily to rapid change in the workplace. He works well under pressure by himself and with other team members. He is detail-oriented and completes tasks in a timely manner. He even seeks out additional responsibilities when his schedule allows.'},
        {employee_id: 11, text: 'Shun meets all company expectations in his role as customer service rep. He adapts well to client demands and changing workloads. He maintains a sense of detail and a positive attitude even under pressure. These skills, though, come at the expense of time management. And while Shun shows an aptitude for leadership, he doesn’t actively seek out leadership training or opportunities.'},
        {employee_id: 8, text: 'River meets some of the company expectations in her role as barista but falls well short of others. She is an active listener, manages her time efficiently, and is always conscientious about the quality of her work. River needs to work on demonstrating professionalism at all times and, though she works well by herself, would benefit greatly from additional team-building skills.'},
        {employee_id:  9, text: 'Tanner exceeds all expectations in his role as server. He always has a positive attitude. He adapts easily to rapid change in the workplace. He works well under pressure by himself and with other team members. He is detail-oriented and completes tasks in a timely manner. He even seeks out additional responsibilities when his schedule allows.'},
        {employee_id: 14, text: 'Shun meets all company expectations in his role as customer service rep. He adapts well to client demands and changing workloads. He maintains a sense of detail and a positive attitude even under pressure. These skills, though, come at the expense of time management. And while Shun shows an aptitude for leadership, he doesn’t actively seek out leadership training or opportunities.'},
        {employee_id: 12, text: 'River meets some of the company expectations in her role as barista but falls well short of others. She is an active listener, manages her time efficiently, and is always conscientious about the quality of her work. River needs to work on demonstrating professionalism at all times and, though she works well by herself, would benefit greatly from additional team-building skills.'},
        {employee_id: 13, text: 'River meets some of the company expectations in her role as barista but falls well short of others. She is an active listener, manages her time efficiently, and is always conscientious about the quality of her work. River needs to work on demonstrating professionalism at all times and, though she works well by herself, would benefit greatly from additional team-building skills.'}
      ]);
    });
};
