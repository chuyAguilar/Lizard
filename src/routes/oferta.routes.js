import { Router } from "express";
import * as ofertaCtrl from '../controllers/oferta.controller.js';

const router = Router();

router.get('/', ofertaCtrl.getOfertas);
router.get('/:ofertaId', ofertaCtrl.getOfertaById);
router.post('/', ofertaCtrl.createOferta);
router.put('/:ofertaId', ofertaCtrl.updateOferta);
router.delete('/:ofertaId', ofertaCtrl.deleteOferta);

export default router;
