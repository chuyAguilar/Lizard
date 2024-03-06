import Profesor from '../models/profesor.js';

// Obtener todos los profesores
export const getProfesores = async (req, res) => {
    try {
        const profesores = await Profesor.find();
        res.json(profesores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener un profesor por su ID
export const getProfesorById = async (req, res) => {
    try {
        const profesor = await Profesor.findById(req.params.profesorId);
        if (!profesor) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }
        res.json(profesor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Crear un nuevo profesor
export const createProfesor = async (req, res) => {
    try {
        const { nombre, apellidos, numeroEmpleado, correo, fechaNacimiento } = req.body;
        const newProfesor = new Profesor({ nombre, apellidos, numeroEmpleado, correo, fechaNacimiento });
        const profesorSave = await newProfesor.save();
        res.status(201).json(profesorSave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Actualizar un profesor por su ID
export const updateProfesor = async (req, res) => {
    try {
        const { nombre, apellidos, numeroEmpleado, correo, fechaNacimiento } = req.body;
        const updatedProfesor = await Profesor.findByIdAndUpdate(req.params.profesorId, { nombre, apellidos, numeroEmpleado, correo, fechaNacimiento }, { new: true });
        if (!updatedProfesor) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }
        res.json(updatedProfesor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Eliminar un profesor por su ID
export const deleteProfesor = async (req, res) => {
    try {
        const deletedProfesor = await Profesor.findByIdAndDelete(req.params.profesorId);
        if (!deletedProfesor) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }
        res.json({ message: 'Profesor eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
