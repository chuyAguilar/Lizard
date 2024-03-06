import { Router } from "express";
import * as directorioCtrl from '../controllers/directorio.controller.js';

const router = Router();

router.get('/', directorioCtrl.getDirectorio);
router.get('/:directorioId', directorioCtrl.getDirectorioById);
router.post('/', directorioCtrl.createDirectorio);
router.put('/:directorioId', directorioCtrl.updateDirectorio);
router.delete('/:directorioId', directorioCtrl.deleteDirectorio);

export default router;
