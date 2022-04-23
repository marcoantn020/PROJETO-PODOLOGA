import { Router } from "express";
import TasksController from "../controllers/TasksController";

import { is } from '../middlewares/permission'

const router = Router()

router
    .post('/tasks', is(["ADMIN"]), TasksController.create)
    .get('/tasks', is(["ADMIN", "USER_PADRAO"]), TasksController.show)
    .get('/tasks/:date', is(["ADMIN", "USER_PADRAO"]), TasksController.showOne)
    .put('/tasks/:id', is(["ADMIN", "USER_PADRAO"]), TasksController.update)
    .delete('/tasks/:id', is(["ADMIN", "USER_PADRAO"]), TasksController.destroy)

export default router
