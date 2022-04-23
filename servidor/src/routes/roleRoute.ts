import { Router } from "express";
import RoleController from "../controllers/RoleController";


const router = Router()

router
    .post('/roles', RoleController.create)

export default router