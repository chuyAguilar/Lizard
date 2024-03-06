import Admision from '../models/admision.js';

export const getAdmisiones = async (req, res) =>{
    const admisiones = await Admision.find();
    res.json(admisiones);
}

export const getAdmisionById = async (req, res) => {
    try {
        const admision = await Admision.findById(req.params.admisionId);
        if (!admision) {
            return res.status(404).json({ message: 'Admision no encontrada' });
        }
        res.json(admision);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createAdmision = async (req, res) =>{
    try{    
        const {nombre, activo} = req.body;
        const newAdmision = new Admision({nombre,activo});
        const admisionSave = await newAdmision.save();
        res.status(201).json(admisionSave);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateAdmision = async (req, res) => {
    try {
        const { nombre, activo } = req.body;
        const updatedAdmision = await Admision.findByIdAndUpdate(req.params.admisionId, { nombre, activo }, { new: true });
        if (!updatedAdmision) {
            return res.status(404).json({ message: 'Admision no encontrada' });
        }
        res.json(updatedAdmision);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAdmision = async (req, res) => {
    try {
        const deletedAdmision = await Admision.findByIdAndDelete(req.params.admisionId);
        if (!deletedAdmision) {
            return res.status(404).json({ message: 'Admision no encontrada' });
        }
        res.json({ message: 'Admision borrada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}