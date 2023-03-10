const { request, response } = require("express")
const Busquedas = require('../models/busqueda');

const busqueda = new Busquedas();

const getItems = async (req = request, res = response) => {


    const { id = '' } = req.params;
    const { q = '', pagina = 1} = req.query;

    let { status, respuesta = {}, error = '' } = (id !='') ? await busqueda.detalleItem(id) : await busqueda.buscarItems(q, pagina);
    
    if(status == 200)
    {
        res.status(status).json({...respuesta})
    }
    else
    {
        res.status(status).json({ error })
    }

    
}

module.exports = {
    getItems
}