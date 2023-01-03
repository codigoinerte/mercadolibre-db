const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

class Busquedas
{
    constructor()
    {
        this.url = 'https://api.mercadolibre.com/';
    }

    async buscarItems(query)
    {
        try {

            const response = await fetch(`${this.url}sites/MLA/search?q=${query}`);            
            const respuesta = await response.json();

            
            return {
                status: response.status,
                respuesta
            };

        } catch (error) {
            console.log(error);

            return {
                status: 500,
                error : 'Hubo un error interno'
            }
        }
    }

    async detalleItem(id)
    {
        try {                        

            const consulta1 = fetch(`${this.url}items/${id}`);
            const consulta2 = fetch(`${this.url}items/${id}/description`);
    
            const [response1, response2] = await Promise.all([consulta1, consulta2]);
                       
            const respuesta1 = await response1.json();
            const respuesta2 = await response2.json();

            return {
                status: response1.status,
                respuesta : {
                    ...respuesta1,
                    ...respuesta2
                }
    
            };
        
        } catch (error) {
            console.log(error);

            return {
                status: 500,
                error : 'Hubo un error interno'
    
            }
        }

    }
}

module.exports = Busquedas;