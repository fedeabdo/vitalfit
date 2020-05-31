const express = require('express')

const router = express.Router()

const cliente = require("../models/cliente")

////////

router.get('/home', (req, res) => { //lo que responde a '/'
    res.send('Estas en home')    
})


///////


module.exports = router