const knex = require("../db/knex.js");

module.exports =  {
    getCrew(req, res) {
        knex('crew')
            .select()
            .then(crew => res.json(crew));
    }
}