exports.seed = async function(knex) {
    await knex('users').insert([
        {
            username: 'yogastudent123',
            password: 'ireally<3yoga',
            role: 'Client'
        },
        {
            username: 'yogateacher123',
            password: 'ireally<3yoga',
            role: 'Instructor'
        }
    ]);
}
