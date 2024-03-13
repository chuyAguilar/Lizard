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
                                                                              
*/
import * as ofertaCtrl from '../controllers/oferta.controller.js';

/*
 #     #                                                                  
 ##   ## # #####  #####  #      ###### #    #   ##   #####  ######  ####  
 # # # # # #    # #    # #      #      #    #  #  #  #    # #      #      
 #  #  # # #    # #    # #      #####  #    # #    # #    # #####   ####  
 #     # # #    # #    # #      #      # ## # ###### #####  #           # 
 #     # # #    # #    # #      #      ##  ## #    # #   #  #      #    # 
 #     # # #####  #####  ###### ###### #    # #    # #    # ######  ####  
*/
import { authJwt } from "../middlewares/index.js";



router.get('/', [authJwt.verifyToken,authJwt.isCostumer], ofertaCtrl.getOfertas);
router.get('/:ofertaId',[authJwt.verifyToken,authJwt.isCostumer],  ofertaCtrl.getOfertaById);
router.post('/',[authJwt.verifyToken,authJwt.isAdmin], ofertaCtrl.createOferta);
router.put('/:ofertaId',[authJwt.verifyToken,authJwt.isAdmin],  ofertaCtrl.updateOferta);
router.delete('/:ofertaId', [authJwt.verifyToken,authJwt.isAdmin], ofertaCtrl.deleteOferta);

export default router;
