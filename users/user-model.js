const db = require('../data/db-config')

module.exports = {
    find,
    add
}


function find(){
    return db('users')
}

async function add(user){
    const [id] = await db('users').insert(user, 'id')
    return db('users').where({id}).first()
}