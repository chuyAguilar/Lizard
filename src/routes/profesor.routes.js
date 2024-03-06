import { Router } from "express";
import * as profesorCtrl from '../controllers/profesor.controller.js';

const router = Router();

router.get('/', profesorCtrl.getProfesores);
router.get('/:profesorId', profesorCtrl.getProfesorById);
router.post('/', profesorCtrl.createProfesor);
router.put('/:profesorId', profesorCtrl.updateProfesor);
router.delete('/:profesorId', profesorCtrl.deleteProfesor);

export default router;
