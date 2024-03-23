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
import * as profesorCtrl from '../controllers/profesor.controller.js';



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

router.get('/', [authJwt.verifyToken,authJwt.isCustomer],profesorCtrl.getProfesores);
router.get('/:profesorId',[authJwt.verifyToken,authJwt.isCustomer], profesorCtrl.getProfesorById);
router.post('/', [authJwt.verifyToken,authJwt.isAdmin],profesorCtrl.createProfesor);
router.put('/:profesorId',[authJwt.verifyToken,authJwt.isAdmin], profesorCtrl.updateProfesor);
router.delete('/:profesorId',[authJwt.verifyToken,authJwt.isAdmin], profesorCtrl.deleteProfesor);

export default router;
