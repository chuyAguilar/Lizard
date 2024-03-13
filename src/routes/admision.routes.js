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
import * as admisionCtrl from '../controllers/admision.controller.js';

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


//Establecer ruta admision mediante el metodo GET
router.get('/',[authJwt.verifyToken, authJwt.isCostumer], authJwt.verifyToken,admisionCtrl.getAdmisiones);
router.get('/:admisionId', [authJwt.verifyToken, authJwt.isCostumer],admisionCtrl.getAdmisionById);
router.post('/',[authJwt.verifyToken, authJwt.isAdmin], admisionCtrl.createAdmision);
router.put('/:admisionId', [authJwt.verifyToken, authJwt.isAdmin],admisionCtrl.updateAdmision);
router.delete('/:admisionId',[authJwt.verifyToken, authJwt.isAdmin], admisionCtrl.deleteAdmision);

export default router;