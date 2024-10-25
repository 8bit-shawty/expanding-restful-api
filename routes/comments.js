const express = require('express')
const router = express.Router()
const comments = require('../data/comments.js')
const error = require('../utilities/error.js')

router.get('/', (req, res, next) => {
    res.json(comments)
})

module.exports = router