
exports.seed = function(knex) {
    return knex('users').del()
        .then(function () {
            return knex('users').insert([
                {username: 'ttsuzuki',
                    password: '1234'}
            ]);
        });
};
