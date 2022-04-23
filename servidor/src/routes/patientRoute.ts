import { Router } from "express";
import PatientController from '../controllers/PatientController'

import { is } from '../middlewares/permission'

const router = Router()

router
    .post('/patients', is(["ADMIN"]), PatientController.create)
    .get('/patients', is(["ADMIN", "USER_PADRAO"]), PatientController.showAll)
    .get('/patients/:id', is(["ADMIN", "USER_PADRAO"]), PatientController.showOne)
    .put('/patients/:id', is(["ADMIN", "USER_PADRAO"]), PatientController.update)
    .delete('/patients/:id', is(["ADMIN"]), PatientController.delete)

export default router

