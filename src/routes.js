const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.get('/carro/:codigo', CarroController.alterar);
router.get('/carro/:codigo', CarroController.excluir);

module.exports = router;