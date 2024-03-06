import mongoose from 'mongoose';

const { Schema } = mongoose;

const directorioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true // Para asegurar que no haya duplicados de correo
    },
    ocupacion: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Directorio', directorioSchema);
