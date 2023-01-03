const { Router } = require('express');
const { check } = require('express-validator');
const { getItems } = require('../controllers/items');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/:id', getItems);
router.get('/', getItems);

module.exports = router;