const expresss = require('express')
const Usuario = require('./controllers/usuario')
const Usoia = require('./controllers/usoia')
const router = expresss.Router()

const RotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

router.get('/', RotaInicial)
router.post('/usuarios', Usuario.cadastrar)
router.get('/usuarios', Usuario.listar)
router.put('/usuarios/:id', Usuario.atualizar)
router.delete('/usuarios/:id', Usuario.excluir )

router.get('/usoia', Usoia.listar)
router.post('/usoia', Usoia.cadastrar)
router.put('/usoia/:id', Usoia.atualizar)
router.delete('/usoia/:id', Usoia.excluir)

module.exports = router