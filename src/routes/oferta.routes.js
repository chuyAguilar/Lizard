/*
import { Router } from "express";
const router = Router();

/* 
  #####                                                                       
 #     #  ####  #    # ##### #####   ####  #      #      ###### #####   ####  
 #       #    # ##   #   #   #    # #    # #      #      #      #    # #      
 #       #    # # #  #   #   #    # #    # #      #      #####  #    #  ####  
 #       #    # #  # #   #   #####  #    # #      #      #      #####       # 
 #     # #    # #   ##   #   #   #  #    # #      #      #      #   #  #    # 
  #####   ####  #    #   #   #    #  ####  ###### ###### ###### #    #  ####  
                                                                              

import * as ofertaCtrl from '../controllers/oferta.controller.js';

/*
 #     #                                                                  
 ##   ## # #####  #####  #      ###### #    #   ##   #####  ######  ####  
 # # # # # #    # #    # #      #      #    #  #  #  #    # #      #      
 #  #  # # #    # #    # #      #####  #    # #    # #    # #####   ####  
 #     # # #    # #    # #      #      # ## # ###### #####  #           # 
 #     # # #    # #    # #      #      ##  ## #    # #   #  #      #    # 
 #     # # #####  #####  ###### ###### #    # #    # #    # ######  ####  

import { authJwt } from "../middlewares/index.js";


//router.get('/', [authJwt.verifyToken,authJwt.isCostumer], ofertaCtrl.getOfertas);

router.get('/', ofertaCtrl.getOfertas);
router.get('/:ofertaId',[authJwt.verifyToken,authJwt.isCostumer],  ofertaCtrl.getOfertaById);
router.post('/',[authJwt.verifyToken,authJwt.isAdmin], ofertaCtrl.createOferta);
router.put('/:ofertaId',[authJwt.verifyToken,authJwt.isAdmin],  ofertaCtrl.updateOferta);
router.delete('/:ofertaId', [authJwt.verifyToken,authJwt.isAdmin], ofertaCtrl.deleteOferta);

export default router;
*/

// oferta.routes.js
/*
import { Router } from "express";
import * as ofertaCtrl from "../controllers/oferta.controller.js";
import { authJwt } from "../middlewares/index.js";
import OfertaEducativa from "../models/ofertaEducativa.js";
const router = Router();

// Ruta para obtener todas las ofertas educativas
router.get("/api/oferta-educativa", async (req, res) => {
  try {
    const ofertas = await OfertaEducativa.find();
    res.json(ofertas);
  } catch (error) {
    console.error("Error al obtener ofertas educativas:", error);
    res.status(500).json({ message: "Error al obtener ofertas educativas" });
  }
});

router.get(
  "/:ofertaId",
  [authJwt.verifyToken, authJwt.isCostumer],
  ofertaCtrl.getOfertaById
);
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  ofertaCtrl.createOferta
);
router.put(
  "/:ofertaId",
  [authJwt.verifyToken, authJwt.isAdmin],
  ofertaCtrl.updateOferta
);
router.delete(
  "/:ofertaId",
  [authJwt.verifyToken, authJwt.isAdmin],
  ofertaCtrl.deleteOferta
);

export default router;
*/

// oferta.routes.js

import { Router } from "express";
import * as ofertaCtrl from '../controllers/oferta.controller.js';
const router = Router();

// Rutas para ofertas educativas
router.get('/', ofertaCtrl.getOfertas);
router.get('/:ofertaId', ofertaCtrl.getOfertaById);
router.post('/', ofertaCtrl.createOferta);
router.put('/:ofertaId', ofertaCtrl.updateOferta);
router.delete('/:ofertaId', ofertaCtrl.deleteOferta);

export default router;
