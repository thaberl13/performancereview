
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {employee_id:  43, text: 'Brian exceeds all expectations in his role as server. He always has a positive attitude. He adapts easily to rapid change in the workplace. He works well under pressure by himself and with other team members. He is detail-oriented and completes tasks in a timely manner. He even seeks out additional responsibilities when his schedule allows.'},
        {employee_id: 44, text: 'Klaus meets all company expectations in his role as customer service rep. He adapts well to client demands and changing workloads. He maintains a sense of detail and a positive attitude even under pressure. These skills, though, come at the expense of time management. And while Shun shows an aptitude for leadership, he doesn’t actively seek out leadership training or opportunities.'},
        {employee_id: 45, text: 'Tanner exceeds all expectations in his role as server. He always has a positive attitude. He adapts easily to rapid change in the workplace. He works well under pressure by himself and with other team members. He is detail-oriented and completes tasks in a timely manner. He even seeks out additional responsibilities when his schedule allows.'},
        {employee_id:  46, text: 'Shun meets all company expectations in his role as customer service rep. He adapts well to client demands and changing workloads. He maintains a sense of detail and a positive attitude even under pressure. These skills, though, come at the expense of time management. And while Shun shows an aptitude for leadership, he doesn’t actively seek out leadership training or opportunities.'},
        {employee_id: 47, text: 'Misaki meets all company expectations in her role as customer service rep. She adapts well to client demands and changing workloads. She maintains a sense of detail and a positive attitude even under pressure. These skills, though, come at the expense of time management. And while Misaki shows an aptitude for leadership, she doesn’t actively seek out leadership training or opportunities.'},
        {employee_id: 48, text: 'Keiko meets some of the company expectations in her role as barista but falls well short of others. She is an active listener, manages her time efficiently, and is always conscientious about the quality of her work. River needs to work on demonstrating professionalism at all times and, though she works well by herself, would benefit greatly from additional team-building skills.'},
        {employee_id: 49, text: 'Chris meets some of the company expectations in his role as barista but falls well short of others. He is an active listener, manages her time efficiently, and is always conscientious about the quality of her work. River needs to work on demonstrating professionalism at all times and, though she works well by herself, would benefit greatly from additional team-building skills.'}
      ]);
    });
};
