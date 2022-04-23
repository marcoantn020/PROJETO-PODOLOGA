import { Router } from "express";
import AttendanceController from "../controllers/AttendanceController";

import { is } from '../middlewares/permission'

const router = Router()

router
    .post('/attendance', is(["ADMIN"]), AttendanceController.create)
    .get('/patient/:patientId/attendance', is(["ADMIN", "USER_PADRAO"]), AttendanceController.showOne)
    .get('/patient/:patientId/attendances', is(["ADMIN", "USER_PADRAO"]), AttendanceController.show)

export default router