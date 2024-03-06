import OfertaEducativa from '../models/ofertaEducativa.js';

// Obtener todas las ofertas educativas
export const getOfertas = async (req, res) => {
    try {
        const ofertas = await OfertaEducativa.find();
        res.json(ofertas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener una oferta educativa por su ID
export const getOfertaById = async (req, res) => {
    try {
        const oferta = await OfertaEducativa.findById(req.params.ofertaId);
        if (!oferta) {
            return res.status(404).json({ message: 'Oferta educativa no encontrada' });
        }
        res.json(oferta);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Crear una nueva oferta educativa
export const createOferta = async (req, res) => {
    try {
        const { nombre, activo } = req.body;
        const newOferta = new OfertaEducativa({ nombre, activo });
        const ofertaSave = await newOferta.save();
        res.status(201).json(ofertaSave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Actualizar una oferta educativa por su ID
export const updateOferta = async (req, res) => {
    try {
        const { nombre, activo } = req.body;
        const updatedOferta = await OfertaEducativa.findByIdAndUpdate(req.params.ofertaId, { nombre, activo }, { new: true });
        if (!updatedOferta) {
            return res.status(404).json({ message: 'Oferta educativa no encontrada' });
        }
        res.json(updatedOferta);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Eliminar una oferta educativa por su ID
export const deleteOferta = async (req, res) => {
    try {
        const deletedOferta = await OfertaEducativa.findByIdAndDelete(req.params.ofertaId);
        if (!deletedOferta) {
            return res.status(404).json({ message: 'Oferta educativa no encontrada' });
        }
        res.json({ message: 'Oferta educativa eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
