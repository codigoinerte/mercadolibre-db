const { request, response } = require("express")
const Busquedas = require('../models/busqueda');

const busqueda = new Busquedas();

const getItems = async (req = request, res = response) => {


    const { id = '' } = req.params;
    const { q = ''} = req.query;

    if(id !='')
    {
        let { status, respuesta } = await busqueda.detalleItem(id);  
        
        status = typeof respuesta.status != 'string' && typeof respuesta.status != 'undefined' ? respuesta.status :  status;
        
        res.status(status).json({
            ...respuesta
        })      
    }
    else
    {        
        let { status, respuesta } = await busqueda.buscarItems(q);
        
        status = typeof respuesta.status != 'string' && typeof respuesta.status != 'undefined' ? respuesta.status : status;
        
        res.status(status).json({
            ...respuesta
        })
    }

    
}

module.exports = {
    getItems
}