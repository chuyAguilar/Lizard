import Directorio from '../models/directorio.js';

export const getDirectorio = async (req, res) => {
    try {
        const directorio = await Directorio.find();
        res.json(directorio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getDirectorioById = async (req, res) => {
    try {
        const directorio = await Directorio.findById(req.params.directorioId);
        if (!directorio) {
            return res.status(404).json({ message: 'Elemento de directorio no encontrado' });
        }
        res.json(directorio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createDirectorio = async (req, res) => {
    try {
        const { nombre, apellidos, correo, ocupacion } = req.body;
        const newDirectorio = new Directorio({ nombre, apellidos, correo, ocupacion });
        const directorioSave = await newDirectorio.save();
        res.status(201).json(directorioSave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateDirectorio = async (req, res) => {
    try {
        const { nombre, apellidos, correo, ocupacion } = req.body;
        const updatedDirectorio = await Directorio.findByIdAndUpdate(req.params.directorioId, { nombre, apellidos, correo, ocupacion }, { new: true });
        if (!updatedDirectorio) {
            return res.status(404).json({ message: 'Elemento de directorio no encontrado' });
        }
        res.json(updatedDirectorio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteDirectorio = async (req, res) => {
    try {
        const deletedDirectorio = await Directorio.findByIdAndDelete(req.params.directorioId);
        if (!deletedDirectorio) {
            return res.status(404).json({ message: 'Elemento de directorio no encontrado' });
        }
        res.json({ message: 'Elemento de directorio borrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
