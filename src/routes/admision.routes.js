import { Router } from "express";

const router = Router();

import * as admisionCtrl from '../controllers/admision.controller.js';

//Establecer ruta admision mediante el metodo GET
router.get('/', admisionCtrl.getAdmisiones);
router.get('/:admisionId', admisionCtrl.getAdmisionById);
router.post('/', admisionCtrl.createAdmision);
router.put('/:admisionId', admisionCtrl.updateAdmision);
router.delete('/:admisionId', admisionCtrl.deleteAdmision);

export default router;