import { Router } from "express";
import AuthorizationController from "../controllers/AuthorizationController";


const router = Router()

router
    .post('/auth', AuthorizationController.create)

export default router