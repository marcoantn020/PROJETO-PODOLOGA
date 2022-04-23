import { Router } from "express";
import ProductController from "../controllers/ProductController";

import { is } from '../middlewares/permission'

const router = Router()

router
    .post('/products', is(["ADMIN"]), ProductController.create)
    .get('/products', is(["ADMIN", "USER_PADRAO"]), ProductController.index)
    .get('/products/:id', is(["ADMIN", "USER_PADRAO"]), ProductController.show)

export default router