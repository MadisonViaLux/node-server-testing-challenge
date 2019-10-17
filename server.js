const express = require('express')
const server = express()
const Users = require('./users/user-router')


server.use(express.json())
server.use('/api', Users)


server.get('/', (req, res) => {
    res.status(200).json('Hello there');
});



module.exports = server