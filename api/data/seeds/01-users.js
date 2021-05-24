exports.seed = async function(knex) {
    await knex('users').insert([
        {
            username: 'yogastudent123',
            password: 'ireally<3yoga',
            role: 'client'
        },
        {
            username: 'yogateacher123',
            password: 'ireally<3yoga',
            role: 'instructor'
        }
    ]);
}
