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



router.get('/', [authJwt.verifyToken,authJwt.isCustomer], ofertaCtrl.getOfertas);
router.get('/:ofertaId',[authJwt.verifyToken,authJwt.isCustomer],  ofertaCtrl.getOfertaById);
router.post('/',[authJwt.verifyToken,authJwt.isAdmin], ofertaCtrl.createOferta);
router.put('/:ofertaId',[authJwt.verifyToken,authJwt.isAdmin],  ofertaCtrl.updateOferta);
router.delete('/:ofertaId', [authJwt.verifyToken,authJwt.isAdmin], ofertaCtrl.deleteOferta);

export default router;
