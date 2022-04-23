import { EntityRepository, Repository } from "typeorm";
import Attendance from "../models/Attendance";

@EntityRepository(Attendance)
class AttendanceRepository extends Repository<Attendance> {

}

export default AttendanceRepository