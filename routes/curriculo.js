const express = require('express')
const router = express.Router()
const CurriculoController = require('../controllers/curriculo-controller')

router.get('/curriculo', (req, res, next) => {
    const curriculo = CurriculoController.getCurriculo()
    res.render('curriculo', curriculo)
})

module.exports = router