const router = require('express').Router()
const Users = require('./user-model')


router.get('/', (req, res) => {
    Users.find()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => res.send(err))
});

router.post('/signup', (req, res) => {
    const user = req.body

    Users.add(user)
        .then(person => {
            res.status(200).json(person)
        })
        .catch(err => res.status(500).json(console.log(err)))
})




module.exports = router
