const express = require('express')

const router = express.Router()


////////

router.get('/home', (req, res) => { //lo que responde a '/'
    res.send('Estas en home')    
})


///////


module.exports = router