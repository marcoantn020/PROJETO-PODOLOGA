import { Router } from "express";
import UserController from "../controllers/UserController";


const router = Router()

router
    .post('/usuarios', UserController.create)
    .get('/usuarios/roles', UserController.roles)
    .get('/usuarios', UserController.showAll)

export default router