import Product from '../models/Product.js';

//VER TODOS LOS PRODUCTOS
export const getProducts = async (req, res) => {
    try {
        const { category, name } = req.query;
        let query = {};

        if (category) {
            query.category = category;
        }

        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }

        const products = await Product.find(query);

        res.json(products);

    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error: error.message });
    }
};

//VER UN PRODUCTO
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ mensaje: 'ID no válido o error de servidor' });
    }
};

// CREAR PRODUCTO
export const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        const message = error.errors
            ? Object.values(error.errors)[0].message
            : 'Error al crear el producto';

        res.status(400).json({ mensaje: message });
    }
};

// ACTUALIZAR PRODUCTO
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        res.json(updatedProduct);
    } catch (error) {
        const message = error.errors
            ? Object.values(error.errors)[0].message
            : 'Error al actualizar el producto';

        res.status(400).json({ mensaje: message });
    }
};

// BORRAR PRODUCTO
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ mensaje: 'El producto ya no existe o ya fue eliminado' });
        }

        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al eliminar', error });
    }
};