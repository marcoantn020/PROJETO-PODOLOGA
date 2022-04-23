import { Router } from "express";
import PermissionController from "../controllers/PermissionController";


const router = Router()

router
    .post('/permissions', PermissionController.create)

export default router