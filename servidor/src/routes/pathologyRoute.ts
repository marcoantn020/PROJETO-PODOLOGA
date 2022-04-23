import { Router } from "express";
import PathologyController from "../controllers/PathologyController";

import { is } from '../middlewares/permission'

const router = Router()

router
    .post('/pathologies', is(["ADMIN"]), PathologyController.create)
    .get('/patient/:patientId/pathology', is(["ADMIN", "USER_PADRAO"]), PathologyController.showOne)
    .put('/patient/:patientId/pathology', is(["ADMIN", "USER_PADRAO"]), PathologyController.update)

export default router;