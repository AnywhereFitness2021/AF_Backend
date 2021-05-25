exports.seed = async function(knex) {
    await knex('classes').insert([
        {
            name: 'Hill Sprints',
            type: 'High Intensity Interval Training',
            startTime: '2PM',
            duration: '25 Minutes',
            intensityLevel: 'Advanced',
            location: 'North Mountain',
        },
        {
            name: 'Yoga Made Easy',
            type: 'Yoga',
            startTime: '1PM',
            duration: '35 Minutes',
            intensityLevel: 'Beginner',
            location: 'Mute City',
        },
        {
            name: 'Practicing the Squat & Deadlift',
            type: 'Weight Lifting',
            startTime: '9AM',
            duration: '30 Minutes',
            intensityLevel: 'Intermediate',
            location: 'Big Blue',
        }
    ]);
}
