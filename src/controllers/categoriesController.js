const Category = require('../models/category');

module.exports = {

    async getAll(req, res, next) {

        try {
            const data = await Category.getAll();
            console.log(`Categorías ${JSON.stringify(data)}`);
            return res.status(201).json(data);
        } 
        catch (error) {
            console.log(`Error ${error}`);    
            return res.status(501).json({
                message: 'Error para obtener las categorías',
                error: error,
                success: false
            })
        }

    },

    async create(req, res, next) {
        try {
            const category = req.body;
            console.log(`Categoría enviada: ${category}`);

            const data = await Category.create(category);

            return res.status(201).json({
                message: 'La categoría se creo correctamente',
                success: true,
                data: data.id
            });

        } 
        catch (error) {
            console.log(`Error: ${error}`);    
            return res.status(501).json({
                message: 'Error al crear la categoría',
                success: false,
                error: error
            });
        }
    }

}